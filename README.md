# Sora Y. - Academic Portfolio

A modern, minimal academic portfolio website built with Next.js 14, featuring a dark-first design with teal accents.

## 🚀 Tech Stack

- **Next.js 14** (App Router + Static Export)
- **TypeScript**
- **Tailwind CSS v3**
- **MDX** for blog content
- **next-themes** for dark/light mode
- **Lucide React** for icons
- **Framer Motion** for animations (future enhancement)

## 🎨 Design System

### Typography
- **Headings**: Space Grotesk (bold, angular)
- **Body**: Inter (clean, readable)
- **Code/Numbers**: JetBrains Mono

### Colors
- **Primary**: Teal (#14B8A6 / #2DD4BF)
- **Dark Mode**: Near-black background (#0A0A0A)
- **Cards**: Gray-900 (#111827)
- **Accents**: Teal on hover with smooth transitions

### Features
- ✨ Glassmorphic navbar with backdrop blur
- 🌙 Dark mode by default (toggleable)
- ⌨️ Typewriter effect on hero
- 🎯 Teal border highlights on hover
- 📱 Fully responsive design

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts & providers
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── research/page.tsx
│   ├── cv/page.tsx
│   ├── blog/
│   │   ├── page.tsx        # Blog list
│   │   └── [slug]/page.tsx # Blog post
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   └── TypewriterEffect.tsx
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment
└── public/
    └── cv.pdf              # (Placeholder)
```

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production

```bash
npm run build
```

Outputs static files to `./out/` directory.

## 🚀 Deployment to GitHub Pages

### 1. Create GitHub Repository

```bash
git init
git add .
git commit -m "feat: initial portfolio website"
git branch -M main
git remote add origin https://github.com/soray42/portfolio.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Source: **GitHub Actions**
3. The workflow will auto-deploy on push to `main`

### 3. Update basePath (if needed)

If deploying to `username.github.io/portfolio`:
- `basePath` is already set to `/portfolio` in `next.config.js`

If deploying to `username.github.io` (root):
- Change `basePath: ''` in `next.config.js`

## 📝 Adding Blog Posts

Currently using hardcoded mock data. To add MDX support:

1. Install MDX dependencies (already in package.json)
2. Create `content/posts/` directory
3. Add MDX files with frontmatter
4. Update blog pages to read from MDX files

Example MDX post:

```mdx
---
title: "My Post Title"
date: "2026-03-05"
tags: ["Research", "Networks"]
summary: "Brief description"
---

# Content goes here
```

## 🎯 Customization

- **Colors**: Edit `tailwind.config.ts`
- **Content**: Update page components in `app/`
- **Navbar links**: Edit `components/Navbar.tsx`
- **Footer**: Edit `components/Footer.tsx`

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🙏 Credits

Built by Sora Y. using Next.js, Tailwind CSS, and lots of teal.
