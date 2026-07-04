# Namaste Routes — Tour & Travels Website

Professional travel agency website for **Namaste Routes**, based in Jaipur, Rajasthan.

## Pages

- **Home** — Hero, top destinations, how it works
- **Destinations** — 24+ destinations with Domestic/International filter
- **Contact** — Working inquiry form + Google Maps

## Local Preview

Open `index.html` in your browser, or run a local server:

```bash
cd C:\Users\dell\website
npx serve .
```

Then visit `http://localhost:3000`

---

## Netlify Par Deploy Kaise Karein (Step-by-Step)

### Step 1: GitHub Account
1. [github.com](https://github.com) par sign up karein (free)
2. New repository banayein — naam: `namaste-routes`

### Step 2: Code Upload Karein
GitHub repo mein yeh folder upload karein, ya terminal se:

```bash
cd C:\Users\dell\website
git init
git add .
git commit -m "Namaste Routes website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/namaste-routes.git
git push -u origin main
```

### Step 3: Netlify Connect
1. [netlify.com](https://netlify.com) par sign up karein (GitHub se login best hai)
2. **Add new site** → **Import an existing project** → GitHub select karein
3. Repository `namaste-routes` choose karein
4. Settings default rakhein (Build command: empty, Publish directory: `.`)
5. **Deploy** click karein

Live URL milega: `https://namaste-routes.netlify.app` (naam change kar sakte ho)

## Form — Inquiries Kahan Aayengi?

| Channel | Kaise |
|---------|-------|
| **Email** | `namaste.routes.1@gmail.com` par (FormSubmit se) |
| **WhatsApp** | Agar email fail ho to WhatsApp khulega — customer Send dabayega, aapko message aayega |
| **Netlify Dashboard** | Website Netlify par deploy hone ke baad — Site → Forms tab |

### Pehli baar email setup (ek baar karna hai)
1. Form ek baar submit karein (test inquiry)
2. `namaste.routes.1@gmail.com` par **FormSubmit activation email** aayegi
3. Us email mein **Confirm/Activate** link par click karein
4. Uske baad har inquiry email par aayegi

### Logo file
Apna original logo save karein: `assets/logo.png`  
(Details: `assets/README.md`)

---

## Form Kaise Kaam Karta Hai

| Channel | Kahan dikhega |
|---------|---------------|
| Netlify Forms | Netlify dashboard → Forms |
| Web3Forms | Email → namaste.routes.1@gmail.com |

Dono parallel chalte hain — ek fail ho to dusra backup.

---

## Aapko Sirf Yeh Karna Hai

1. **Web3Forms access key** — `js/form.js` mein paste (2 minute)
2. **GitHub + Netlify** — upar wale steps follow karo
3. **(Optional)** Logo PNG — `assets/logo.png` mein daalo, HTML update kar denge
4. **(Optional)** Custom domain — Netlify → Domain settings

---

## Contact Info (Website Par)

- **Address:** D-21, Gandhi Path Rd, Lalarpura, Jaipur, Rajasthan 302021
- **Phone/WhatsApp:** 9340114159
- **Email:** namaste.routes.1@gmail.com
