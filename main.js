document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nav-links--open");
      toggle.classList.toggle("nav-toggle--active");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-links--open");
        toggle.classList.remove("nav-toggle--active");
      });
    });
  }

  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("header--scrolled", window.scrollY > 40);
    });
  }

  document.querySelectorAll("[data-scroll]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const target = document.querySelector(el.dataset.scroll);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
