# Healthcare VC Sourcing Hub

## High-level Strategy and Goal

A premium personal brand site for a healthcare/health-tech VC deal sourcing hub. The app serves two audiences:

1. **Founders** — a polished public landing page where they can learn about the investor's focus and submit their pitch deck via a structured form.
2. **The Investor (internal)** — a private dashboard to review, filter, and manage all incoming pitch submissions with status tracking and notes.

The design is intentionally premium and minimal: deep forest green accent on warm off-white, confident typography, and subtle motion — signaling health, growth, and seriousness.

---

## Changes Implemented

### Full Rebuild (July 2026)
- **Deleted** all old pitch portal components and old page/API files.
- **Database**: Dropped and recreated `pitch_submissions` table with full schema.
- **Landing page** (`/`): Full single-page scrolling site.
- **Pitch form**: 5-section form with inline validation and success state.
- **Dashboard** (`/dashboard`): Private VC deal flow dashboard.
- **API routes**: `POST /api/submissions`, `GET /api/submissions`, `GET /api/submissions/[id]`, `PATCH /api/submissions/[id]`.
- **Design system**: Updated `globals.css` CSS variables.
- **Topbar/Sidebar**: Simplified to return null.

### Glassmorphism Redesign (July 2026)
- Updated color palette to soft blue-gray.
- Frosted glass UI throughout.
- Aurora gradient animations.

---

## Architecture and Technical Decisions

### Component Structure
```
src/
  app/
    page.tsx                    # Landing page
    dashboard/
      page.tsx                  # VC dashboard
      layout.tsx
      loading.tsx
    api/submissions/
      route.ts
      [id]/route.ts
  components/
    landing/
      LandingNavbar.tsx
      HeroSection.tsx
      AboutSection.tsx
      SubmitSection.tsx
      PitchForm.tsx
      LandingFooter.tsx
    dashboard/
      SubmissionSheet.tsx
  client-lib/
    api-client.ts
```

### Key Decisions
- Landing page is a client component (scroll listener for navbar).
- Form uses `useState` (not react-hook-form).
- Optimistic updates on status changes.
- Notes auto-save on blur.
- No sidebar — single focused dashboard view.
- SWR `dedupingInterval: 30000`.
- Indexes on `status`, `sector`, `stage`, `submitted_at`.