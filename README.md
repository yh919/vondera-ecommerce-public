# Vondera Clothing Brand E-commerce

A premium, minimal e-commerce storefront built for clothing brands, powered by the Vondera API. This project features a modern design aesthetic with smooth animations, dynamic category handling, and a fully functional shopping experience.

## ✨ Features

- **Dynamic Home Page**: Hero sections, featured categories (fetched from API), and new arrivals.
- **Advanced Shop Filtering**: Filter products by category, sort by price, and load more products dynamically.
- **Modern UI/UX**: Built with Tailwind CSS, custom animations (GSAP, ScrollReveal), and a premium "sand & taupe" color palette.
- **Cart System**: Fully functional cart with persistent storage, variant support, and quantity management.
- **Mobile Responsive**: Optimised for all screen sizes with a custom mobile navigation menu.
- **SEO Ready**: Semantic HTML and descriptive metadata.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory and add your Vondera API key:

```env
VITE_VONDERA_API_KEY=your_api_key_here
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build

Create a production build:

```bash
npm run build
```

## 📂 Project Structure

- `src/components`: Reusable UI components (ProductCard, Nav, Footer, etc.).
- `src/sections`: Page sections for Home and Shop pages.
- `src/pages`: Main page components (Home, Shop, ProductDetail, Cart, etc.).
- `src/lib`: API integration and mock data.
- `src/hooks`: Custom React hooks for state management (Zustand).
- `src/types`: TypeScript definitions for Vondera API objects.
- `API_DOCUMENTATION.md`: Detailed guide on Vondera API usage and payloads.

## 🛠 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion (ScrollReveal)
- **State Management**: Zustand
- **Icons**: Lucide React
- **API**: Vondera Public API

## 📝 Recent Updates

- **Dynamic Categories**: Home page categories are now fetched directly from the Vondera API.
- **ID-Based Filtering**: Shop page filtering has been upgraded to use category IDs for better reliability and performance.
- **Premium Aesthetics**: Refined shadows, gradients, and micro-animations across the site.

---

Built with ❤️ by [Vondera Team](https://vondera.app)
