# QWaste Landing Page

Marketing landing page for **QWaste** — a smart factory management platform. Built with React 19 and Vite 8.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI components |
| Vite | 8 | Dev server and bundler |
| lucide-react | 1.16 | Icons |
| framer-motion | 12 | Available for animations |
| react-router-dom | 7 | Available for multi-page routing |

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Project Structure

```
src/
├── App.jsx               # Root — assembles all sections in order
├── App.css               # Global overrides
├── index.css             # CSS reset and base styles
└── components/
    ├── Navbar.jsx        # Sticky top navigation bar
    ├── Hero.jsx          # Hero section with headline and dashboard mockup
    ├── TrustedBy.jsx     # "Trusted by industry leaders" logo strip
    ├── Comparison.jsx    # Traditional vs QWaste side-by-side cards
    ├── Features.jsx      # 3×2 feature card grid
    ├── HowItWorks.jsx    # Numbered 3-step onboarding flow
    ├── VideoDemo.jsx     # Video placeholder with play button
    ├── Testimonials.jsx  # Customer quote card with star rating
    ├── Blog.jsx          # Featured post + 3-card blog grid
    ├── CTA.jsx           # Blue gradient conversion section
    └── Footer.jsx        # Dark footer with link columns and social icons
```

## Sections

### Navbar
Sticky bar with a frosted-glass background (`backdrop-filter: blur`). Contains the QWaste wordmark, five anchor links (Home, Features, How it works, Pricing, Blog), and a "Get started" button.

### Hero
Full-width centered section with:
- 52px bold headline — *Smart Factory Management, Powered by Intelligence*
- Subtitle and a "Get started free" CTA button
- Three feature badges (Live Notifications, Real-time Availability, Idle detection) in green/blue/purple
- 16:9 placeholder for a dashboard screenshot

### TrustedBy
A thin strip with an uppercase "TRUSTED BY INDUSTRY LEADERS" label and five grey logo placeholder blocks.

### Comparison
Two-column card layout:
- **Left** — Traditional Management: four pain points with amber X icons on a white card
- **Right** — QWaste Smart Management: four benefits with blue check icons on a `#EFF6FF` card, plus a "Modern Approach" pill badge

### Features
Six cards in a `repeat(3, 1fr)` grid, each with a coloured icon, title, and description:

| Feature | Icon | Colour |
|---|---|---|
| Real-time monitoring | `Activity` | Blue |
| Order management | `ShoppingBag` | Green |
| Energy tracking | `Zap` | Amber |
| Workforce management | `Users` | Purple |
| WebSocket alerts | `Bell` | Purple |
| RBAC permissions | `Shield` | Blue |

### HowItWorks
Three numbered circle steps on a centred grid: Connect → Monitor → Act.

### VideoDemo
Grey 16:9 video placeholder with a centred play button. Includes a "See it in action" pill badge above the heading and a "Book a live demo" button below.

### Testimonials
Single quote card (max-width 720px) with a decorative large quote mark, italic body text, avatar initial, name/role, and five amber stars.

### Blog
Header row with "Latest from QWaste" and a "See all →" link. One wide featured post (image left, content right) above a three-column grid of smaller post cards. Each card shows a category badge, title, and date/read-time.

### CTA
Full-width section with a diagonal blue gradient (`#1D4ED8` → `#3B82F6`). Two buttons: "Book a demo" (white outline) and "Get started free" (white solid).

### Footer
Dark (`#111827`) four-column layout: brand column with tagline and social icon links, then Product, Company, and Resources link lists. Copyright bar at the bottom.

## Styling Approach

All component styles are written as inline React style objects — no external CSS framework or CSS Modules. Global resets and `#root` overrides live in `index.css`. Design tokens used throughout:

| Token | Value |
|---|---|
| Primary blue | `#2563EB` |
| Primary dark | `#1E40AF` |
| Text dark | `#111827` |
| Text muted | `#6B7280` |
| Border | `#E5E7EB` |
| Surface grey | `#F9FAFB` |
| Blue tint bg | `#EFF6FF` |

## Placeholder Content

The following are intentional placeholders to be replaced with real assets:

- Dashboard image in `Hero` — replace the grey `div` with an `<img>` pointing to a real screenshot
- Partner logos in `TrustedBy` — swap the grey blocks for `<img>` elements
- Video in `VideoDemo` — replace the grey `div` with an `<iframe>` or `<video>` element
- Blog post images and content in `Blog` — replace the grey blocks and placeholder text with real data
- Social icon links in `Footer` — update the `href` values
