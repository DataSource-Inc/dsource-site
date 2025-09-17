# DataSource Inc. Site Structure & Implementation Plan

## Updated Navigation Structure

Based on the email requirements, the site will have a simplified navigation with these 7 main sections:

1. **Home** - Landing page with hero and overview
2. **About Us** - Company information and history
3. **ABIS** - Flagship product showcase (main focus)
4. **Services** - Service offerings
5. **Clients & Partners** - Client list and partnerships
6. **Careers** - Job opportunities and benefits
7. **Contact Us** - Contact information and demo requests

## Page Breakdown

### 1. Home Page (`/`)
**Content Sections:**
- Hero Section
  - Professional building/cityscape image (as per mockup)
  - Tagline: "Trusted Background Investigation System Provider for Federal Government Personnel Security Departments"
  - Brief description of DataSource services
- Services Preview Card
  - Keyboard image
  - Brief ABIS overview
  - "Read More" link to ABIS page
- About Us Preview Card
  - Team/office image
  - Company highlights
  - Link to About page
- Client Logos Bar
  - Federal agency and partner logos

### 2. About Us Page (`/about`)
**Content:**
- Company history (Founded 1994)
- CMMI Level 2 certification
- Woman-owned small business designation
- 31 years of experience
- Mission and values
- Why Partner with DataSource:
  - Expertise (25+ years in Personnel Security)
  - Best Practices (CMMI Level 2)
  - Dedicated Support
  - Competitive Pricing

### 3. ABIS Page (`/abis`) - PRIMARY FOCUS
**Main Sections:**

#### Hero Section
- "Our Flagship Product"
- ABIS logo/branding
- "What Is ABIS?" introduction

#### Overview
- Comprehensive case management system
- Exclusively for Federal Personnel Security Processes
- End-to-end processing for all tiers

#### Why Choose ABIS
- Dynamic data-driven architecture
- User-defined configurable workflows
- 25 years of subject matter expertise

#### Key Features
**Architecture & Design:**
- User-Defined Configurable Workflows
- Case Detail Tree Structure
- Easy Addition of New Case Types
- Impressive Automation of Customer Correspondence
- Reference Data Architecture

**Highlighted Capabilities:**
- Intuitive Design for Personnel Security tasks
- Seamless Integration with eDelivery
- Automatic eAdjudication (Tier 1 & 2)
- User-Defined Role-Based Security
- Automatic Pre-Screening for EOD determinations
- Robust Search Capability
- COR Functionality
- Multiple APIs for integration
- One-Touch ODNI Quarterly Reporting
- SEAD3 Self-Reporting
- FedRamp-Approved Cloud Hosting

#### Security Features
- Built to handle PII securely
- Implements all NIST Security Controls (moderate level)
- Adheres to "least privilege" principle
- Supports Zero Trust principles

#### Technical Information (Q&A Format)
- Technologies used (Java, Tomcat, MS SQL Server, BIRT, MVC, HTML5/CSS3)
- Requirements (MS SQL Server license)
- Implementation timeline
- Contract options (GSA Contract Number GS-35F-410GA)
- Demo availability

### 4. Services Page (`/services`)
**Content:**
- Software Engineering
- Project Management
- Staff Augmentation
- Cloud Hosting
- Federal Personnel Security Support
- System Modernization

### 5. Clients & Partners Page (`/clients`)
**Content:**
- Client logos and testimonials
- Federal agency partnerships
- Contract vehicles
- Success stories/case studies

### 6. Careers Page (`/careers`)
**Content:**
- Company culture
- Benefits package
- Current openings
- Application process
- Link to hr@datasourceinc.com

### 7. Contact Us Page (`/contact`)
**Content Structure:**
- Demo Request Section
  - Lukas Klotzsche, Director Sales & Marketing
  - lklotzsche@datasourceinc.com
  - 561-502-2822
- Department-specific contacts:
  - Software Development: sales@datasourceinc.com
  - General Inquiries: info@datasourceinc.com
  - HR/Careers: hr@datasourceinc.com
  - Website Support: support@datasourceinc.com
- Office Location:
  - DataSource, Inc.
  - 1749 Old Meadow Road, Suite 350
  - McLean, VA 22102
- Phone Numbers:
  - Main: 703-748-7180
  - Toll Free: 866-991-3642
  - Fax: 703-748-7180

## Design Guidelines

### Visual Style
- Clean, professional, government contractor aesthetic
- Similar look and feel to current website but modernized
- Use the professional images from mockup for Home page only
- Other pages should maintain clean, text-focused layouts

### Color Palette
- Primary: DataSource Blue (from logo)
- Secondary: Professional grays
- Accent: Red/Orange (from ABIS branding)
- Background: White/Light gray

### Typography
- Professional, readable fonts
- Clear hierarchy with consistent heading styles
- Emphasis on readability for government audience

## Technical Implementation Notes

### Next.js App Router Structure
```
app/
├── layout.tsx (main layout with navigation)
├── page.tsx (home page)
├── about/page.tsx
├── abis/page.tsx (primary focus page)
├── services/page.tsx
├── clients/page.tsx
├── careers/page.tsx
└── contact/page.tsx
```

### Component Architecture
```
components/
├── layout/
│   ├── Header.tsx (with main navigation)
│   ├── Footer.tsx
│   └── Navigation.tsx
├── home/
│   ├── HeroSection.tsx
│   ├── ServicesCard.tsx
│   └── AboutCard.tsx
├── abis/
│   ├── FeatureGrid.tsx
│   ├── SecuritySection.tsx
│   ├── TechSpecs.tsx
│   └── FAQAccordion.tsx
└── common/
    ├── Button.tsx
    ├── Card.tsx
    └── Section.tsx
```

## Content Migration Priority

1. **Phase 1 - Core Pages**
   - Home page with hero and cards
   - ABIS page (complete with all sections)
   - Contact page

2. **Phase 2 - Supporting Pages**
   - About Us
   - Services
   - Clients & Partners

3. **Phase 3 - Additional Content**
   - Careers
   - Any additional ABIS resources/documentation

## SEO & Performance Considerations

- Static generation for all pages
- Optimized images with Next.js Image component
- Meta tags for each page
- Structured data for organization info
- XML sitemap
- Robots.txt configuration

## Notes from Requirements

- **Remove:** All other products (Abri, Pipeliner, AIM) - focus only on ABIS
- **Simplify:** Reduce navigation complexity from current site
- **Maintain:** Professional appearance similar to current site
- **Update:** Use new images from mockup for homepage only
- **Focus:** ABIS as the flagship and primary product