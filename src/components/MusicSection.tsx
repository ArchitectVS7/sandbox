import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, Clock, Disc } from 'lucide-react';
import { Release } from '../types';
import { mockApi } from '../utils/mockData';
import { LoadingSpinner } from './LoadingSpinner';

export const MusicSection: React.FC = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const data = await mockApi.getReleases();
        setReleases(data);
        setSelectedRelease(data[0] || null);
      } catch (error) {
        console.error('Error fetching releases:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  if (loading) {
    return (
      <section id="music" className="section-padding bg-primary-dark">
        <div className="container-metal">
          <LoadingSpinner size="lg" text="Loading music..." />
        </div>
      </section>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="music" className="section-padding bg-primary-dark">
      <div className="container-metal">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-primary text-5xl md:text-6xl mb-4">Our Music</h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-8" />
          <p className="text-xl text-primary-gray max-w-3xl mx-auto">
            Immerse yourself in our sonic journey through darkness and power.
          </p>
        </div>

        {/* Release Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {releases.map((release) => (
            <button
              key={release.id}
              onClick={() => setSelectedRelease(release)}
              className={`px-6 py-3 rounded-metal font-inter font-medium transition-all duration-300 ${
                selectedRelease?.id === release.id
                  ? 'bg-primary-accent text-primary-light shadow-lg'
                  : 'bg-primary-neutral text-primary-gray hover:bg-primary-accent/20 hover:text-primary-light'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Disc className="h-4 w-4" />
                <span>{release.title}</span>
                <span className="text-xs opacity-70 capitalize">({release.type})</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Release */}
        {selectedRelease && (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Album Cover & Info */}
            <div className="text-center lg:text-left">
              <div className="relative group mb-8">
                <img
                  src={selectedRelease.coverArt}
                  alt={selectedRelease.title}
                  className="w-full max-w-md mx-auto lg:mx-0 rounded-metal shadow-2xl group-hover:shadow-primary-accent/20 transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-primary-accent/10 rounded-metal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="heading-secondary text-4xl mb-2">{selectedRelease.title}</h3>
              <p className="text-primary-gray text-lg mb-4">
                {selectedRelease.type.toUpperCase()} • {formatDate(selectedRelease.releaseDate)}
              </p>
              
              {/* Streaming Links */}
              <div className="space-y-3">
                <h4 className="heading-secondary text-xl mb-4">Listen Now</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(selectedRelease.streamingLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-primary-neutral px-4 py-3 rounded-metal hover:bg-primary-accent transition-colors group"
                    >
                      <Play className="h-4 w-4 text-primary-gray group-hover:text-primary-light" />
                      <span className="text-primary-light font-inter font-medium capitalize flex-1">
                        {platform}
                      </span>
                      <ExternalLink className="h-4 w-4 text-primary-gray group-hover:text-primary-light" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Track List */}
            <div>
              <h4 className="heading-secondary text-2xl mb-6 flex items-center space-x-2">
                <Clock className="h-6 w-6 text-primary-accent" />
                <span>Track List</span>
              </h4>
              
              {selectedRelease.tracks && selectedRelease.tracks.length > 0 ? (
                <div className="space-y-2">
                  {selectedRelease.tracks.map((track, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-primary-neutral rounded-metal hover:bg-primary-accent/10 transition-colors group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-primary-accent font-inter font-medium text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-primary-light font-inter font-medium group-hover:text-primary-accent transition-colors">
                          {track}
                        </p>
                      </div>
                      <Play className="h-4 w-4 text-primary-gray group-hover:text-primary-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-primary-gray">Track listing not available</p>
              )}
            </div>
          </div>
        )}

        {/* Featured Release CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-primary-neutral p-8 rounded-metal">
            <h3 className="heading-secondary text-2xl mb-4">Experience Our Latest</h3>
            <p className="text-primary-gray mb-6 max-w-md">
              Dive deep into our sonic universe. Each track tells a story, each album a complete journey.
            </p>
            <button className="btn-primary flex items-center space-x-2 mx-auto">
              <Play className="h-5 w-5" />
              <span>Play Full Album</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};