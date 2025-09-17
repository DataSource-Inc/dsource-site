# DataSource Inc. Website Redesign

Modern, responsive website for DataSource Inc. built with Next.js 14, TypeScript, and Tailwind CSS.

## Project Overview

This is a complete redesign and modernization of the DataSource Inc. corporate website, transitioning from a traditional multi-page HTML site to a modern, performant Next.js application.

### Key Features

- **Modern Stack**: Next.js 14 with App Router for optimal performance and SEO
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Server-Side Rendering**: Static site generation for fast load times
- **Type Safety**: Full TypeScript implementation
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized images, lazy loading, and code splitting

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd dsource-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
dsource-site/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   ├── about/             # About section
│   ├── products/          # Products showcase
│   ├── services/          # Services offerings
│   ├── contracts/         # Government contracts
│   ├── careers/           # Career opportunities
│   └── contact/           # Contact information
├── components/            # Reusable React components
│   ├── layout/           # Header, Footer, Navigation
│   ├── ui/               # UI components (buttons, cards, etc.)
│   └── sections/         # Page sections
├── public/               # Static assets
│   ├── images/          # Images and graphics
│   └── fonts/           # Custom fonts
├── styles/              # Global styles
├── lib/                 # Utility functions and helpers
├── types/               # TypeScript type definitions
└── docs/                # Documentation
```

## Development Guidelines

### Code Style

- Use TypeScript for all new components
- Follow React best practices and hooks patterns
- Implement responsive design with Tailwind CSS utilities
- Maintain accessibility standards

### Component Structure

```tsx
// Example component structure
import { FC } from 'react'

interface ComponentProps {
  title: string
  description?: string
}

const Component: FC<ComponentProps> = ({ title, description }) => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  )
}

export default Component
```

### Git Workflow

1. Create feature branches from `main`
2. Use descriptive commit messages
3. Submit pull requests for review
4. Ensure all tests pass before merging

## Content Migration

Content from the existing site is being migrated and modernized. See `/docs/current-site-analysis.md` for detailed analysis of the current site structure.

### Priority Pages

1. Homepage with hero section
2. About Us with company history
3. Products showcase (ABIS, Abri, Pipeliner, AIM)
4. Services overview
5. Contact information

## Deployment

The site is configured for deployment on Vercel or any Node.js hosting platform.

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://datasourceinc.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Performance Targets

- Lighthouse Score: 95+ for all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Core Web Vitals: All green

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - DataSource Inc. All rights reserved.

## Contact

For questions about this project, please contact the development team.

---

Built with Next.js and maintained by DataSource Inc.
