import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Megaphone,
  Mail,
  Search,
  Video,
  Smartphone,
  Palette,
  Package,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'social-media',
      title: 'Social Media & Digital Ads',
      icon: TrendingUp,
      description:
        'Strategic social media campaigns and targeted digital advertising that maximize reach and engagement',
      process: [
        'Audience research and platform selection',
        'Content strategy and calendar creation',
        'Ad campaign design and targeting',
        'Performance tracking and optimization',
      ],
      features: [
        'Facebook, Instagram, LinkedIn campaigns',
        'Google Ads and PPC management',
        'Social media content creation',
        'Influencer partnerships',
        'Community management',
      ],
    },
    {
      id: 'marketing-strategy',
      title: 'Marketing Strategy',
      icon: Megaphone,
      description:
        'Comprehensive marketing strategies that align with your business goals and drive measurable results',
      process: [
        'Market research and competitive analysis',
        'Target audience identification',
        'Multi-channel strategy development',
        'KPI definition and tracking',
      ],
      features: [
        'Brand positioning',
        'Go-to-market strategies',
        'Customer journey mapping',
        'Marketing automation',
        'Analytics and reporting',
      ],
    },
    {
      id: 'email-content',
      title: 'Email & Content Marketing',
      icon: Mail,
      description:
        'Engaging email campaigns and content that nurture leads and build lasting customer relationships',
      process: [
        'Content strategy development',
        'Email list segmentation',
        'Campaign design and copywriting',
        'A/B testing and optimization',
      ],
      features: [
        'Email automation workflows',
        'Newsletter design and distribution',
        'Blog and article writing',
        'Ebook and whitepaper creation',
        'Lead magnet development',
      ],
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      icon: Search,
      description:
        'Data-driven SEO strategies that improve search rankings and drive organic traffic to your site',
      process: [
        'Technical SEO audit',
        'Keyword research and mapping',
        'On-page optimization',
        'Link building and outreach',
      ],
      features: [
        'Local SEO optimization',
        'Content optimization',
        'Technical SEO fixes',
        'Competitor analysis',
        'Monthly performance reports',
      ],
    },
    {
      id: 'motion-graphics',
      title: 'Motion Graphics & Video',
      icon: Video,
      description:
        'Captivating motion graphics and video content that tell your story and engage your audience',
      process: [
        'Concept development and storyboarding',
        'Script writing and voiceover',
        'Animation and editing',
        'Final delivery and optimization',
      ],
      features: [
        'Explainer videos',
        'Product demonstrations',
        '2D/3D animation',
        'Social media video content',
        'Brand films',
      ],
    },
    {
      id: 'app-web-dev',
      title: 'App / Website / NFT Design & Coding',
      icon: Smartphone,
      description:
        'Custom web and mobile applications built with cutting-edge technology and stunning design',
      process: [
        'Requirements gathering and planning',
        'UI/UX design and prototyping',
        'Frontend and backend development',
        'Testing and deployment',
      ],
      features: [
        'Responsive web design',
        'iOS and Android apps',
        'E-commerce solutions',
        'Web3 and NFT platforms',
        'Progressive web apps',
      ],
    },
    {
      id: 'branding',
      title: 'Logo & Branding',
      icon: Palette,
      description:
        'Distinctive brand identities that capture your essence and make a lasting impression',
      process: [
        'Brand discovery and research',
        'Concept development',
        'Design refinement',
        'Brand guidelines creation',
      ],
      features: [
        'Logo design',
        'Brand identity systems',
        'Color palette and typography',
        'Brand voice and messaging',
        'Style guides',
      ],
    },
    {
      id: 'graphic-design',
      title: 'Graphic / Packaging / Collateral Design',
      icon: Package,
      description:
        'Eye-catching graphic design for all your marketing materials and packaging needs',
      process: [
        'Creative brief and direction',
        'Design concept development',
        'Revisions and refinement',
        'Print-ready file preparation',
      ],
      features: [
        'Packaging design',
        'Brochures and catalogs',
        'Business cards and stationery',
        'Presentation design',
        'Print and digital collateral',
      ],
    },
  ];

  return (
    <div className="bg-black text-white">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-black" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-6 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your unique needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {services.map((service) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <div
                  key={service.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-orange-500 transition-all overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedService(isExpanded ? null : service.id)
                    }
                    className="w-full p-8 flex items-start justify-between text-left hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="flex items-start space-x-6 flex-1">
                      <div className="bg-orange-500/10 p-4 rounded-xl">
                        <Icon className="w-8 h-8 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`transform transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    >
                      <ArrowRight className="w-6 h-6 text-orange-500 rotate-90" />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-8 pb-8 animate-fadeIn">
                      <div className="border-t border-gray-700 pt-8 grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-4">
                            Our Process
                          </h4>
                          <ul className="space-y-3">
                            {service.process.map((step, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-4">
                            What's Included
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-8 flex justify-center">
                        <Link
                          to="/contact"
                          className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors inline-flex items-center group"
                        >
                          Get a Quote
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and create a custom solution that's perfect for your
              business
            </p>
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 inline-flex items-center group"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
