# Namaste Gien — Restaurant Website & Online Ordering

A full-stack restaurant ordering system for **Namaste Gien**, an authentic
Indian restaurant in Gien (45500), Loire Valley, France.

## Tech Stack

- React.js / Next.js frontend
- Node.js / Express backend
- Shopify Storefront API for ordering
- Stripe for payments (EUR)
- French localization + GDPR compliant
- Docker for local development

## Setup

1. Clone the repository

```bash
git clone https://github.com/Souravsuvro/namaste-resto.git
cd namaste-resto
```

2. Copy `.env.example` to `.env` and fill in your values

```bash
cp .env.example .env
```

3. Install dependencies

```bash
npm install
```

4. Run development server

```bash
npm run dev
# OR with Docker:
docker-compose up
```

5. Build for production

```bash
npm run build
```

## Business

- 📍 2 Pl. du Maréchal Foch, 45500 Gien, France
- 📞 +33 7 51 51 71 09
- 🌐 [www.namastegien.fr](https://www.namastegien.fr)
- 📧 contact@namastegien.fr

## Opening Hours

| Day | Lunch | Dinner |
|-----|-------|--------|
| Monday | Fermé | Fermé |
| Tuesday | 12:00–14:30 | 18:30–22:30 |
| Wednesday | 12:00–14:30 | 18:30–22:30 |
| Thursday | 12:00–14:30 | 18:30–22:30 |
| Friday | 12:00–14:30 | 18:30–22:30 |
| Saturday | 12:00–15:00 | 18:30–23:00 |
| Sunday | 12:00–15:00 | 18:30–22:00 |

## Brand Colors

| Name | Hex |
|------|-----|
| Gien Indigo Blue (Primary) | `#1B3A6B` |
| Saffron Orange (Accent) | `#E8731A` |
| Loire Gold | `#D4A843` |

## License

Private — All rights reserved © Namaste Gien
