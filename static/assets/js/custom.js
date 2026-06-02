(function ($) {
  "use strict";


  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper", // should wrap the whole page
    content: "#smooth-content", // should contain all content
    smooth: 2,
    smoothTouch: 0.1,
    effects: true, // must be true to use data-lag
  });


  $(".sidebar-button").on("click", function () {
    $(this).toggleClass("active");
  });

  const sidebarButton = document.querySelector(".sidebar-button");

  if (sidebarButton) {
    sidebarButton.addEventListener("click", () => {
      document.querySelector(".main-menu").classList.toggle("show-menu");
    });
  }

  $(".menu-close-btn").on("click", function () {
    $(".main-menu").removeClass("show-menu");
  });

  document.querySelectorAll(".landing-header .menu-list li a").forEach(function(link){
      link.addEventListener("click", function(){
          document.querySelector(".main-menu").classList.remove("show-menu");
      });
  });


  jQuery(".dropdown-icon").on("click", function () {
    jQuery(this)
      .toggleClass("active")
      .next("ul, .mega-menu, .mega-menu2")
      .slideToggle();
    jQuery(this)
      .parent()
      .siblings()
      .children("ul, .mega-menu, .mega-menu2")
      .slideUp();
    jQuery(this).parent().siblings().children(".active").removeClass("active");
  });
  jQuery(".dropdown-icon2").on("click", function () {
    jQuery(this).toggleClass("active").next(".submenu-list").slideToggle();
    jQuery(this).parent().siblings().children(".submenu-list").slideUp();
    jQuery(this).parent().siblings().children(".active").removeClass("active");
  });

  // sticky header
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header.header-area");
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 0);
    }
  });

  
  // Back To Top
  jQuery(function ($) {
    const el = document.getElementById("scroll-percentage");
    const valueEl = document.getElementById("scroll-percentage-value");
    if (!el || !valueEl) return;

    const offset = 50;

    function update() {
      const scrollTop = $(window).scrollTop();
      const docH = $(document).height() - $(window).height();

      const progress = docH > 0 ? Math.min(scrollTop / docH, 1) : 0;
      const pct = Math.round(progress * 100);

      // text
      valueEl.textContent = pct + "%";

      // conic gradient
      // IMPORTANT: conic-gradient needs "deg" or "%" stops
      el.style.background = `conic-gradient(var(--primary-color1) ${pct}%, var(--progress-bg) ${pct}%)`;

      // show/hide
      if (scrollTop > offset) el.classList.add("active");
      else el.classList.remove("active");

      // at 100% show arrow (hide percent)
      if (pct >= 100) el.classList.add("is-complete");
      else el.classList.remove("is-complete");
    }

    update();
    $(window).on("scroll resize", update);

    // click (arrow or anywhere inside)
    $("#scroll-percentage").on("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // FancyBox Js
  $('[data-fancybox="gallery-01"]').fancybox({
    buttons: ["close"],
    loop: false,
    protect: true,
  });
  $('[data-fancybox="video-player"]').fancybox({
    buttons: ["close"],
    loop: false,
    protect: true,
  });

  
  // Home1 Banner Slider
  var swiper = new Swiper(".home1-banner-slider", {
    loop: false,
    speed: 1200,
    effect: "fade",
    autoplay: {
      delay: 3000, // Autoplay duration in milliseconds
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      }
    }
  });
  // Home1 Testimonial Slider
  var swiper = new Swiper(".home1-testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
    pagination: {
      el: ".progress-pagination",
      type: "progressbar",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });
  // Home1 Blog Slider
  var swiper = new Swiper(".home1-blog-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".blog-slider-next",
      prevEl: ".blog-slider-prev",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  });
  // Home2 Banner Slider
  var bannerContentSwiper = new Swiper(".home2-banner-content-slider", {
    loop: false,
    speed: 1200,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 4, spaceBetween: 15 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home2-banner-slider", {
    loop: false,
    speed: 1200,
    effect: "fade",
    slidesPerView: 1,
    autoplay: { 
      delay: 3000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: bannerContentSwiper,
    },

    on: {
      init: function () {
        updateProgress(this.activeIndex);
      },
      slideChangeTransitionStart: function () {
        updateProgress(this.activeIndex);
      }
    },
  });
  // Home2 Testimonial Slider
  var swiper = new Swiper(".home2-testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
    pagination: {
      el: ".progress-pagination",
      type: "progressbar",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  });

   // Home2 Testimonial Slider
  var swiper = new Swiper(".home3-testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 24,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
  });

  // Recent Product Slider
  var swiper = new Swiper(".related-product-slider", {
    speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2000, // Autoplay duration in milliseconds
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".related-product-slider-next",
      prevEl: ".related-product-slider-prev",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  // About Page Journey Slider
  var swiper = new Swiper(".about-page-journey-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      350: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });

   // Event Thumb Img Slider
  var swiper = new Swiper(".event-thumb-img-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 24,
    effect: "fade",
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
  });
  var swiper = new Swiper(".event-speaker-card-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".speaker-card-slider-next",
      prevEl: ".speaker-card-slider-prev",
    },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });
  // Contact Page Location Slider Slider
  var swiper = new Swiper(".contact-page-location-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  function updateProgress(index) {
    // remove all animate class
    document.querySelectorAll(".slide_progress-bar").forEach(function (el) {
      el.classList.remove("animate");
    });

    // add animate class to active one
    var activeProgress = document.querySelectorAll(".slide_progress-bar")[index];
    if (activeProgress) {
      // restart animation trick
      activeProgress.classList.remove("animate");
      void activeProgress.offsetWidth; 
      activeProgress.classList.add("animate");
    }
  }
  //wow js
  jQuery(window).on("load", function () {
    new WOW().init();
    window.wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
      offset: 80,
    });
    window.wow.init();
  });

  // niceSelect
  if ($("select").length) {
    $("select").niceSelect();
  }

  // Header Hover White and
  jQuery(function ($) {
    const $wrap = $(".home1-header-topbar-wrap");

    function isAnyOpen() {
      return (
        $(".right-sidebar-menu").hasClass("show-right-menu") ||
        $(".language-list").hasClass("active") ||
        $(".search-bar-wrap").hasClass("active")
      );
    }

    function refreshWhiteBg() {
      const hover = $wrap.hasClass("is-hover");
      const locked = $wrap.hasClass("is-locked");
      $wrap.toggleClass("white-bg", hover || locked);
    }

    function lockIfOpen() {
      $wrap.toggleClass("is-locked", isAnyOpen());
      refreshWhiteBg();
    }

    // ✅ hover behaviour (normal)
    $wrap.on("mouseenter", function () {
      $wrap.addClass("is-hover");
      refreshWhiteBg();
    });

    $wrap.on("mouseleave", function () {
      $wrap.removeClass("is-hover");
      refreshWhiteBg(); 
    });

    // ✅ open toggles
    $(".language-btn, .search-btn").on("click", function (e) {
      e.stopPropagation();
      const $parent = $(this).parent();
      $parent.find(".language-list, .search-bar-wrap").toggleClass("active");

      if ($(this).hasClass("search-btn")) {
        $(".search-bar-content-wrap").removeClass("active");
      }

      lockIfOpen();
    });

    $(".right-sidebar-button").on("click", function (e) {
      e.stopPropagation();
      $(".right-sidebar-menu").addClass("show-right-menu");
      lockIfOpen();
    });

    // ✅ close buttons (remove only if NOT hovering)
    $(".right-sidebar-close-btn").on("click", function (e) {
      e.stopPropagation();
      $(".right-sidebar-menu").removeClass("show-right-menu");
      lockIfOpen();
    });

    $(".search-close-btn").on("click", function (e) {
      e.stopPropagation();
      $(".search-bar-wrap, .search-bar-content-wrap").removeClass("active");
      $(".input-area input").val("").blur();
      lockIfOpen();
    });

    // ✅ input focus -> show content
    $(".input-area input").on("focus", function () {
      $(".search-bar-content-wrap").addClass("active");
    });

    // ✅ click outside wrap -> close all
    $(document).on("click", function (e) {
      if (!$(e.target).closest(".home1-header-topbar-wrap, .home2-header-topbar-wrap, .home3-header-topbar-wrap").length) {
        $(".right-sidebar-menu").removeClass("show-right-menu");
        $(".language-list").removeClass("active");
        $(".search-bar-wrap, .search-bar-content-wrap").removeClass("active");

        lockIfOpen();
      }
    });

    // ✅ prevent inside click bubbling
    $wrap.on("click", function (e) {
      e.stopPropagation();
    });

    // init
    lockIfOpen();
  });

  $(".office-address-btn").on("click", function (e) {
    e.stopPropagation();
    const $parent = $(this).parent();
    $parent.find(".office-address-list").toggleClass("active");
  });
  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".office-address-btn").length
    ) {
      $(".office-address-list").removeClass("active");
    }
  });

  //Home1 Industry Multistep
  document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector(".multi-step-wrapper");
    if (!wrapper) return;
    let step1 = document.querySelector(".multi-step-wrapper .step-1");
    let step2 = document.querySelector(".multi-step-wrapper .step-2");
    let finalStep = document.querySelector(".multi-step-wrapper .final-step");

    // STEP 1 → STEP 2
    document.querySelectorAll(".multi-step-wrapper .step-1 .single-industry").forEach(item =>{
      item.addEventListener("click", () =>{
        step1.classList.remove("active");
        step2.classList.add("active");
      })
    });

    // STEP 2 → FINAL STEP
    document.querySelectorAll(".multi-step-wrapper .step-2 .single-industry-feature").forEach(item =>{
      item.addEventListener("click", () =>{
        step2.classList.remove("active");
        finalStep.classList.add("active")
      });
    });

    // FINAL STEP → STEP 1
    document.querySelector(".reset-btn").addEventListener("click", () =>{
      finalStep.classList.remove("active");
      step1.classList.add("active");
    });

  });
  
  // Home1 Why choose progress animation
  let circle = document.querySelector(".home1-why-choose-section .progress-circle");
  let checkItems = document.querySelectorAll(".home1-why-choose-section .check-list li");
  let length = 2665; // total stroke length

  gsap.set(circle, {
    strokeDasharray: length,
    strokeDashoffset: length
  });

  ScrollTrigger.matchMedia({
    // desktop only
    "(min-width: 1200px)": function() {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home1-why-choose-section .why-choose-step-area",
          start: "top 30px",
          end: "+=1600",
          scrub: 1,
          pin: true,
        },
        defaults: { duration: 1 }
      });

      // Animate the circle
      tl.to(circle, { strokeDashoffset: 2000 })
        .to(circle, { strokeDashoffset: 1330 })
        .to(circle, { strokeDashoffset: 665 })
        .to(circle, { strokeDashoffset: 0 });

      // Thresholds for each check item
      const thresholds = [2000, 1330, 665, 0];

      tl.eventCallback("onUpdate", () => {
        let offset = gsap.getProperty(circle, "strokeDashoffset");
        checkItems.forEach((li, i) => {
          if (offset <= thresholds[i]) {
            li.classList.add("active");
          } else {
            li.classList.remove("active");
          }
        });
      });
    },
    // optional: smaller devices
    "(max-width: 1199px)": function() {
      // disable animation on smaller screens
      gsap.set(circle, { strokeDashoffset: 0 });
    }
  });

  // Service Card 2 - Collapsed Height Calculation
  document.querySelectorAll('.service-card2').forEach(card => {
    const content = card.querySelector('.service-content');
    const titleArea = card.querySelector('.title-area');

    function setCollapsedHeight() {
      if (!content || !titleArea) return;

      // get title height
      const titleHeight = titleArea.offsetHeight;

      // get real padding of content (top + bottom)
      const styles = getComputedStyle(content);
      const paddingTop = parseFloat(styles.paddingTop);
      const paddingBottom = parseFloat(styles.paddingBottom);

      // small breathing space
      const extraSpace = 2;

      const collapsedHeight = titleHeight + paddingTop + paddingBottom + extraSpace;

      content.style.setProperty('--collapsed-height', collapsedHeight + 'px');
    }

    // run on load
    setCollapsedHeight();

    // run on resize (debounced for performance)
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setCollapsedHeight, 150);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".single-tab");
    const forms = document.querySelectorAll(".tax-calculator-form-input");
    const summaries = document.querySelectorAll(".tax-summary");

    /* ===============================
      TAB SWITCHING
    =============================== */
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        // active tab
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // active form
        forms.forEach(f => f.classList.remove("active"));
        forms[index].classList.add("active");

        // active summary
        summaries.forEach(s => s.classList.remove("active"));
        summaries[index].classList.add("active");
      });
    });
  });

  // Handle click on the input item
  $(".custom-select-dropdown").on("click", function () {
    $(".custom-select-wrap").toggleClass("active");
  });

  $(".single-search-box, .single-field").each(function () {
    var $box = $(this);
    var $dropdown = $box.find(".custom-select-dropdown");
    var $input = $dropdown.find("input");
    var $wrap = $box.find(".custom-select-wrap");
    var $searchInput = $wrap.find(".custom-select-search-area input");

    // Toggle dropdown on click
    $dropdown.on("click", function (e) {
      e.stopPropagation();
      $(".custom-select-wrap").removeClass("active"); // Close others
      $wrap.toggleClass("active");
    });

    $wrap.find(".option-list li").on("click", function () {
      var value = $(this).find("h3").text();
      $input.val(value);
      $wrap.removeClass("active");
    });

    // Close dropdown on click outside
    $(document).on("click", function (event) {
      if (!$(event.target).closest($box).length) {
        $wrap.removeClass("active");
      }
    });
  });

  // Home3 Service Section Animation
  const serviceDtMedia = gsap.matchMedia();
  serviceDtMedia.add("(min-width: 992px)", () => {
    const cards = gsap.utils.toArray(".service-card3");
    const offset = 20; // The vertical gap visible at the bottom

    // 1. Initial State: Create the "Deck" look
    cards.forEach((card, index) => {
      gsap.set(card, {
        // Scale: Top card is 1, next is 0.95, then 0.90
        scale: 1 - index * 0.05,
        // Y: Top card is 0, next is 20px, then 40px
        y: index * offset,
        transformOrigin: "bottom center",
        // Important: Ensure Card 1 is on top of Card 2
        zIndex: cards.length - index 
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home3-service-section .service-wrapper",
        start: "top 90px",
        end: () => `+=${cards.length * 100}%`,
        pin: true,
        scrub: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        const nextCard = cards[index + 1];

        // 2. Peel the current card UP and out
        tl.to(card, {
          yPercent: -120,
          opacity: 1,
          duration: 1,
        }, `card-${index}`);

        // 3. Move the NEXT card to the top and scale it to 1
        tl.to(nextCard, {
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power1.inOut"
        }, `card-${index}`);

        // 4. Shift all cards below up by one "offset" step
        for (let j = index + 2; j < cards.length; j++) {
          tl.to(cards[j], {
            y: (j - (index + 1)) * offset,
            duration: 1,
            ease: "power1.inOut"
          }, `card-${index}`);
        }
      }
    });
  });

  // Home3 Pie Chart
  document.addEventListener("DOMContentLoaded", function () {
    // Check if the canvas with id 'taxChart' exists
    const taxChartCanvas = document.getElementById("taxChart");

    if (taxChartCanvas) {
      // Canvas exists → create the chart
      new Chart(taxChartCanvas, {
        type: "pie",
        data: {
          datasets: [
            {
              data: [12, 20, 8, 60],
              backgroundColor: ["#CCF664", "#C1C1C1", "#002E5B", "#193133"],
              borderWidth: 10,
              borderColor: "#fff",
              offset: [20, 20, 20, 0], // explode effect
              hoverOffset: 0,
              hoverBorderWidth: 0,
              hoverBorderColor: "transparent",
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
            tooltip: {
              displayColors: false,
              callbacks: { label: (ctx) => ctx.raw + "%" },
            },
          },
        },
      });
    } else {
      // Canvas not found → do nothing
      console.warn("taxChart canvas not found on this page.");
    }
  });

  // Solution2 Page Animation
  serviceDtMedia.add("(min-width: 992px)", () => {
    let cards = gsap.utils.toArray(".solution2-page-process-section .solution2-process-card");
  
    let stickDistance = 0;
  
    let lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: "top 140px"
    });
  
    cards.forEach((card, index) => {
      var scale = 1 - (cards.length - index) * 0.025;
      let scaleDown = gsap.to(card, { scale: scale, 'transform-origin': '"50% ' + (lastCardST.start + stickDistance) + '"' });
  
      ScrollTrigger.create({
        trigger: card,
        start: "top 140px",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse"
      });
    });
  });

 // pricing Plan Price Change
  function check() {
    var checkBox = document.getElementById("checbox");
    var monthly = document.getElementsByClassName("price--monthly");
    var yearly = document.getElementsByClassName("price--yearly");

    for (var i = 0; i < monthly.length; i++) {
      if (checkBox.checked) {
        monthly[i].style.display = "none";
        yearly[i].style.display = "flex";
      } else {
        monthly[i].style.display = "flex";
        yearly[i].style.display = "none";
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checbox");

    if (!checkbox) return;

    checkbox.addEventListener("change", check);

    check(); // initial load
  });

  // Terms Sticky sidebar
  if (window.innerWidth > 991) {
    const sidebar = document.querySelector(".terms-page-sidebar");
    const content = document.querySelector(".terms-page-content-wrap");

    if (sidebar && content) {
      ScrollTrigger.create({
        trigger: sidebar,
        start: "top 20px",
        end: () => "+=" + (content.offsetHeight - sidebar.offsetHeight),
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
    }
  }
  // Career Details Sticky sidebar
  if (window.innerWidth > 991) {
    const sidebar = document.querySelector(".career-details-sidebar");
    const content = document.querySelector(".career-details-page-content-wrap");

    if (sidebar && content) {
      ScrollTrigger.create({
        trigger: sidebar,
        start: "top 20px",
        end: () => "+=" + (content.offsetHeight - sidebar.offsetHeight),
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
    }
  }
  // Blog Details Sticky sidebar
  if (window.innerWidth > 991) {
    const sidebar = document.querySelector(".blog-details-sidebar");
    const content = document.querySelector(".blog-details-content-wrap");

    if (sidebar && content) {
      ScrollTrigger.create({
        trigger: sidebar,
        start: "top 20px",
        end: () => "+=" + (content.offsetHeight - sidebar.offsetHeight),
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
    }
  }

  // People Page Alphabetic Search 
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".alphabet-filter button");
    const cards = document.querySelectorAll(".team-item");
    const searchInput = document.querySelector(".team-search-input");
    const resetBtn = document.querySelector(".team-reset-btn");
    const resultCount = document.querySelector(".team-result-count span");
    const noResults = document.querySelector(".no-results");
    const loadMoreBtn = document.querySelector(".load-more-btn");
    // page has no filter section → STOP
    if (!cards.length) return;

    let activeLetter = "all";

    // Auto data-name
    cards.forEach(card => {
      const nameEl = card.querySelector(".team-name");
      if (nameEl) {
        const name = nameEl.innerText.trim();
        card.setAttribute("data-name", name);
      }
    });

    function filterCards() {
      const searchValue = searchInput ? searchInput.value.toLowerCase() : "";
      let visibleCount = 0;

      cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();

        const matchLetter =
          activeLetter === "all" || name.startsWith(activeLetter.toLowerCase());

        const matchSearch = name.includes(searchValue);

        if (matchLetter && matchSearch) {
          card.classList.remove("hide");
          visibleCount++;
        } else {
          card.classList.add("hide");
        }
      });

      // Update count (check first)
      if (resultCount) {
        resultCount.innerText = `Showing ${visibleCount} item’s of ${cards.length}`;
      }

      // No results
      if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
      }
      if (loadMoreBtn) {
        loadMoreBtn.style.display = visibleCount === 0 ? "none" : "flex";
      }
    }

    // Alphabet click
    if (buttons.length) {
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          buttons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          activeLetter = btn.dataset.letter;
          filterCards();
        });
      });
    }

    // Search
    if (searchInput) {
      searchInput.addEventListener("input", filterCards);
    }

    // Reset
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";

        activeLetter = "all";

        if (buttons.length) {
          buttons.forEach(b => b.classList.remove("active"));
          const allBtn = document.querySelector('[data-letter="all"]');
          if (allBtn) allBtn.classList.add("active");
        }

        filterCards();
      });
    }

    filterCards();

  });

  // Copy Link Btn (MULTIPLE SUPPORT)
  document.addEventListener("DOMContentLoaded", function () {
    const copyBtns = document.querySelectorAll(".copy-link-btn");

    if (!copyBtns.length) return;

    copyBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

        const copyAlert = btn.querySelector(".copy-alert"); // scoped to this button
        if (!copyAlert) return;

        navigator.clipboard.writeText(window.location.href).then(() => {
          // restart animation if clicked quickly
          copyAlert.classList.remove("show");
          void copyAlert.offsetWidth; // force reflow
          copyAlert.classList.add("show");

          clearTimeout(copyAlert._timer);
          copyAlert._timer = setTimeout(() => {
            copyAlert.classList.remove("show");
          }, 2000);
        });
      });
    });
  });

  // sticky effect for inner page navigation
  ScrollTrigger.create({
    trigger: ".inner-page-navigation-section",
    start: "top top",
    end: "max",
    pin: true,
    pinSpacing: false,
    // High priority ensures this pin is calculated before other triggers
    refreshPriority: 1,
    // Helps smooth out the transition into the pinned state
    anticipatePin: 1,
    // Ensures calculations are reset if the page layout shifts
    invalidateOnRefresh: true,
    // Mandatory for most smooth scrollers
    pinType: "transform",
  });

  // all nav links
  const navItems = document.querySelectorAll(".page-navigation-item a");

  // all sections (from data-target)
  const sections = [];

  // collect sections
  navItems.forEach((link) => {
    const target = document.querySelector(link.dataset.target);
    if (target) {
      sections.push(target);
    }
  });

  //  SCROLL → ACTIVE CHANGE
  sections.forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActive(i),
      onEnterBack: () => setActive(i),
    });
  });

  // active class function
  function setActive(index) {
    document.querySelectorAll(".page-navigation-item").forEach((item) => {
      item.classList.remove("active");
    });

    document
      .querySelectorAll(".page-navigation-item")
      [index].classList.add("active");
  }

  // CLICK → SMOOTH SCROLL
  navItems.forEach((link, i) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector(link.dataset.target);

      // active instantly
      setActive(i);

      // smooth scroll (ScrollSmoother support)
      if (ScrollSmoother.get()) {
        ScrollSmoother.get().scrollTo(target, true, "top top");
      } else {
        gsap.to(window, {
          duration: 1,
          scrollTo: target,
        });
      }
    });
  });


  //Quantity Increment
  $(".quantity__minus").on("click", function (e) {
    e.preventDefault();
    var input = $(this).siblings(".quantity__input");
    var value = parseInt(input.val(), 10);
    if (value > 1) {
      value--;
    }
    input.val(value.toString().padStart(2, "0"));
  });
  $(".quantity__plus").on("click", function (e) {
    e.preventDefault();
    var input = $(this).siblings(".quantity__input");
    var value = parseInt(input.val(), 10);
    value++;
    input.val(value.toString().padStart(2, "0"));
  });

  //Cart Menu Quantity button toggle
  $(".qty-btn").on("click", function (e) {
    e.stopPropagation();
    // Toggle "active" class for the current quantity button and its related elements
    $(this).next(".quantity-area").toggleClass("active");

    // Remove "active" class from other quantity buttons and related elements
    $(".quantity-area")
      .not($(this).next(".quantity-area"))
      .removeClass("active");
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".quantity-area").length) {
      // Remove "active" class from all quantity buttons and related elements
      $(".quantity-area").removeClass("active");
    }
  });

  // Payment Method
	$(function () {
		$(".choose-payment-method ul li").on("click", function () {
		  $(".choose-payment-method ul li").removeClass("active"); // Remove active class from all list items
		  if ($(this).hasClass("stripe")) {
			$("#StripePayment").show();
			$("#OfflinePayment").hide();
			$(this).addClass("active"); // Add active class to the clicked list item
		  } else if ($(this).hasClass("paypal")) {
			$("#OfflinePayment").hide();
			$("#StripePayment").hide();
			$(this).addClass("active"); // Add active class to the clicked list item
		  } else if ($(this).hasClass("offline")) {
			$("#OfflinePayment").show();
			$("#StripePayment").hide();
			$(this).addClass("active"); // Add active class to the clicked list item
		  } else {
			$("#StripePayment").hide();
			$("#OfflinePayment").hide();
		  }
		});
	});
  
  // Scroll Down all elements with data-target attribute
  const scrollTriggers = document.querySelectorAll("[data-target]");

  // Define top offset (gap)
  const scrollOffset = 80;

  scrollTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();

      const targetSelector = trigger.getAttribute("data-target");
      const scrollTarget = document.querySelector(targetSelector);

      if (scrollTarget) {
        // If GSAP ScrollSmoother is active
        if (typeof smoother !== "undefined") {
          // Scroll with offset
          const targetPosition =
            scrollTarget.getBoundingClientRect().top +
            window.scrollY -
            scrollOffset;
          smoother.scrollTo(targetPosition, true);
        } else {
          // Fallback: native smooth scroll with offset
          const targetPosition =
            scrollTarget.getBoundingClientRect().top +
            window.scrollY -
            scrollOffset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });



  if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
    if ($(window).width() > 1024) {
      gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
      });
      $(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');

      if ($("a.magnetic-item").length) {
        $("a.magnetic-item").addClass("not-hide-cursor");
      }

      var $mouse = { x: 0, y: 0 }; // Cursor position
      var $pos = { x: 0, y: 0 }; // Cursor position
      var $ratio = 0.15; // delay follow cursor
      var $active = false;
      var $ball = $("#ball");

      var $ballWidth = 20; // Ball default width
      var $ballHeight = 20; // Ball default height
      var $ballOpacity = 0.5; // Ball default opacity
      var $ballBorderWidth = 2; // Ball default border width

      gsap.set($ball, {
        // scale from middle and style ball
        xPercent: -50,
        yPercent: -50,
        width: $ballWidth,
        height: $ballHeight,
        borderWidth: $ballBorderWidth,
        opacity: $ballOpacity,
      });

      document.addEventListener("mousemove", mouseMove);

      function mouseMove(e) {
        $mouse.x = e.clientX;
        $mouse.y = e.clientY;
      }

      gsap.ticker.add(updatePosition);

      function updatePosition() {
        if (!$active) {
          $pos.x += ($mouse.x - $pos.x) * $ratio;
          $pos.y += ($mouse.y - $pos.y) * $ratio;

          gsap.set($ball, { x: $pos.x, y: $pos.y });
        }
      }

      $(".magnetic-wrap").mousemove(function (e) {
        parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
        callParallax(e, this);
      });

      function callParallax(e, parent) {
        parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25); // magnetic area = higher number is more attractive
      }

      function parallaxIt(e, parent, target, movement) {
        var boundingRect = parent.getBoundingClientRect();
        var relX = e.clientX - boundingRect.left;
        var relY = e.clientY - boundingRect.top;

        gsap.to(target, {
          duration: 0.3,
          x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
          y:
            ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
          ease: Power2.easeOut,
        });
      }

      function parallaxCursor(e, parent, movement) {
        var rect = parent.getBoundingClientRect();
        var relX = e.clientX - rect.left;
        var relY = e.clientY - rect.top;
        $pos.x =
          rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
        $pos.y =
          rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
        gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
      }

      // Magic cursor behavior
      // ======================

      // Magnetic item hover.
      $(".magnetic-wrap")
        .on("mouseenter mouseover", function (e) {
          $ball.addClass("magnetic-active");
          gsap.to($ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
          $active = true;
        })
        .on("mouseleave", function (e) {
          $ball.removeClass("magnetic-active");
          gsap.to($ball, {
            duration: 0.3,
            width: $ballWidth,
            height: $ballHeight,
            opacity: $ballOpacity,
          });
          gsap.to(this.querySelector(".magnetic-item"), {
            duration: 0.3,
            x: 0,
            y: 0,
            clearProps: "all",
          });
          $active = false;
        });

      // Alternative cursor style on hover.
      $(
        ".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a"
      )
        .not(".magnetic-item") // omit from selection.
        .on("mouseenter", function () {
          gsap.to($ball, {
            duration: 0.3,
            borderWidth: 0,
            opacity: 0.2,
            backgroundColor: "#CCC",
            width: "90px",
            height: "90px",
          });
        })
        .on("mouseleave", function () {
          gsap.to($ball, {
            duration: 0.3,
            borderWidth: $ballBorderWidth,
            opacity: $ballOpacity,
            backgroundColor: "transparent",
            width: $ballWidth,
            height: $ballHeight,
            clearProps: "backgroundColor",
          });
        });

      // Cursor view on hover (data attribute "data-cursor="...").
      $("[data-cursor]").each(function () {
        $(this)
          .on("mouseenter", function () {
            $ball
              .addClass("ball-view")
              .append('<div class="ball-view-inner"></div>');
            $(".ball-view-inner").append($(this).attr("data-cursor"));

            gsap.to($ball, {
              duration: 0.3,
              yPercent: -75,
              padding: "8px 20px", // ✅ instead of fixed width/height
              opacity: 1,
              borderWidth: 0,
              height: "auto", // ✅ allow auto height
            });

            gsap.to(".ball-view-inner", {
              duration: 0.3,
              scale: 1,
              autoAlpha: 1,
            });
          })
          .on("mouseleave", function () {
            gsap.to($ball, {
              duration: 0.3,
              yPercent: -50,
              width: $ballWidth, // back to default circle
              height: $ballHeight,
              opacity: $ballOpacity,
              borderWidth: $ballBorderWidth,
              padding: 0, // ✅ reset padding
            });
            $ball.removeClass("ball-view").find(".ball-view-inner").remove();
          });
        $(this).addClass("not-hide-cursor");
      });

      // Cursor drag on hover (class "cursor-drag"). For Swiper sliders.
      $(".swiper").each(function () {
        if ($(this).parent().attr("data-simulate-touch") === "true") {
          if ($(this).parent().hasClass("cursor-drag")) {
            $(this)
              .on("mouseenter", function () {
                $ball.append('<div class="ball-drag"></div>');
                gsap.to($ball, {
                  duration: 0.3,
                  width: 60,
                  height: 60,
                  opacity: 1,
                });
              })
              .on("mouseleave", function () {
                $ball.find(".ball-drag").remove();
                gsap.to($ball, {
                  duration: 0.3,
                  width: $ballWidth,
                  height: $ballHeight,
                  opacity: $ballOpacity,
                });
              });
            $(this).addClass("not-hide-cursor");

            // Ignore "data-cursor" on hover.
            $(this)
              .find("[data-cursor]")
              .on("mouseenter mouseover", function () {
                $ball.find(".ball-drag").remove();
                return false;
              })
              .on("mouseleave", function () {
                $ball.append('<div class="ball-drag"></div>');
                gsap.to($ball, {
                  duration: 0.3,
                  width: 60,
                  height: 60,
                  opacity: 1,
                });
              });
          }
        }
      });

      // Cursor drag on mouse down / click and hold effect (class "cursor-drag-mouse-down"). For Swiper sliders.
      $(".swiper").each(function () {
        if ($(this).parent().attr("data-simulate-touch") === "true") {
          if ($(this).parent().hasClass("cursor-drag-mouse-down")) {
            $(this)
              .on("mousedown pointerdown", function (e) {
                if (e.which === 1) {
                  // Affects the left mouse button only!
                  gsap.to($ball, {
                    duration: 0.2,
                    width: 60,
                    height: 60,
                    opacity: 1,
                  });
                  $ball.append('<div class="ball-drag"></div>');
                }
              })
              .on("mouseup pointerup", function () {
                $ball.find(".ball-drag").remove();
                if ($(this).find("[data-cursor]:hover").length) {
                } else {
                  gsap.to($ball, {
                    duration: 0.2,
                    width: $ballWidth,
                    height: $ballHeight,
                    opacity: $ballOpacity,
                  });
                }
              })
              .on("mouseleave", function () {
                $ball.find(".ball-drag").remove();
                gsap.to($ball, {
                  duration: 0.2,
                  width: $ballWidth,
                  height: $ballHeight,
                  opacity: $ballOpacity,
                });
              });

            // Ignore "data-cursor" on mousedown.
            $(this)
              .find("[data-cursor]")
              .on("mousedown pointerdown", function () {
                return false;
              });

            // Ignore "data-cursor" on hover.
            $(this)
              .find("[data-cursor]")
              .on("mouseenter mouseover", function () {
                $ball.find(".ball-drag").remove();
                return false;
              });
          }
        }
      });

      // Cursor close on hover.
      $(".cursor-close").each(function () {
        $(this).addClass("ball-close-enabled");
        $(this)
          .on("mouseenter", function () {
            $ball.addClass("ball-close-enabled");
            $ball.append('<div class="ball-close">Close</div>');
            gsap.to($ball, {
              duration: 0.3,
              yPercent: -75,
              width: 80,
              height: 80,
              opacity: 1,
            });
            gsap.from(".ball-close", { duration: 0.3, scale: 0, autoAlpha: 0 });
          })
          .on("mouseleave click", function () {
            $ball.removeClass("ball-close-enabled");
            gsap.to($ball, {
              duration: 0.3,
              yPercent: -50,
              width: $ballWidth,
              height: $ballHeight,
              opacity: $ballOpacity,
            });
            $ball.find(".ball-close").remove();
          });

        // Hover on "cursor-close" inner elements.
        $(
          ".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor"
        )
          .not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
          .on("mouseenter", function () {
            $ball.removeClass("ball-close-enabled");
          })
          .on("mouseleave", function () {
            $ball.addClass("ball-close-enabled");
          });
      });

      // ================================================================
      // Scroll between anchors
      // ================================================================

      $('a[href^="#"]')
        .not('[href$="#"]') // omit from selection
        .not('[href$="#0"]') // omit from selection
        .on("click", function () {
          var target = this.hash;

          // If fixed header position enabled.
          if ($("#tt-header").hasClass("tt-header-fixed")) {
            var $offset = $("#tt-header").height();
          } else {
            var $offset = 0;
          }

          // You can use data attribute (for example: data-offset="100") to set top offset in HTML markup if needed.
          if ($(this).data("offset") != undefined)
            $offset = $(this).data("offset");

          return false;
        });

      // Show/hide magic cursor
      // =======================

      // Hide on hover.
      $(
        "a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor"
      ) // class "hide-cursor" is for global use.
        .not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
        .not(".cursor-alter") // omit from selection
        .not(".tt-main-menu-list > li > a") // omit from selection
        .not(".tt-main-menu-list > li > .tt-submenu-trigger > a") // omit from selection
        .on("mouseenter", function () {
          gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
        })
        .on("mouseleave", function () {
          gsap.to($ball, { duration: 0.3, scale: 1, opacity: $ballOpacity });
        });

      // Hide on click.
      $("a")
        .not('[target="_blank"]') // omit from selection.
        .not('[href^="#"]') // omit from selection.
        .not('[href^="mailto"]') // omit from selection.
        .not('[href^="tel"]') // omit from selection.
        .not(".lg-trigger") // omit from selection.
        .not(".video-player") // omit from selection.
        .not(".tt-btn-disabled") // omit from selection.
        .on("click", function () {
          gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
        });

      // Show/hide on document leave/enter.
      $(document)
        .on("mouseleave", function () {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
        })
        .on("mouseenter", function () {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
        });

      // Show as the mouse moves.
      $(document).mousemove(function () {
        gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
      });
    }
  }

  //Counter Js
  document.querySelectorAll(".counter_number").forEach((el) => {
    const rawText = el.textContent.trim();
    const finalValue = parseInt(rawText, 10) || 0;

    // 🔍 detect if we should show leading zero
    const hasLeadingZero =
      finalValue >= 10 || (rawText.length > 1 && rawText.startsWith("0"));

    const counter = { value: 0 };

    gsap.to(counter, {
      value: finalValue,
      duration: 0.7,
      ease: "none",
      snap: { value: 1 }, // 🔥 integer steps only
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        let v = counter.value;
        el.textContent = hasLeadingZero && v < 10 ? "0" + v : v;
      },
    });
  });
  //Animated Btn
  document.querySelectorAll(".animate-btn").forEach(btn => {

    const text = btn.textContent.trim();
    btn.textContent = ""; // clear original

    [...text].forEach((letter, i) => {
      const span = document.createElement("span");

      // keep spaces
      span.textContent = letter === " " ? "\u00A0" : letter;

      // auto delay
      span.style.transitionDelay = `${i * 0.05}s`;

      btn.appendChild(span);
    });

  });


  // BTN Hover
  $(".btn-hover")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: 0, left: 0 });
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: 0, left: 0 });
      $(this).find("span").css({ top: relY, left: relX });
    });

  let arr1 = gsap.utils.toArray("#bounce_up");
  let arr2 = gsap.utils.toArray(".bounce_up");
  const all_buttons2 = arr1.concat(arr2);

  all_buttons2.forEach((btn) => {
    if (!btn.classList.contains("banner-btn")) {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: btn,
          start: "top 80%",
          markers: false,
        },
        opacity: 0,
        y: 50,
        ease: "bounce",
        duration: 1.5,
      });
    }
  });
  // fade Animation
  if ($(".fade_anim").length > 0) {
    gsap.utils.toArray(".fade_anim").forEach((item) => {
      let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
        tp_duration_value = item.getAttribute("data-duration") || 0.75,
        tp_fade_direction = item.getAttribute("data-fade-from") || "bottom",
        tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
        tp_delay_value = item.getAttribute("data-delay") || 0.15,
        tp_ease_value = item.getAttribute("data-ease") || "power2.out",
        tp_anim_setting = {
          opacity: 0,
          ease: tp_ease_value,
          duration: tp_duration_value,
          delay: tp_delay_value,
          x:
            tp_fade_direction == "left"
              ? -tp_fade_offset
              : tp_fade_direction == "right"
              ? tp_fade_offset
              : 0,
          y:
            tp_fade_direction == "top"
              ? -tp_fade_offset
              : tp_fade_direction == "bottom"
              ? tp_fade_offset
              : 0,
        };
      if (tp_onscroll_value == 1) {
        tp_anim_setting.scrollTrigger = {
          trigger: item,
          start: "top 85%",
        };
      }
      gsap.from(item, tp_anim_setting);
    });
  }

  // Text Effect Animation
  if ($(".text-anim").length) {
    let staggerAmount = 0.03,
      translateXValue = 20,
      defaultDelay = 0.25,
      easeType = "power2.out",
      animatedTextElements = document.querySelectorAll(".text-anim");

    animatedTextElements.forEach((element) => {
      let delayValue = element.getAttribute("data-delay")
        ? parseFloat(element.getAttribute("data-delay"))
        : defaultDelay;

      let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.chars, {
        duration: 1,
        delay: delayValue,
        x: translateXValue,
        autoAlpha: 0,
        stagger: staggerAmount,
        ease: easeType,
        scrollTrigger: { trigger: element, start: "top 85%" },
      });
    });
  }

  // text-revel-anim
  const anim_reveal = document.querySelectorAll(".text-revel-anim");
  anim_reveal.forEach((areveal) => {
    const getAttributeValue = (attr, defaultValue) =>
      areveal.getAttribute(attr) || defaultValue;
    const duration_value = Number(getAttributeValue("data-duration", 1));
    const onscroll_value = Number(getAttributeValue("data-on-scroll", 1));
    const stagger_value = Number(getAttributeValue("data-stagger", 0.02));
    const data_delay = Number(getAttributeValue("data-delay", 0.08));
    const ease_value = getAttributeValue("data-ease", "circ.out");

    areveal.split = new SplitText(areveal, {
      type: "lines,words,chars",
      linesClass: "tp-revel-line",
    });
    const animationProps = {
      duration: duration_value,
      delay: data_delay,
      ease: ease_value,
      y: 40,
      stagger: stagger_value,
      opacity: 0,
    };

    if (onscroll_value === 1) {
      areveal.anim = gsap.from(areveal.split.chars, {
        scrollTrigger: {
          trigger: areveal,
          start: "top 85%",
        },
        ...animationProps,
      });
    } else {
      areveal.anim = gsap.from(areveal.split.chars, animationProps);
    }
  });

  //Text Animation 2
  gsap.utils.toArray(".text-anim2").forEach((splitTextLine) => {
    const delay_value = parseFloat(
      splitTextLine.getAttribute("data-delay") || 0.5
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 85%",
        duration: 1.5,
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });
    const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" });

    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: delay_value,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });

  // Case Study Business Growth Chart
  const options = {
    series: [
      {
        name: "Business growth",
        data: [0, 10, 30, 45, 30, 75, 90],
      },
      {
        name: "Annual revenue generate",
        data: [0, 5, 20, 30, 70, 30, 50],
      },
    ],
    chart: {
      type: "line",
      height: 420,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: "transparent",
    },
    colors: ["#FF8000", "#5D3BD5"],
    stroke: {
      curve: "smooth",
      width: 1.5,
    },
    markers: {
      size: 0,
      hover: {
        size: 6,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: {
        width: 10,
        height: 10,
        radius: 12,
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ["", "2005", "2010", "2015", "2020", "2025", "2026"],
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#050505",
          fontSize: "13px",
        },
      },
      title: {
        text: "Year",
        offsetY: 0,
        style: {
          color: "#111",
          fontSize: "14px",
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      axisBorder: {
        show: true,
      },
      labels: {
        style: {
          colors: "#111",
          fontSize: "13px",
        },
      },
      title: {
        text: "Percentage",
        style: {
          color: "#111",
          fontSize: "14px",
          fontWeight: 600,
        },
      },
    },
  };

 if (typeof ApexCharts !== "undefined") {
   const chart = new ApexCharts(
     document.querySelector("#businessChart"),
     options,
   );
   chart.render();
 }


// Contact Page Map Indicator 
 document.addEventListener("DOMContentLoaded", function () {
   const mapElement = document.getElementById("office-map");
   if (!mapElement) return;

   const locations = {
     newyork: {
       key: "newyork",
       title: "New York, USA",
       lat: 40.7128,
       lng: -74.006,
       zoom: 4,
     },
     australia: {
       key: "australia",
       title: "Australia Office",
       lat: -33.8688,
       lng: 151.2093,
       zoom: 4,
     },
     canada: {
       key: "canada",
       title: "Canada Office",
       lat: 43.6532,
       lng: -79.3832,
       zoom: 4,
     },
   };

   const defaultLocationKey = "newyork";
   const markers = {};

   const map = L.map("office-map", {
     zoomControl: false,
     scrollWheelZoom: true,
     dragging: true,
     doubleClickZoom: true,
     boxZoom: false,
     keyboard: false,
     tap: false,
     attributionControl: false,
   }).setView([25, 20], 2);

   L.tileLayer(
     "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
     {
       subdomains: "abcd",
       maxZoom: 19,
     },
   ).addTo(map);

   function createMarkerIcon() {
     return L.divIcon({
       className: "",
       html: `
        <div class="custom-office-marker">
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0057 28.5711C16.7469 28.5711 26.1014 15.6712 26.1014 10.0955C26.1013 4.51993 21.5814 0 16.0057 0C10.4301 0 5.91016 4.51993 5.91016 10.0956C5.91016 15.6712 15.2188 28.5711 16.0057 28.5711ZM12.7013 9.83058C12.7013 8.00559 14.1807 6.52611 16.0057 6.52611C17.8308 6.52611 19.3102 8.00552 19.3102 9.83058C19.3102 11.6556 17.8308 13.1351 16.0057 13.1351C14.1807 13.1351 12.7013 11.6556 12.7013 9.83058Z"/>
            <path d="M5.24219 29.4295C5.24219 30.8492 10.0589 32.0001 16.0006 32.0001C21.9423 32.0001 26.759 30.8492 26.759 29.4295C26.759 28.3022 23.7208 27.3451 19.4953 26.9983C19.291 27.2799 19.0841 27.5595 18.8746 27.8373C16.9531 30.376 16.5313 30.5049 16.0023 30.5049C15.4615 30.5049 14.9969 30.3254 13.1104 27.8383C12.9006 27.5607 12.6934 27.2812 12.489 26.9997C8.27227 27.3476 5.24219 28.3037 5.24219 29.4295Z"/>
          </svg>
        </div>
      `,
       iconSize: [44, 54],
       iconAnchor: [22, 54],
       popupAnchor: [0, -54],
     });
   }

   Object.values(locations).forEach((location) => {
     const marker = L.marker([location.lat, location.lng], {
       icon: createMarkerIcon(),
     }).addTo(map);

     marker.bindTooltip(location.title, {
       permanent: false,
       direction: "top",
       offset: [0, -18],
       className: "office-tooltip",
       opacity: 1,
     });

     markers[location.key] = marker;
   });

   function resetMarkerStates() {
     document.querySelectorAll(".custom-office-marker").forEach((item) => {
       item.classList.remove("is-active");
     });

     document.querySelectorAll(".location-card").forEach((card) => {
       card.classList.remove("is-active");
     });

     Object.values(markers).forEach((marker) => {
       marker.closeTooltip();
     });
   }

   function activateLocation(locationKey, flyToMarker = true) {
     const location = locations[locationKey];
     const marker = markers[locationKey];
     const card = document.querySelector(
       `.location-card[data-location="${locationKey}"]`,
     );

     if (!location || !marker) return;

     resetMarkerStates();

     marker.openTooltip();

     if (flyToMarker) {
       map.flyTo([location.lat, location.lng], location.zoom, {
         animate: true,
         duration: 1.5,
       });
     }

     setTimeout(() => {
       const markerEl = marker.getElement();
       if (markerEl) {
         const markerInner = markerEl.querySelector(".custom-office-marker");
         if (markerInner) {
           markerInner.classList.add("is-active");
         }
       }
     }, 50);

     if (card) {
       card.classList.add("is-active");
     }
   }

   activateLocation(defaultLocationKey, false);

   if (window.innerWidth <= 767) {
     setTimeout(() => {
       const defaultLocation = locations[defaultLocationKey];
       map.setView([defaultLocation.lat, defaultLocation.lng], 2, {
         animate: false,
       });
     }, 100);
   }

   const cards = document.querySelectorAll(".location-card");

   cards.forEach((card) => {
     const trigger = card.querySelector(".location-img-and-address");
     const locationKey = card.dataset.location;

     if (!trigger || !locationKey) return;

     trigger.addEventListener("mouseenter", function () {
       activateLocation(locationKey, true);
     });

     trigger.addEventListener("mouseleave", function () {
       activateLocation(defaultLocationKey, true);
     });
   });

   window.addEventListener("resize", function () {
     map.invalidateSize();
   });
 });


})(jQuery);
