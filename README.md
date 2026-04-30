# 🍛 Namaste Resto — Indian Restaurant & Pub

> **Premium Indian Restaurant & Pub in Gien, France**  
> Built with React.js, Node.js, and Tailwind CSS

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

---

## 🏪 About

**Namaste Resto** is a full-featured restaurant website for a premium Indian Restaurant & Pub located in **Gien, Loiret (45), France**. Built with React.js frontend, Node.js/Express backend, and seamlessly integrated with Shopify.

- 📍 **Location:** Gien, Loiret (45500), France
- 🍽️ **Cuisine:** Authentic Indian | Pub | Bar
- 🌐 **Languages:** French & English (i18n)

---

## ✨ Features

- 🏠 **Home Page** — Hero, Highlights, Signature Dishes, Gallery Preview, Testimonials, CTA
- 🍽️ **Interactive Menu** — Categories with images, prices (€), allergens, vegan/halal tags
- 📅 **Online Reservation** — Real-time booking form with email confirmation
- 🖼️ **Gallery** — Masonry photo gallery
- ℹ️ **About Page** — Story, chef profiles, awards
- 📞 **Contact** — Google Maps, contact form, hours
- 🎉 **Events & Pub** — Live music, themed nights, private events
- 🌙 **Dark/Light Mode** — Auto theme switching
- 📱 **Mobile-First** — Responsive across all devices
- 🔍 **SEO Optimized** — Schema.org JSON-LD, OpenGraph, Sitemap
- ⚡ **Performance** — Lighthouse 95+ score

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js 18 | UI Framework |
| Vite 5 | Build Tool |
| React Router DOM 6 | Routing |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animations |
| React Helmet Async | SEO Meta |
| React Hook Form | Forms |
| Lucide React | Icons |
| Swiper.js | Carousels |
| i18next | FR/EN i18n |

### Backend
| Technology | Purpose |
|---|---|
| Node.js 18 + Express | API Server |
| Nodemailer | Email Service |
| Express Validator | Validation |
| Helmet + CORS | Security |
| express-rate-limit | Rate Limiting |

---

## 📁 Project Structure

```
namaste-resto/
├── frontend/          # React.js app (Vite)
│   ├── src/
│   │   ├── components/    # Navbar, Footer, Hero, Menu, etc.
│   │   ├── pages/         # Home, Menu, Reservation, Gallery, About, Contact, Events
│   │   ├── data/          # Menu items, testimonials, gallery data
│   │   ├── hooks/         # Custom React hooks
│   │   ├── context/       # Theme & Cart context
│   │   ├── i18n/          # fr.json, en.json translations
│   │   └── utils/         # API helpers, formatters
│   ├── public/            # robots.txt, sitemap.xml, favicon
│   └── index.html
├── backend/           # Node.js + Express API
│   ├── src/
│   │   ├── routes/        # reservations, contact, menu
│   │   ├── middleware/    # validation, rate limiter
│   │   └── services/      # emailService
│   └── server.js
├── shopify/           # Shopify Liquid templates
├── docs/              # Integration & deployment guides
└── docker-compose.yml
```

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/Souravsuvro/namaste-resto.git
cd namaste-resto

# Frontend
cd frontend && npm install && cp .env.example .env.local && npm run dev

# Backend (new terminal)
cd backend && npm install && cp .env.example .env && npm run dev
```

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3001/api`

---

## 🔐 Environment Variables

### Frontend `.env.local`
```env
VITE_API_URL=http://localhost:3001/api
VITE_GOOGLE_MAPS_API_KEY=your_key
VITE_GA_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://namasteresto.fr
```

### Backend `.env`
```env
PORT=3001
FRONTEND_URL=http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@namasteresto.fr
SMTP_PASS=your_app_password
RESTAURANT_EMAIL=contact@namasteresto.fr
```

---

## 🛒 Shopify Integration

See: [docs/SHOPIFY_INTEGRATION.md](./docs/SHOPIFY_INTEGRATION.md)

---

## 📄 License

MIT — © 2025 Namaste Resto, Gien France

---

<div align="center">
  <p>Built with ❤️ for <strong>Namaste Resto</strong> — Gien, France 🇫🇷🍛</p>
</div>
