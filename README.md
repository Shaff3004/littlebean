# ☕ Little Bean Café

A premium Progressive Web App — a digital restaurant menu crafted with love for Mommy & Little Bean.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Adding Dish Images

Place `.webp` images (800×600px recommended) in `public/images/`:

```
public/images/syrniki.webp
public/images/avocado-toast.webp
...
```

The app will show placeholders for any missing images during development.

## Connecting Google Forms

1. Create a Google Form with a "Dish Name" field
2. Get the pre-filled link URL
3. Update `src/utils/constants.ts` with your form URL and field entry ID

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- Framer Motion
- Lucide React Icons
- vite-plugin-pwa

## PWA Features

- Installable to home screen
- Fullscreen mode
- Offline support for cached assets
- Custom icons and splash screen
