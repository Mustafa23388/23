import { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image_url: string;
  created_at: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Marketing', 'Design', 'Development', 'Business', 'Trends'];

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (data) setBlogPosts(data);
  };

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-black text-white">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-black" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-6 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Insights & <span className="text-orange-500">Inspiration</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and case studies
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
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

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.created_at)}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                    <button className="text-orange-500 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-20">
              <p className="text-xl">No articles found in this category.</p>
              <p className="mt-4">Check back soon for more insights!</p>
            </div>
          )}
        </div>
      </section>

      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 animate-fadeIn overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedPost.image_url}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {selectedPost.category}
              </span>
              <h2 className="text-4xl font-bold mb-4">{selectedPost.title}</h2>
              <div className="flex items-center text-gray-400 mb-6 space-x-6">
                <span className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {selectedPost.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {formatDate(selectedPost.created_at)}
                </span>
                <span className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />5 min read
                </span>
              </div>
              <div className="prose prose-invert prose-orange max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
