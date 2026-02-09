document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  // Close mobile nav when a link is clicked
  var links = document.querySelectorAll(".nav-links a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });

  // Scroll-triggered animations with staggered delays
  var animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Back to top button
  var backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Header scroll effect
  var header = document.querySelector(".site-header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Smooth reveal for menu items on hover
  var menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      this.style.zIndex = "2";
    });
    item.addEventListener("mouseleave", function () {
      this.style.zIndex = "";
    });
  });
});
