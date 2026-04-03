# Tulasi Priya Vattikuti - Portfolio & AI Chatbot

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A modern, interactive portfolio website built with [Next.js](https://nextjs.org/) 16, [React](https://react.dev/) 19, and [TypeScript](https://www.typescriptlang.org/). Features an intelligent AI-powered chatbot, dark mode support, and a professional showcase of skills, projects, and experience in data engineering and ML infrastructure.

**[Live Site](https://tulasipriya.com)** | **[GitHub](https://github.com/abhinavnarne/priya-new-site)** | **[Contact](mailto:hello@tulasipriya.com)**

## ✨ Features

- **AI Chatbot** – Rule-based Q&A assistant with smart keyword matching and suggested questions
- **Responsive Design** – Mobile-first layout optimized for all device sizes
- **Dark Mode** – Automatic system preference detection with manual theme toggle
- **Static Export** – Lightweight, fast-loading pages with no server overhead
- **Modern Tech Stack** – Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Performance Tools** – Built-in linting (Biome), type checking, and testing (Vitest)
- **SEO Optimized** – Structured data, meta tags, and XML sitemap
- **Blog Ready** – Markdown posts with frontmatter and RSS feed support

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 (App Router) with static export |
| **Language** | TypeScript (strict mode) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4 + CSS custom properties |
| **Linting** | Biome |
| **Testing** | Vitest |
| **Hosting** | Cloudflare Pages |
| **Code Formatter** | Prettier |

## 📋 Project Overview

This portfolio showcases:

- **About** – Professional background and experience
- **Resume** – Full work history, skills, education, and certifications
- **Projects** – Case studies and technical achievements
- **Writing** – Blog posts on AI, data engineering, and technology
- **Contact** – Easy ways to connect via email and social media
- **Chatbot** – Interactive Q&A with AI/ML knowledge base

### Key Skills Highlighted

- **Languages**: Python, Java, JavaScript/TypeScript, SQL
- **Cloud**: AWS (EC2, S3, Lambda, SageMaker, RDS)
- **Databases**: PostgreSQL, DynamoDB, Elasticsearch
- **ML/AI**: Data engineering, LLM infrastructure, cloud ML platforms
- **Tools**: Kubernetes, Docker, Terraform, Git, React, Node.js

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js** 20 or higher ([Install via nvm](https://github.com/nvm-sh/nvm))
- **npm** 10+ (comes with Node.js)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhinavnarne/priya-new-site.git
   cd priya-new-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Default port is 3000; if unavailable, it will auto-increment

### Verify Installation

Your terminal should display:
```
> npm run dev

  ▲ Next.js 16.0.0
  - Local:        http://localhost:3000
  ⚡ Turbopack disabled (for static export)
```

## 📦 Available Commands

### Development

```bash
npm run dev              # Start local dev server at http://localhost:3000
npm run dev -- port 3002 # Run on custom port (e.g., 3002)
```

### Building & Optimization

```bash
npm run build            # Build for production (creates `out/` folder)
npm run type-check       # TypeScript type checking
npm run lint             # Biome linting
npm run format           # Format code with Prettier + Biome
npm test                 # Run tests with Vitest
npm test -- --watch      # Run tests in watch mode
npm test -- ComponentName  # Run tests for specific component
```

### File-Scoped Checks (Faster Feedback)

```bash
npx tsc --noEmit src/components/MyComponent.tsx     # Type check single file
npx biome check src/data/chatbot-qa.ts              # Lint single file
npm test -- MyComponent                              # Test single component
```

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── resume/page.tsx          # Resume page
│   ├── projects/page.tsx        # Projects showcase
│   ├── contact/page.tsx         # Contact page
│   ├── writing/page.tsx         # Blog index
│   ├── writing/[slug]/page.tsx  # Individual blog post
│   ├── stats/page.tsx           # Site stats & personal stats
│   ├── styles/                  # Global CSS and design tokens
│   │   ├── tokens/              # CSS custom properties (colors, spacing, etc.)
│   │   ├── base/                # Base element styles
│   │   ├── components/          # Component-specific styles
│   │   ├── layout/              # Layout styles
│   │   ├── pages/               # Page-specific styles
│   │   └── dark-mode.css        # Dark mode overrides
│   ├── tailwind.css             # Tailwind CSS directives
│   └── feed.xml/route.ts        # RSS feed generation
│
├── src/
│   ├── components/              # React components
│   │   ├── Chatbot/             # AI Chatbot component
│   │   │   ├── Chatbot.tsx      # Main chatbot UI
│   │   │   └── Chatbot.module.css
│   │   ├── Contact/             # Contact form components
│   │   ├── Icons/               # SVG icon components
│   │   ├── Projects/            # Project showcase components
│   │   ├── Resume/              # Resume section components
│   │   ├── Stats/               # Statistics components
│   │   ├── Template/            # Layout templates
│   │   │   ├── Navigation.tsx   # Header & nav
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── Footer.tsx       # Footer
│   │   │   └── ...
│   │   └── Schema/              # JSON-LD structured data
│   │
│   ├── data/                    # Static data
│   │   ├── chatbot-qa.ts        # Chatbot Q&A knowledge base
│   │   ├── contact.ts           # Contact information
│   │   ├── about.ts             # About page content
│   │   ├── projects.ts          # Projects data
│   │   ├── resume/              # Resume data (skills, experience, education)
│   │   └── stats/               # Statistics data
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useChat.ts           # Chatbot state management
│   │
│   ├── lib/                     # Utility functions
│   │   ├── posts.ts             # Blog post helpers
│   │   └── utils.ts             # General utilities
│   │
│   └── types/                   # TypeScript type definitions
│
├── content/
│   └── writing/                 # Markdown blog posts
│       ├── claude-code-outage.md
│       └── ...
│
├── public/
│   ├── images/                  # Images, favicons, project images
│   ├── robots.txt               # Search engine instructions
│   └── CNAME                    # Custom domain for GitHub Pages
│
├── docs/                        # Documentation
│   ├── adapting-guide.md        # Customization instructions
│   ├── contributing.md          # Contributing guidelines
│   ├── design-goals.md          # Architecture principles
│   └── roadmap.md               # Future features
│
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── biome.json                   # Biome linter config
├── vitest.config.ts             # Vitest test configuration
├── next.config.ts               # Next.js configuration
└── README.md                    # This file
```

## 🤖 Chatbot System

The intelligent chatbot (`src/components/Chatbot/Chatbot.tsx`) provides real-time answers about Tulasi's background, skills, and services.

### Features

- **11 Pre-built Q&A Pairs** covering:
  - Who I am
  - My skills and experience
  - Projects and work
  - Education and certifications
  - Contact information
  - Data engineering & ML infrastructure expertise

- **Smart Keyword Matching** – Understands phrasing variations and extracts intent
- **Suggested Questions** – Quick-start buttons for common queries
- **Page Recommendations** – Links to relevant pages for deeper exploration
- **Theme Integration** – Automatically switches between light/dark mode
- **Mobile Responsive** – Touch-friendly on all devices

### Knowledge Base

Located in `src/data/chatbot-qa.ts`:
```typescript
interface QAPair {
  id: string;
  question: string;
  keywords: string[];
  category: string;
  answer: string;
  suggestedPages?: Array<{ title: string; path: string }>;
}

const chatbotQA: QAPair[];
const suggestedQuestions: Array<{ text: string; id: string }>;
function findBestMatch(userQuestion: string): QAPair | null;
```

## 🎨 Theme System

The site uses CSS custom properties for consistent theming:

### Light Mode
- Accent: `#2e59ba` (Professional blue)
- Background: `#ffffff`
- Text: `#000000`

### Dark Mode
- Accent: `#60a5fa` (Bright blue)
- Background: `#0a0a0a`
- Text: `#e5e5e5`

Theme tokens are defined in `app/styles/tokens/colors.css` and can be toggled via the header theme button.

## 🚢 Deployment

### Cloudflare Pages

This site is optimized for **Cloudflare Pages** static hosting.

#### Step 1: Build for Production

```bash
npm run build
```

This creates an `out/` directory with static HTML/CSS/JS files.

#### Step 2: Deploy to Cloudflare Pages

**Option A: Git Integration (Recommended)**

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "feat: Add chatbot and update portfolio"
   git push origin main
   ```

2. In Cloudflare dashboard:
   - Go to **Pages** → **Create Project** → **Connect to Git**
   - Select repository: `abhinavnarne/priya-new-site`
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
   - Click **Deploy**

3. Every push to `main` triggers automatic deployment

**Option B: Manual Upload**

```bash
npm run build
npx wrangler pages deploy out
```

#### Step 3: Configure Custom Domain

1. In Cloudflare dashboard, go to **Pages** → Your project → **Custom domains**
2. Add your domain (e.g., `tulasipriya.com`)
3. Update domain DNS at your registrar:
   - Point nameservers to Cloudflare, or
   - Set CNAME record to your Cloudflare Pages URL

4. SSL certificate auto-provisioned by Cloudflare

### Environment Variables

If needed, add to Cloudflare Pages settings:
- No environment variables currently required
- Add as needed in Cloudflare dashboard or `wrangler.jsonc`

## 🧪 Testing

### Run All Tests

```bash
npm test
```

### Watch Mode

```bash
npm test -- --watch
```

### Test Specific Component

```bash
npm test -- Chatbot
npm test -- ContactIcons
npm test -- Resume
```

Tests live in `__tests__/` directories adjacent to source files:
```
src/
  components/
    Chatbot/
      __tests__/
        Chatbot.test.tsx
    Contact/
      __tests__/
        ContactIcons.test.tsx
```

## ✅ Code Quality

### Type Checking

```bash
npm run type-check
```

Ensures no TypeScript errors (strict mode enabled).

### Linting

```bash
npm run lint
```

Checks code style with Biome (ESLint alternative).

### Formatting

```bash
npm run format
```

Formats code with Prettier + Biome. **Run before committing!**

## 📝 Customization

See **[Adapting Guide](./docs/adapting-guide.md)** for detailed instructions on:
- Updating personal information (name, email, social links)
- Changing colors and theme
- Adding/removing pages and navigation items
- Creating new blog posts
- Updating resume and project data
- Extending the chatbot knowledge base

## 📚 Documentation

- **[Adapting Guide](./docs/adapting-guide.md)** – Step-by-step customization
- **[Design Goals](./docs/design-goals.md)** – Architecture principles
- **[Contributing Guide](./docs/contributing.md)** – How to contribute
- **[Roadmap](./docs/roadmap.md)** – Planned features
- **[AGENTS.md](./AGENTS.md)** – AI agent guidelines

## 🔗 Quick Links

- **Portfolio**: [tulasipriya.com](https://tulasipriya.com)
- **Email**: [hello@tulasipriya.com](mailto:hello@tulasipriya.com)
- **GitHub**: [abhinavnarne](https://github.com/abhinavnarne)
- **LinkedIn**: [abhinavnarne](https://linkedin.com/in/abhinavnarne)
- **Twitter**: [@dangelosaurus](https://twitter.com/dangelosaurus)

## 📄 License

[MIT](./LICENSE) – Use freely for personal or commercial projects.

---

**Last Updated**: April 2026 | **Status**: Production Ready ✅
