import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { BandInfo } from '../types';
import { mockApi } from '../utils/mockData';
import { LoadingSpinner } from './LoadingSpinner';

export const AboutSection: React.FC = () => {
  const [bandInfo, setBandInfo] = useState<BandInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBandInfo = async () => {
      try {
        const data = await mockApi.getBandInfo();
        setBandInfo(data);
      } catch (error) {
        console.error('Error fetching band info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBandInfo();
  }, []);

  if (loading) {
    return (
      <section id="about" className="section-padding bg-primary-neutral">
        <div className="container-metal">
          <LoadingSpinner size="lg" text="Loading band info..." />
        </div>
      </section>
    );
  }

  if (!bandInfo) {
    return (
      <section id="about" className="section-padding bg-primary-neutral">
        <div className="container-metal">
          <p className="text-center text-primary-gray">Unable to load band information.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="section-padding bg-primary-neutral">
      <div className="container-metal">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-primary text-5xl md:text-6xl mb-4">About The Band</h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-8" />
          <p className="text-xl text-primary-gray max-w-3xl mx-auto">
            Discover the story behind the darkness, the passion behind the power.
          </p>
        </div>

        {/* Band Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="heading-secondary text-3xl mb-6">Our Story</h3>
            <p className="text-body text-lg leading-relaxed mb-6">
              {bandInfo.bio}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-primary-accent" />
                <div>
                  <p className="text-sm text-primary-gray">Formed</p>
                  <p className="text-primary-light font-semibold">{bandInfo.formed}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-primary-accent" />
                <div>
                  <p className="text-sm text-primary-gray">Location</p>
                  <p className="text-primary-light font-semibold">{bandInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-primary-accent" />
                <div>
                  <p className="text-sm text-primary-gray">Genre</p>
                  <p className="text-primary-light font-semibold">{bandInfo.genre}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop"
              alt="Band performing live"
              className="rounded-metal shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-accent/20 rounded-metal -z-10" />
          </div>
        </div>

        {/* Band Members */}
        <div className="mb-20">
          <h3 className="heading-secondary text-3xl text-center mb-12">Band Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandInfo.members.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-metal">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-primary-accent font-semibold text-sm">{member.role}</p>
                  </div>
                </div>
                <h4 className="heading-secondary text-xl mb-2">{member.name}</h4>
                <p className="text-body text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="heading-secondary text-3xl mb-8">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {bandInfo.socialMedia.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-primary-dark px-6 py-3 rounded-metal hover:bg-primary-accent transition-colors group"
              >
                <ExternalLink className="h-4 w-4 text-primary-gray group-hover:text-primary-light" />
                <span className="text-primary-light font-inter font-medium capitalize">
                  {social.platform}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};