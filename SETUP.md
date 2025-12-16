# Magmar Enterprises Website - Setup Guide

## Overview
A modern, responsive corporate portfolio website for Magmar Enterprises, featuring a sleek design with deep black, charcoal gray, and burnt orange color scheme.

## Prerequisites
- Node.js installed
- Supabase account
- Database already configured

## Environment Setup

1. Update your `.env` file with your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Setup

The database schema has been created with the following tables:
- `portfolio_items` - Portfolio projects and case studies
- `blog_posts` - Blog articles and insights
- `testimonials` - Client testimonials
- `team_members` - Team member profiles
- `contact_submissions` - Contact form submissions

### Sample Data (Optional)

You can populate the database with sample data using the Supabase dashboard or SQL queries. Here are some examples:

#### Portfolio Items
```sql
INSERT INTO portfolio_items (title, description, category, image_url, featured, case_study, client_name, technologies, project_url)
VALUES
  ('E-Commerce Redesign', 'Complete redesign of online store with 300% conversion increase', 'Design', 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg', true, 'Transformed the user experience...', 'TechCorp Inc', ARRAY['React', 'Node.js', 'Stripe'], 'https://example.com'),
  ('Brand Identity Package', 'Full branding suite for startup launch', 'Branding', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', true, 'Created a memorable brand...', 'StartUp Co', ARRAY['Adobe Illustrator', 'Figma'], null);
```

#### Testimonials
```sql
INSERT INTO testimonials (client_name, company, position, testimonial, rating, featured, image_url)
VALUES
  ('Sarah Johnson', 'TechCorp Inc', 'CEO', 'Magmar Enterprises transformed our digital presence beyond expectations. Their creativity and professionalism are unmatched.', 5, true, 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'),
  ('Michael Chen', 'StartUp Co', 'Founder', 'Working with Magmar was a game-changer. They delivered exceptional results on time and within budget.', 5, true, 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg');
```

#### Blog Posts
```sql
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, image_url, published)
VALUES
  ('10 Marketing Trends for 2024', '10-marketing-trends-2024', 'Discover the latest marketing strategies that will dominate in 2024', 'Full article content here...', 'Emma Williams', 'Marketing', 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg', true),
  ('The Power of Brand Identity', 'power-of-brand-identity', 'Why your brand identity matters more than ever', 'Full article content here...', 'David Martinez', 'Design', 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg', true);
```

#### Team Members
```sql
INSERT INTO team_members (name, role, bio, image_url, order_index)
VALUES
  ('Alex Thompson', 'Creative Director', 'Leading creative vision with 15+ years of experience', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', 1),
  ('Jessica Lee', 'Head of Marketing', 'Strategic marketing expert driving growth and innovation', 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg', 2);
```

## Running the Project

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features

### Pages
- **Home** - Hero section, services preview, featured portfolio, testimonials, and stats
- **About** - Company story, mission, vision, values, workflow, and team
- **Services** - 8 comprehensive service categories with expandable details
- **Portfolio** - Filterable project gallery with detailed case studies
- **Blog** - Article listings with category filtering and full post views
- **Contact** - Contact form with validation and location information

### Design Features
- Modern, premium aesthetic with smooth animations
- Fully responsive design (mobile, tablet, desktop)
- Custom scrollbar with brand colors
- Interactive hover effects and transitions
- Optimized images from Pexels
- Professional typography (Inter & Poppins fonts)

### Technical Features
- React with TypeScript
- React Router for navigation
- Supabase for data persistence
- Tailwind CSS for styling
- SEO optimized meta tags
- Row Level Security (RLS) policies

## SEO Configuration

The website includes:
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML structure
- Optimized page titles

## Security

All database tables have Row Level Security enabled:
- Public read access for published content
- Authenticated write access for content management
- Public insert access for contact submissions only

## Performance

- Lazy loading for images
- Optimized bundle size
- Smooth animations and transitions
- Fast page transitions with React Router

## Support

For questions or assistance, refer to the documentation or contact support.
