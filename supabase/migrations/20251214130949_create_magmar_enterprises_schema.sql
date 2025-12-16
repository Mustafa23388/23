/*
  # Magmar Enterprises Website Schema

  ## Overview
  Creates the complete database schema for Magmar Enterprises corporate portfolio website,
  including tables for portfolio items, blog posts, testimonials, team members, and contact submissions.

  ## New Tables

  ### 1. portfolio_items
  Stores portfolio projects with categories, images, and case study details
  - `id` (uuid, primary key)
  - `title` (text) - Project title
  - `description` (text) - Short description
  - `category` (text) - Service category (Design, Marketing, App, Branding)
  - `image_url` (text) - Main project image
  - `case_study` (text) - Detailed case study content
  - `client_name` (text) - Client company name
  - `technologies` (text[]) - Technologies/tools used
  - `project_url` (text) - Live project URL if available
  - `featured` (boolean) - Whether to feature on homepage
  - `created_at` (timestamptz)

  ### 2. blog_posts
  Stores blog articles and insights
  - `id` (uuid, primary key)
  - `title` (text) - Article title
  - `slug` (text, unique) - URL-friendly slug
  - `excerpt` (text) - Short preview
  - `content` (text) - Full article content
  - `author` (text) - Author name
  - `category` (text) - Article category
  - `image_url` (text) - Featured image
  - `published` (boolean) - Publication status
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. testimonials
  Stores client testimonials and reviews
  - `id` (uuid, primary key)
  - `client_name` (text) - Client name
  - `company` (text) - Client company
  - `position` (text) - Client job title
  - `testimonial` (text) - Testimonial content
  - `rating` (integer) - Rating out of 5
  - `image_url` (text) - Client photo
  - `featured` (boolean) - Show on homepage
  - `created_at` (timestamptz)

  ### 4. team_members
  Stores team member information
  - `id` (uuid, primary key)
  - `name` (text) - Team member name
  - `role` (text) - Job title/role
  - `bio` (text) - Biography
  - `image_url` (text) - Profile photo
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz)

  ### 5. contact_submissions
  Stores contact form submissions
  - `id` (uuid, primary key)
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `company` (text) - Company name
  - `phone` (text) - Phone number
  - `service_interest` (text) - Service they're interested in
  - `message` (text) - Message content
  - `status` (text) - Submission status (new, contacted, closed)
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access for portfolio, blog, testimonials, and team (published content only)
  - Authenticated write access for content management
  - Public insert access for contact submissions only
*/

-- Create portfolio_items table
CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  case_study text,
  client_name text,
  technologies text[] DEFAULT '{}',
  project_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  position text NOT NULL,
  testimonial text NOT NULL,
  rating integer DEFAULT 5,
  image_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  image_url text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  service_interest text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for portfolio_items
CREATE POLICY "Anyone can view portfolio items"
  ON portfolio_items FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert portfolio items"
  ON portfolio_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update portfolio items"
  ON portfolio_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete portfolio items"
  ON portfolio_items FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for blog_posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for testimonials
CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for team_members
CREATE POLICY "Anyone can view team members"
  ON team_members FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert team members"
  ON team_members FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update team members"
  ON team_members FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete team members"
  ON team_members FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for contact_submissions
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_items(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_items(featured);
CREATE INDEX IF NOT EXISTS idx_blog_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured);
CREATE INDEX IF NOT EXISTS idx_team_order ON team_members(order_index);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);