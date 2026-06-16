# Prathap Reddy — Portfolio

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Icons**: Lucide React
- **Theme**: Dark/Light mode with localStorage persistence
- **Animations**: CSS transitions + Intersection Observer

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, CSS variables, utilities
│   ├── layout.tsx         # Root layout with metadata & fonts
│   └── page.tsx           # Main page assembly
├── components/
│   ├── ui/
│   │   └── ThemeProvider.tsx   # Dark/light theme context
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky nav with mobile menu
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx           # Typing animation, CTA
│       ├── About.tsx          # Story, highlights, quick facts
│       ├── Skills.tsx         # Skill bars, tech badges
│       ├── Projects.tsx       # Project cards with features
│       ├── Experience.tsx     # Internship timeline
│       ├── Education.tsx      # Degree details + courses
│       ├── Certifications.tsx # Cert cards
│       └── Contact.tsx        # Contact form + social links
├── hooks/
│   └── useInView.ts       # Scroll-triggered animation hook
└── lib/
    └── utils.ts           # cn() class utility
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 🌐 Deploy to Vercel (Recommended)

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# For production deployment
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**

3. Import your GitHub repository

4. Configure:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Node.js Version**: 18.x

5. Click **Deploy** — done! Vercel handles the rest.

### Custom Domain

In Vercel dashboard → Settings → Domains → Add your domain (e.g., `prathapreddy.dev`)

---

## 🎨 Customization Checklist

Before going live, update these placeholders:

### Personal Info
- [ ] `src/components/sections/Contact.tsx` → update email, GitHub, LinkedIn URLs
- [ ] `src/components/sections/Experience.tsx` → update company name, dates, real responsibilities
- [ ] `src/components/sections/Education.tsx` → update university name, CGPA, years
- [ ] `src/components/sections/Certifications.tsx` → update credential IDs and real cert links
- [ ] `src/components/layout/Navbar.tsx` → update social links
- [ ] `src/components/layout/Footer.tsx` → update social links
- [ ] `src/app/layout.tsx` → update metadata URL (`prathapreddy.dev`)

### Projects
- [ ] `src/components/sections/Projects.tsx` → update GitHub links to real repos
- [ ] Add live demo links once deployed

### SEO
- [ ] Replace `/og-image.png` with a real OG image (1200×630px)
- [ ] Update `metadata.url` in layout.tsx

---

## 📊 Performance

- Lighthouse Score Target: 95+ (Performance, SEO, Accessibility)
- No external JS dependencies at runtime (framer-motion optional)
- Font preloading via Google Fonts
- CSS-based animations for smooth 60fps

---

## 📝 Build

```bash
npm run build    # Production build
npm run start    # Start production server locally
npm run lint     # Lint check
```

---

## 📄 License

Personal use. Feel free to adapt for your own portfolio.
>>>>>>> 68008fc (protfolio)
