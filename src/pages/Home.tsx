import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
}

interface Testimonial {
  id: string;
  client_name: string;
  company: string;
  position: string;
  testimonial: string;
  rating: number;
  image_url: string | null;
}

export default function Home() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetchFeaturedContent();
  }, []);

  const fetchFeaturedContent = async () => {
    const { data: portfolio } = await supabase
      .from('portfolio_items')
      .select('*')
      .eq('featured', true)
      .limit(6);

    const { data: testimonialData } = await supabase
      .from('testimonials')
      .select('*')
      .eq('featured', true)
      .limit(3);

    if (portfolio) setPortfolioItems(portfolio);
    if (testimonialData) setTestimonials(testimonialData);
  };

  const services = [
    {
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive results and maximize ROI',
      icon: '🎯',
    },
    {
      title: 'Web Development',
      description: 'Custom websites and apps built with cutting-edge technology',
      icon: '💻',
    },
    {
      title: 'Branding & Design',
      description: 'Visual identity that captures your essence and stands out',
      icon: '🎨',
    },
    {
      title: 'SEO Optimization',
      description: 'Get found online with data-driven search strategies',
      icon: '📈',
    },
  ];

  return (
    <div className="bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-black" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-fadeIn">
            <Sparkles className="w-16 h-16 text-orange-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's Build Something{' '}
              <span className="text-orange-500 inline-block hover:scale-110 transition-transform">
                Great
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforming visions into exceptional digital experiences. Your partner in creative
              innovation and strategic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 inline-flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500/10 transition-all inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-orange-500">Offer</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold text-lg group"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-orange-500">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing our latest projects and creative solutions
            </p>
          </div>

          {portfolioItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/portfolio/${item.id}`}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:scale-105 transition-transform"
                >
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="text-orange-500 text-sm font-semibold">{item.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p>Portfolio items coming soon...</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold text-lg group"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="text-orange-500">Testimonials</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hear what our clients say about working with us
            </p>
          </div>

          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.testimonial}"</p>
                  <div className="flex items-center">
                    {testimonial.image_url && (
                      <img
                        src={testimonial.image_url}
                        alt={testimonial.client_name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-white">{testimonial.client_name}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p>Testimonials coming soon...</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-orange-500 mb-2">500+</p>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-500 mb-2">200+</p>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-500 mb-2">50+</p>
              <p className="text-gray-400">Countries Served</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-orange-500 mb-2">15+</p>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="text-orange-500">Digital Presence?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's collaborate to create something extraordinary that drives real results for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 inline-flex items-center justify-center group"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
