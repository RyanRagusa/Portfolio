# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Ryan Ragusa's UX designer portfolio - a professional, static website built for GitHub Pages hosting. The portfolio showcases UX/UI design work, case studies, and personal brand through a clean, accessible interface.

## Architecture

**Single-Page Application with Hybrid Navigation**
- Main site: `index.html` uses client-side JavaScript routing via `showPage()` function
- Case studies: Individual HTML files in `case-studies/` directory for better SEO and sharing
- Navigation switches between SPA sections (home, work, about) and external case study pages

**Core Components**
- `index.html`: Main SPA with three sections (home, work, about/contact merged)
- `assets/css/styles.css`: Complete design system using CSS custom properties
- `assets/js/script.js`: Navigation, form handling, and responsive interactions
- `case-studies/*.html`: Individual case study pages with unified navigation

**CSS Architecture**
- Design system built on CSS custom properties (CSS variables)
- Typography: Inter (sans-serif) + Merriweather (serif) pairing
- Color system: Professional blue accent (#2563EB) with warm secondary (#F59E0B)
- Spacing system: rem-based with consistent scale (--space-xs to --space-xl)
- Mobile-first responsive design with grid/flexbox layouts

## Key Features

**Navigation System**
- `showPage(pageId)`: SPA navigation for main sections
- `showCaseStudy(caseStudyId)`: External navigation to case study pages
- Responsive mobile menu with hamburger toggle

**Design Philosophy**
- Accessibility-first approach (WCAG compliance)
- Professional UX designer branding
- Emphasis on "design thinking" and psychology/neuroscience background
- Social media integration (LinkedIn, Dribbble, Behance)

**Content Structure**
- Personal brand emphasizes empathy, accessibility, and research-driven design
- Case studies follow UX methodology: Problem → Research → Process → Results
- Contact/About sections merged for streamlined user experience

## Development Workflow

**Local Development**
```bash
# No build process - open directly in browser
open index.html
# Or use local server
python -m http.server 8000
```

**GitHub Pages Deployment**
- Automatic deployment from main branch
- No build step required - pure static files
- Uses `index.html` naming convention (lowercase 'i')

## Content Management

**Adding New Case Studies**
1. Create new HTML file in `case-studies/` following existing template structure
2. Update work section in `index.html` with new case study card
3. Update `showCaseStudy()` function if needed for routing
4. Follow existing case study format: header meta → problem → research → process → results

**Updating Personal Information**
- Contact details: Update email, LinkedIn, social links throughout files
- About section: Personal background and skills in `index.html`
- Social links: Update URLs in social-contact-section with proper `target="_blank" rel="noopener"`

**Design System Modifications**
- CSS custom properties in `:root` selector for global changes
- Consistent component patterns: `.card`, `.grid-*`, `.social-link`
- Responsive breakpoint: 768px for mobile/desktop distinction

## Technical Notes

**Browser Compatibility**
- Uses modern CSS (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (no dependencies)
- Progressive enhancement approach

**SEO Optimization**
- Individual case study pages for better search indexing
- Semantic HTML with proper heading hierarchy
- Meta tags and Open Graph data included

**Accessibility**
- ARIA labels and semantic markup
- Color contrast compliance
- Keyboard navigation support
- Screen reader friendly structure

## Portfolio Customization

**Brand Colors**
- Primary accent: `--color-accent` (#2563EB)
- Secondary warm: `--color-warm` (#F59E0B)
- Modify `:root` variables for consistent theme changes

**Typography Scale**
- Serif headlines (`--font-serif`) for elegant personality
- Sans-serif body (`--font-sans`) for readability
- Consistent scale using CSS custom properties

**Case Study Templates**
- Follow UX case study best practices
- Include problem statement, research methods, design process, and measurable results
- Use existing case study files as templates for consistency

## Current Case Studies

**Primary Case Study: Growthmancer (sample-project.html)**
- Focus: Learning & emotional resilience platform with gamified helper characters
- Content: Complete 8-week UX design process with user personas, research, and usability testing
- Status: Comprehensive case study with strategic image placeholders for future enhancement

**Template Case Studies (sample-project-2/3/4.html)**
- Analytics Dashboard, Learning Platform, Healthcare Portal
- Status: Placeholder content for future replacement with real projects

## Content Update Guidelines

**Image Placeholder System**
- All case studies include styled placeholder divs with descriptive labels
- Format: `[Image: Description of intended visual content]`
- Easy to replace with actual images by updating the placeholder div content
- Maintains consistent styling and layout structure

**Personal Branding Elements**
- Logo integration: Custom SVG logo in about section (assets/images/logo.svg)
- Logo display: 220px x 220px, centered in 300px container without circular background
- Professional background: Psychology/neuroscience foundation with design thinking emphasis
- Social media links: LinkedIn, Dribbble, Behance with proper external link handling

**Logo Management**
- Current logo: Custom blue "R" with yellow elliptical accent in SVG format
- Logo styling: `.logo-display` container with `.logo-image` class for direct display
- Logo updates: Replace logo.svg file and maintain 220px x 220px dimensions
- Source files: Logo.pdf available in assets/images/ for reference

**SEO and GitHub Pages Optimization**
- File naming: Uses lowercase 'index.html' for GitHub Pages compatibility
- Meta tags: Comprehensive Open Graph and description tags in all pages
- Semantic structure: Proper heading hierarchy and ARIA labels for accessibility

## Related Repositories

**Style Tile Repository**
- Repository: `Portfolio-style-tile` (separate GitHub repo)
- Purpose: Comprehensive design system documentation and style guide
- Content: Color palette, typography specimens, spacing system, UI components
- Deployment: GitHub Pages enabled for live style guide reference