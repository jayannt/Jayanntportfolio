# Portfolio Website

## Overview

A modern, static portfolio website built with vanilla HTML, CSS, and JavaScript. The site features a modular component architecture with dynamic content loading, smooth animations, and a fully responsive design. Projects are managed through a JSON data file for easy updates without code changes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Component-Based Structure**
- Components are stored as separate HTML files (`navbar.html`, `footer.html`, `project-card.html`)
- Components are dynamically loaded via `fetch()` API and injected into the DOM at runtime
- This approach enables code reuse and maintainability without requiring a build tool or framework
- **Rationale**: Keeps the codebase simple and framework-free while still maintaining modularity

**JavaScript Module Organization**
- `main.js`: Core initialization, component loading, navigation, and scroll animations
- `form.js`: Contact form validation and submission handling
- `projects.js`: Fetches and renders project data from JSON
- Uses ES6 modules with simple import/export patterns
- **Rationale**: Separation of concerns without over-engineering; each file has a single, clear responsibility

**Styling Strategy**
- Three separate CSS files for organization:
  - `style.css`: Base styles and component styling
  - `animations.css`: Keyframe animations and transitions
  - `responsive.css`: Media queries and breakpoints
- Mobile-first responsive design approach
- CSS custom properties (variables) for consistent theming
- **Rationale**: Makes styles easier to maintain and debug; mobile-first ensures baseline functionality

**Data Management**
- Projects stored in `data/projects.json` as a static JSON file
- Fetched asynchronously on page load
- Template-based rendering using string replacement
- **Rationale**: Non-technical users can update projects by editing JSON; no database needed for static content

### Animation System

**Scroll-Based Animations**
- Intersection Observer API (likely implemented in `initScrollAnimations()`)
- CSS keyframe animations triggered by JavaScript class addition
- Staggered animations for grid items (indicated by `stagger-${index}` classes)
- **Rationale**: Provides smooth, performant animations that enhance UX without JavaScript animation libraries

**Navigation Behavior**
- Fixed navbar with scroll-based styling changes
- Mobile hamburger menu with toggle functionality
- Smooth scrolling to anchor sections
- **Rationale**: Standard portfolio navigation pattern that works across all devices

### Form Handling

**Client-Side Validation**
- Real-time field validation on blur events
- Error clearing on input
- Comprehensive form validation before submission
- **Rationale**: Immediate feedback improves user experience; prevents invalid submissions

**Submission Strategy**
- Currently simulated submission (`simulateFormSubmission()`)
- Form is static and ready for backend integration
- Success/error status messages provided
- **Alternatives Considered**: Could integrate with services like Formspree, EmailJS, or a custom backend
- **Rationale**: Keeps the site static by default; easy to integrate with any backend service later

### Asset Management

**Organized Directory Structure**
- `/assets/fonts/`: Custom web fonts
- `/assets/icons/`: Icon files
- `/assets/images/`: Images and photos (profile, etc.)
- `/assets/resume/`: Downloadable resume files
- `/assets/videos/`: Video content
- **Rationale**: Clear organization makes asset management straightforward

**External Resources**
- Google Fonts for typography (Inter, Playfair Display)
- Unsplash images for project placeholders
- **Rationale**: CDN-hosted fonts improve performance; placeholder images allow immediate deployment

## External Dependencies

### Third-Party Services

**Google Fonts**
- Fonts: Inter (weights: 300, 400, 500, 600, 700), Playfair Display (weight: 700)
- Preconnect optimization for performance
- Used for typography throughout the site

**Image Hosting**
- Unsplash for placeholder project images
- Expected local images for profile photo and custom content

### Browser APIs

**Core Web APIs Used**
- Fetch API: Loading components and project data
- Intersection Observer API: Scroll animations (likely)
- FormData API: Form handling
- Local Storage: Potentially for caching (not explicitly shown but common pattern)

### Planned Integrations

**Contact Form Backend**
- `/mail/` directory suggests planned backend integration
- Currently static with client-side validation only
- Ready for integration with:
  - Email service APIs (SendGrid, Mailgun, etc.)
  - Form handling services (Formspare, EmailJS, etc.)
  - Custom backend endpoint

**Social Media Links**
- GitHub profile integration
- LinkedIn profile integration  
- Twitter profile integration
- Configured in footer component

### No Database Required

This is a fully static site with no database dependencies. All content is:
- Hardcoded in HTML files
- Stored in JSON data files
- Served as static assets

**Future Consideration**: If dynamic content management is needed, could add a headless CMS (Contentful, Strapi, etc.) or simple backend with database for project management.