import { useState, useEffect } from 'react';
import { Target, Eye, Users, TrendingUp, Award, Globe } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  order_index: number;
}

export default function About() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    const { data } = await supabase
      .from('team_members')
      .select('*')
      .order('order_index', { ascending: true });

    if (data) setTeamMembers(data);
  };

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'Pushing boundaries with cutting-edge solutions and creative thinking',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering premium quality in every project, every time',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our mission. We listen, adapt, and deliver',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise and global standards',
    },
  ];

  const workflow = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your vision, goals, and target audience',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Crafting a comprehensive roadmap tailored to your needs',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Creating stunning visuals that capture your brand essence',
    },
    {
      step: '04',
      title: 'Development',
      description: 'Building robust solutions with cutting-edge technology',
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Deploying your project with precision and support',
    },
    {
      step: '06',
      title: 'Grow',
      description: 'Optimizing and scaling for continued success',
    },
  ];

  return (
    <div className="bg-black text-white">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-black" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-6 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About <span className="text-orange-500">Magmar Enterprises</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A global leader in digital design and marketing, transforming businesses through
            creative innovation
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-orange-500">Story</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Founded over 15 years ago, Magmar Enterprises began with a simple mission: to help
                businesses succeed in the digital age. What started as a small team of passionate
                designers and developers has grown into a global agency serving clients across 50+
                countries.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                We've completed over 500 projects, partnered with industry leaders, and helped
                countless businesses transform their digital presence. Our journey is driven by
                innovation, creativity, and an unwavering commitment to client success.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we're more than just an agency – we're your strategic partner in navigating
                the ever-evolving digital landscape.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mission"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-12">
                <Target className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-4xl font-bold mb-4">
                  Our <span className="text-orange-500">Mission</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower businesses worldwide with innovative digital solutions that drive
                  growth, enhance brand presence, and create lasting impact. We strive to be the
                  catalyst for digital transformation, turning visions into reality.
                </p>
              </div>
              <div>
                <Eye className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="text-4xl font-bold mb-4">
                  Our <span className="text-orange-500">Vision</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's most trusted digital agency, recognized for creativity,
                  innovation, and exceptional results. We envision a future where every business,
                  regardless of size, can harness the power of digital to achieve extraordinary
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all hover:-translate-y-2"
                >
                  <Icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-orange-500">Workflow</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven process that delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all group"
              >
                <div className="text-6xl font-bold text-orange-500/20 mb-4 group-hover:text-orange-500/40 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group text-center hover:-translate-y-2 transition-transform"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img
                      src={member.image_url}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p>Team profiles coming soon...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
