import { useState, useEffect } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  case_study: string | null;
  client_name: string | null;
  technologies: string[];
  project_url: string | null;
}

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Design', 'Marketing', 'App', 'Branding', 'Web'];

  useEffect(() => {
    fetchPortfolio();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory, portfolioItems]);

  const fetchPortfolio = async () => {
    const { data } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setPortfolioItems(data);
      setFilteredItems(data);
    }
  };

  return (
    <div className="bg-black text-white">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-black" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-6 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="text-orange-500">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest work and success stories
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Filter className="w-6 h-6 text-orange-500 self-center" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800 cursor-pointer hover:scale-105 transition-transform"
                >
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <span className="text-orange-500 text-sm font-semibold mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {item.description}
                    </p>
                    {item.client_name && (
                      <p className="text-gray-400 text-sm">
                        Client: {item.client_name}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-20">
              <p className="text-xl">No projects found in this category.</p>
              <p className="mt-4">Check back soon for more amazing work!</p>
            </div>
          )}
        </div>
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image_url}
                alt={selectedItem.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-orange-500 font-semibold">
                  {selectedItem.category}
                </span>
                {selectedItem.project_url && (
                  <a
                    href={selectedItem.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    <span>View Live</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <h2 className="text-4xl font-bold mb-4">{selectedItem.title}</h2>
              {selectedItem.client_name && (
                <p className="text-gray-400 mb-6">
                  Client: {selectedItem.client_name}
                </p>
              )}
              <p className="text-gray-300 text-lg mb-6">
                {selectedItem.description}
              </p>
              {selectedItem.case_study && (
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4 text-orange-500">
                    Case Study
                  </h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {selectedItem.case_study}
                  </p>
                </div>
              )}
              {selectedItem.technologies.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
