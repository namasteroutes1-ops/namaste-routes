document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");

  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;

      tabs.forEach((t) => t.classList.remove("filter-tab--active"));
      tab.classList.add("filter-tab--active");

      cards.forEach((card) => {
        const category = card.dataset.category;
        const show = filter === "all" || category === filter;
        card.style.display = show ? "" : "none";
      });
    });
  });
});
