# Summer Real Estate — Next.js Site

A rebuild of summerrealestateet.com in Next.js 14 (App Router) + TypeScript +
Tailwind CSS, **without** the 3D Tours and Typologies sections.

Two project sites are included:

- **Summer Bulgaria (Behind AU)** — includes an embedded Google Map
- **Summer Abtes (British Embassy)** — no map (per the original site)

A **Delivered Sites** section (currently: Summer Adwa Victory) appears below
the site info on both the Home page and the Projects page.

All photography is currently a swappable placeholder box — see "Adding Your
Images" below.

---

## 1. Setup

This project was hand-built (no network access was available to run
`create-next-app`/`npm install` in the build environment), so install
dependencies yourself the first time:

```bash
cd summer-real-estate
npm install
npm run dev
```

Then open http://localhost:3000.

Requires Node.js 18.17 or later.

---

## 2. Project structure

```
app/
  page.tsx              → Home
  projects/page.tsx      → Projects (both sites + map + Delivered Sites)
  about/page.tsx         → About
  contact/page.tsx       → Contact (form)
  layout.tsx             → Root layout, fonts, header/footer
  globals.css            → Global styles, contour texture, focus states
components/
  Header.tsx, Footer.tsx
  SiteCard.tsx            → Project summary card (Home page)
  SiteMap.tsx             → Embedded Google Map (Bulgaria site)
  DeliveredSites.tsx      → "Delivered Sites" section
  ContactForm.tsx         → Interactive contact form
  PlaceholderImage.tsx    → Swappable image placeholder box
lib/
  sites-data.ts           → ALL site content lives here (see below)
```

---

## 3. Adding your content (do this first)

Almost everything — site names, descriptions, features, unit counts, contact
info — lives in **`lib/sites-data.ts`**. Edit that one file and it updates
everywhere the data is used (Home, Projects, Footer).

### Updating the Bulgaria (Behind AU) site
Open `lib/sites-data.ts` and fill in the `bulgaria` entry:
- `totalUnits`, `unitsRemaining`, `typologies` — currently `0`, set real numbers
- `features` — edit the list as needed
- `mapEmbedSrc` — see Section 4 below for getting your exact map embed URL

### Updating contact info
Edit the `contactInfo` object at the bottom of `lib/sites-data.ts` (email,
phone, Telegram number, office address).

---

## 4. Adding the exact map location (Bulgaria / Behind AU)

The map currently points to a generic "African Union Headquarters, Addis
Ababa" search query as a placeholder. To pin the exact site location:

1. Go to [Google Maps](https://www.google.com/maps) and find/right-click your
   exact site location → copy the coordinates (e.g. `9.0234, 38.7619`).
2. Open `lib/sites-data.ts` and update the `bulgaria` site's `mapEmbedSrc`:

   **Simple version (no API key needed):**
   ```ts
   mapEmbedSrc: "https://www.google.com/maps?q=9.0234,38.7619&output=embed"
   ```

   **Nicer version (pin + zoom, needs a free Google Maps Embed API key):**
   ```ts
   mapEmbedSrc: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=9.0234,38.7619&zoom=16"
   ```
   Get a key at https://developers.google.com/maps/documentation/embed/get-api-key
   (the Embed API has a generous free tier).

No other code changes are needed — `SiteMap.tsx` just renders whatever URL is
in `mapEmbedSrc`.

---

## 5. Adding your images

Every photo on the site is currently a labeled placeholder box (built with
`components/PlaceholderImage.tsx`) so the layout is easy to preview before
real photography is ready.

**Recommended approach:**
1. Drop your image files into the `public/` folder (e.g.
   `public/images/bulgaria-hero.jpg`).
2. Replace the relevant `<PlaceholderImage label="..." />` with Next.js's
   `<Image>` component, e.g.:

   ```tsx
   import Image from "next/image";

   <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
     <Image
       src="/images/bulgaria-hero.jpg"
       alt="Summer Bulgaria site"
       fill
       className="object-cover"
     />
   </div>
   ```

Placeholders appear in: the Home page hero (2 images), each project's gallery
on the Projects page (1 hero + 3 gallery shots per site), and the Delivered
Sites cards.

---

## 6. Pages

| Page | Route | Notes |
|---|---|---|
| Home | `/` | Hero, stats, both sites (summary), Delivered Sites, promise |
| Projects | `/projects` | Full detail for both sites (gallery, map for Bulgaria, features), Delivered Sites below |
| About | `/about` | Mission, core principles, leadership, stats |
| Contact | `/contact` | Contact info + working form (currently shows a confirmation state — wire up `ContactForm.tsx`'s `handleSubmit` to an API route or email service when ready) |

3D Tours and Typologies pages/nav links from the original site were
intentionally omitted per your request.

---

## 7. Deploying

This is a standard Next.js app — deploys cleanly to Vercel, Netlify, or any
Node host:

```bash
npm run build
npm start
```
