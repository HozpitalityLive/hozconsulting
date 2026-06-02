
import os

from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_admin.form import ImageUploadField
from datetime import datetime

from bs4 import BeautifulSoup
from markupsafe import Markup
from slugify import slugify
from wtforms import TextAreaField

app = Flask(__name__)

# SECRET KEY
app.config['SECRET_KEY'] = 'hozflask-secret-key'

# DATABASE CONFIG
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blogs.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# IMAGE UPLOAD FOLDER
app.config['UPLOAD_FOLDER'] = 'static/uploads/blogs'

# DATABASE INIT
db = SQLAlchemy(app)

# BLOG MODEL
class Blog(db.Model):

    __tablename__ = "blog"

    id = db.Column(db.Integer, primary_key=True)

    # Basic Information
    title = db.Column(db.String(255), nullable=False)
    slug = db.Column(db.String(255), unique=True, nullable=False)

    category = db.Column(db.String(255))
    short_description = db.Column(db.Text)

    # Main Content
    content = db.Column(db.Text)

    # Images
    image = db.Column(db.String(500))
    author_image = db.Column(db.String(500))

    # Author Information
    author_name = db.Column(db.String(255))

    # SEO
    seo_title = db.Column(db.String(255))
    seo_description = db.Column(db.Text)
    seo_keywords = db.Column(db.Text)

    # Blog Meta
    read_time = db.Column(db.String(50))
    tags = db.Column(db.Text)

    # Status
    status = db.Column(
        db.String(20),
        default="Draft"
    )

    is_featured = db.Column(
        db.Boolean,
        default=False
    )

    # Timestamps
    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )

    def __repr__(self):
        return f"<Blog {self.title}>"



# CUSTOM ADMIN VIEW
class BlogAdmin(ModelView):

    create_template = 'admin/blog_create.html'
    edit_template = 'admin/blog_edit.html'
    form_columns = [
        'title',
        'slug',
        'category',
        'author_image',
        'author_name',
        'image',
        'short_description',
        'content',
        'tags',
        'read_time',
        'status',
        'is_featured',
        'seo_title',
        'seo_description',
        'seo_keywords'
    ]

    form_overrides = {
        'content': TextAreaField
    }

    form_extra_fields = {

        'image': ImageUploadField(
            'Featured Image',
            base_path=os.path.join(
                os.path.dirname(__file__),
                'static',
                'uploads',
                'blogs'
            ),
            relative_path=''
        ),

        'author_image': ImageUploadField(
            'Author Image',
            base_path=os.path.join(
                os.path.dirname(__file__),
                'static',
                'uploads',
                'authors'
            ),
            relative_path=''
        )


    }

    can_view_details = True
    page_size = 20

# WEBSITE ROUTES
admin = Admin(
    app,
    name='Hozpitality Consulting AdminPanel'
)

admin.add_view(
    BlogAdmin(
        Blog,
        db.session
    )
)

@app.route('/')
def home():
    return render_template('pages/home.html')


@app.route('/contact')
def contact():
    return render_template('pages/contact.html')


@app.route('/about')
def about():
    return render_template('pages/about.html')


@app.route('/services')
def services():
    return render_template('pages/services.html')


@app.route('/hotel-owners')
def hotel_owners():
    return render_template('pages/hotel-owners.html')


@app.route('/franchise-partnerships')
def franchise_partnerships():
    return render_template('pages/franchise-partnerships.html')


# BLOG LISTING PAGE
@app.route('/blogs')
def blogs():

    blogs = Blog.query.filter_by(
        status='Published'
    ).order_by(
        Blog.id.desc()
    ).all()

    return render_template(
        'pages/blogs.html',
        blogs=blogs
    )


# BLOG DETAILS PAGE
@app.route('/blog/<slug>')
def blog_details(slug):

    blog = Blog.query.filter_by(
    slug=slug,
    status='Published'
    ).first_or_404()

    soup = BeautifulSoup(blog.content or "", "html.parser")

    toc = []

    count = 1

    for heading in soup.find_all(["h2", "h3"]):

        heading_id = f"section-{count}"

        heading["id"] = heading_id

        toc.append({
            "id": heading_id,
            "title": heading.get_text()
        })

        count += 1

    blog_content = str(soup)

    related_blogs = Blog.query.filter(
        Blog.category == blog.category,
        Blog.id != blog.id,
        Blog.status == 'Published'
    ).limit(3).all()

    return render_template(
        "pages/blog-details.html",
        blog=blog,
        blog_content=Markup(blog_content),
        toc=toc,
        related_blogs=related_blogs
    )


# CREATE DATABASE
with app.app_context():
    db.create_all()


# RUN APP
if __name__ == '__main__':
    app.run(debug=True)
