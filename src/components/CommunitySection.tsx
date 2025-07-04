import React, { useState, useEffect } from 'react';
import { Calendar, User, MessageSquare, ExternalLink, Heart } from 'lucide-react';
import { NewsPost } from '../types';
import { mockApi } from '../utils/mockData';
import { LoadingSpinner } from './LoadingSpinner';

export const CommunitySection: React.FC = () => {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await mockApi.getNews();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'release':
        return 'bg-green-900/20 border-green-700 text-green-400';
      case 'tour':
        return 'bg-blue-900/20 border-blue-700 text-blue-400';
      case 'news':
        return 'bg-yellow-900/20 border-yellow-700 text-yellow-400';
      default:
        return 'bg-primary-accent/20 border-primary-accent text-primary-accent';
    }
  };

  if (loading) {
    return (
      <section className="section-padding bg-primary-dark">
        <div className="container-metal">
          <LoadingSpinner size="lg" text="Loading community updates..." />
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-primary-dark">
      <div className="container-metal">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-primary text-5xl md:text-6xl mb-4">Community</h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-8" />
          <p className="text-xl text-primary-gray max-w-3xl mx-auto">
            Stay connected with the latest news, updates, and exclusive content from the metal underground.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Feed */}
          <div className="lg:col-span-2">
            <h3 className="heading-secondary text-2xl mb-8 flex items-center space-x-2">
              <MessageSquare className="h-6 w-6 text-primary-accent" />
              <span>Latest News</span>
            </h3>
            
            <div className="space-y-8">
              {news.map((post) => (
                <article key={post.id} className="bg-primary-neutral rounded-metal overflow-hidden shadow-lg">
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium border ${getCategoryColor(post.category)}`}>
                        {post.category.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-2 text-primary-gray text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-primary-gray text-sm">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h4 className="heading-secondary text-xl mb-3">{post.title}</h4>
                    <p className="text-primary-gray mb-4 leading-relaxed">{post.excerpt}</p>
                    
                    <button className="text-primary-accent hover:text-primary-light transition-colors font-inter font-medium flex items-center space-x-1">
                      <span>Read More</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Fan Submissions */}
            <div className="bg-primary-neutral rounded-metal p-6">
              <h3 className="heading-secondary text-xl mb-6 flex items-center space-x-2">
                <Heart className="h-5 w-5 text-primary-accent" />
                <span>Fan Submissions</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-primary-dark rounded-metal p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
                      alt="Fan"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-primary-light font-inter font-medium text-sm">@metalhead_alex</p>
                      <p className="text-primary-gray text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <p className="text-primary-gray text-sm">
                    "Just saw you guys live in Detroit! Mind-blowing performance! 🤘"
                  </p>
                </div>
                
                <div className="bg-primary-dark rounded-metal p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=40&h=40&fit=crop&crop=face"
                      alt="Fan"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-primary-light font-inter font-medium text-sm">@dark_sarah</p>
                      <p className="text-primary-gray text-xs">1 day ago</p>
                    </div>
                  </div>
                  <p className="text-primary-gray text-sm">
                    "Eternal Darkness on repeat! This album is pure art! 🖤"
                  </p>
                </div>
              </div>
              
              <button className="w-full mt-6 btn-secondary">
                Submit Your Story
              </button>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-primary-neutral rounded-metal p-6">
              <h3 className="heading-secondary text-xl mb-4">Stay Updated</h3>
              <p className="text-primary-gray text-sm mb-6">
                Get exclusive updates, behind-the-scenes content, and early access to tickets.
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-metal w-full"
                />
                <button className="btn-primary w-full">
                  Subscribe
                </button>
              </div>
              
              <p className="text-primary-gray text-xs mt-4">
                No spam, just metal. Unsubscribe anytime.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-primary-neutral rounded-metal p-6">
              <h3 className="heading-secondary text-xl mb-6">Community Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-primary-gray">Total Fans</span>
                  <span className="text-primary-accent font-inter font-bold">47,293</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary-gray">Shows Played</span>
                  <span className="text-primary-accent font-inter font-bold">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary-gray">Albums Released</span>
                  <span className="text-primary-accent font-inter font-bold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary-gray">Years Active</span>
                  <span className="text-primary-accent font-inter font-bold">6</span>
                </div>
              </div>
            </div>

            {/* Discord/Social Links */}
            <div className="bg-primary-neutral rounded-metal p-6">
              <h3 className="heading-secondary text-xl mb-4">Join the Community</h3>
              
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 bg-primary-dark rounded-metal hover:bg-primary-accent/20 transition-colors group"
                >
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-primary-light font-inter font-medium">Discord Server</p>
                    <p className="text-primary-gray text-xs">1,247 members online</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-primary-gray group-hover:text-primary-accent" />
                </a>
                
                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 bg-primary-dark rounded-metal hover:bg-primary-accent/20 transition-colors group"
                >
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-primary-light font-inter font-medium">Fan Club</p>
                    <p className="text-primary-gray text-xs">Exclusive perks & content</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-primary-gray group-hover:text-primary-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};