/** Ensure destination images load — fallback if CDN fails */
const IMAGE_FALLBACK =
  "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=600";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dest-card__img img, .hero__bg-img").forEach((img) => {
    img.referrerPolicy = "no-referrer";
    img.addEventListener("error", function onError() {
      if (this.src !== IMAGE_FALLBACK) {
        this.src = IMAGE_FALLBACK;
      }
    });
  });
});
