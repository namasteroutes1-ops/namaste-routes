/**
 * Inquiry form → Email (Web3Forms / FormSubmit) + Netlify + WhatsApp backup
 */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inquiry-form");
  if (!form) return;

  const cfg = window.FORM_CONFIG || {
    WEB3FORMS_KEY: "",
    EMAIL: "namaste.routes.1@gmail.com",
    WHATSAPP: "919340114159",
  };

  const loader = document.getElementById("form-loader");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector(".form-submit-btn");
    const btnText = form.querySelector(".form-submit-btn__text");
    const statusEl = document.getElementById("form-status");
    const originalBtnLabel = btnText ? btnText.textContent : "Send Inquiry";

    setLoading(true, submitBtn, btnText, loader, statusEl, originalBtnLabel);

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const results = [];

    if (cfg.WEB3FORMS_KEY && cfg.WEB3FORMS_KEY.length > 10) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: cfg.WEB3FORMS_KEY,
            subject: `New Inquiry — ${payload.name} — ${payload.destination || "Travel"}`,
            from_name: "Namaste Routes Website",
            name: payload.name,
            phone: payload.phone,
            email: payload.email,
            destination: payload.destination,
            travel_date: payload.travel_date,
            travelers: payload.travelers,
            message: payload.message,
          }),
        });
        const data = await res.json();
        if (data.success) results.push("email");
      } catch {
        /* try next */
      }
    }

    if (!results.includes("email")) {
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${cfg.EMAIL}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: `New Inquiry — ${payload.name} — ${payload.destination || "Travel"}`,
            _template: "table",
            _captcha: "false",
            name: payload.name,
            phone: payload.phone,
            email: payload.email || "Not provided",
            destination: payload.destination || "Not specified",
            travel_date: payload.travel_date || "Flexible",
            travelers: payload.travelers || "Not specified",
            message: payload.message,
          }),
        });
        const data = await res.json();
        if (data.success) results.push("email");
      } catch {
        /* try next */
      }
    }

    const isLocal =
      window.location.protocol === "file:" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (!isLocal) {
      try {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });
        if (res.ok) results.push("netlify");
      } catch {
        /* ok */
      }
    }

    setLoading(false, submitBtn, btnText, loader, statusEl, originalBtnLabel);

    if (results.includes("email") || results.includes("netlify")) {
      statusEl.innerHTML =
        "<strong>Thank you!</strong> Your inquiry has been sent successfully. " +
        "We'll get back to you within 24 hours.";
      statusEl.className = "form-status form-status--success";
      form.reset();
    } else {
      openWhatsApp(cfg.WHATSAPP, payload);
      statusEl.innerHTML =
        "<strong>Almost there!</strong> We couldn't send via email. " +
        "WhatsApp has opened — please tap <strong>Send</strong> to deliver your inquiry. " +
        'Or call us at <a href="tel:+919340114159">9340114159</a>.';
      statusEl.className = "form-status form-status--error";
      form.reset();
    }
  });
});

function setLoading(isLoading, btn, btnText, loader, statusEl, originalLabel) {
  if (loader) {
    loader.hidden = !isLoading;
    loader.setAttribute("aria-busy", isLoading ? "true" : "false");
  }
  if (btn) {
    btn.disabled = isLoading;
    btn.classList.toggle("is-loading", isLoading);
  }
  if (btnText) {
    btnText.textContent = isLoading ? "Sending..." : originalLabel;
  }
  if (isLoading && statusEl) {
    statusEl.textContent = "";
    statusEl.className = "form-status";
  }
}

function openWhatsApp(number, data) {
  const text = [
    "*New Travel Inquiry — Namaste Routes*",
    "",
    `Name: ${data.name || ""}`,
    `Phone: ${data.phone || ""}`,
    `Email: ${data.email || "Not provided"}`,
    `Destination: ${data.destination || "Not specified"}`,
    `Travel Date: ${data.travel_date || "Flexible"}`,
    `Travelers: ${data.travelers || "Not specified"}`,
    "",
    `Message: ${data.message || ""}`,
  ].join("\n");

  window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank");
}
