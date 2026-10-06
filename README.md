# Everlight Homes

A modern, high-performance luxury real estate web application built with React 18, TypeScript, Tailwind CSS, and Vite.

## Features
- **Cinematic 3D Video Scrubbing**: Interactive scroll-driven fly-through with smooth 60fps rAF interpolation.
- **Bilingual & RTL/LTR**: Full English and Persian (`fa`) support with typography powered by Vazirmatn and automatic layout mirroring.
- **Dynamic Property Filtering**: Instant search across locations, types, price ranges, and bedrooms/bathrooms.
- **Local Favorites**: Fast client-side shortlist persistence with `localStorage`.
- **Zero Heavy External Dependencies**: Custom handcrafted SVG icons, typed native React Context state.

## Getting Started
```bash
pnpm dev
```
Runs the Vite development server on `http://localhost:3000`.

## Production Build
```bash
pnpm build
```
Typechecks and compiles optimized production assets with chunk splitting.