import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, Clock, AlertCircle } from 'lucide-react';
import { TourDate } from '../types';
import { mockApi } from '../utils/mockData';
import { LoadingSpinner } from './LoadingSpinner';

export const TourSection: React.FC = () => {
  const [tourDates, setTourDates] = useState<TourDate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTourDates = async () => {
      try {
        const data = await mockApi.getTourDates();
        setTourDates(data);
      } catch (error) {
        console.error('Error fetching tour dates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourDates();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear(),
      weekday: date.toLocaleDateString('en-US', { weekday: 'long' })
    };
  };

  if (loading) {
    return (
      <section id="tour" className="section-padding bg-primary-neutral">
        <div className="container-metal">
          <LoadingSpinner size="lg" text="Loading tour dates..." />
        </div>
      </section>
    );
  }

  return (
    <section id="tour" className="section-padding bg-primary-neutral">
      <div className="container-metal">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-primary text-5xl md:text-6xl mb-4">Tour Dates</h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-8" />
          <p className="text-xl text-primary-gray max-w-3xl mx-auto">
            Join us live for an unforgettable experience. Feel the power, embrace the darkness.
          </p>
        </div>

        {/* Tour Dates */}
        <div className="max-w-4xl mx-auto">
          {tourDates.length > 0 ? (
            <div className="space-y-6">
              {tourDates.map((date) => {
                const formattedDate = formatDate(date.date);
                return (
                  <div
                    key={date.id}
                    className="bg-primary-dark rounded-metal p-6 border border-gray-700 hover:border-primary-accent transition-colors group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      {/* Date */}
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="bg-primary-accent/20 border border-primary-accent rounded-metal p-4 min-w-[80px]">
                            <div className="text-primary-accent font-bebas text-2xl">
                              {formattedDate.day}
                            </div>
                            <div className="text-primary-accent font-inter text-sm uppercase">
                              {formattedDate.month}
                            </div>
                          </div>
                        </div>
                        
                        {/* Event Info */}
                        <div className="flex-1">
                          <h3 className="heading-secondary text-xl mb-2">{date.venue}</h3>
                          <div className="flex items-center space-x-4 text-primary-gray">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{date.city}, {date.country}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{formattedDate.weekday}</span>
                            </div>
                          </div>
                          {date.soldOut && (
                            <div className="flex items-center space-x-1 mt-2">
                              <AlertCircle className="h-4 w-4 text-primary-secondary" />
                              <span className="text-primary-secondary font-inter font-medium text-sm">
                                SOLD OUT
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Ticket Button */}
                      <div className="flex-shrink-0">
                        {date.soldOut ? (
                          <button
                            disabled
                            className="px-6 py-3 bg-gray-600 text-gray-400 rounded-metal cursor-not-allowed font-inter font-medium"
                          >
                            Sold Out
                          </button>
                        ) : (
                          <a
                            href={date.ticketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center space-x-2"
                          >
                            <span>Get Tickets</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <Calendar className="h-16 w-16 text-primary-gray mx-auto mb-4" />
              <h3 className="heading-secondary text-2xl mb-4">No Upcoming Shows</h3>
              <p className="text-primary-gray">
                Stay tuned for future tour announcements. Follow us on social media for updates.
              </p>
            </div>
          )}
        </div>

        {/* Tour Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-primary-dark rounded-metal p-8 max-w-2xl mx-auto">
            <h3 className="heading-secondary text-2xl mb-4">Never Miss a Show</h3>
            <p className="text-primary-gray mb-6">
              Be the first to know about new tour dates, exclusive presales, and VIP packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-metal flex-1"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Past Tours */}
        <div className="mt-16 text-center">
          <h3 className="heading-secondary text-2xl mb-8">Past Tours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-dark rounded-metal p-6">
              <img
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&h=200&fit=crop"
                alt="Darkness Rising Tour"
                className="w-full h-32 object-cover rounded-metal mb-4"
              />
              <h4 className="heading-secondary text-lg mb-2">Darkness Rising Tour</h4>
              <p className="text-primary-gray text-sm">2023 • 15 Cities • 25,000 Fans</p>
            </div>
            <div className="bg-primary-dark rounded-metal p-6">
              <img
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&h=200&fit=crop"
                alt="Blood & Steel Tour"
                className="w-full h-32 object-cover rounded-metal mb-4"
              />
              <h4 className="heading-secondary text-lg mb-2">Blood & Steel Tour</h4>
              <p className="text-primary-gray text-sm">2022 • 12 Cities • 18,000 Fans</p>
            </div>
            <div className="bg-primary-dark rounded-metal p-6">
              <img
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&h=200&fit=crop"
                alt="First Strike Tour"
                className="w-full h-32 object-cover rounded-metal mb-4"
              />
              <h4 className="heading-secondary text-lg mb-2">First Strike Tour</h4>
              <p className="text-primary-gray text-sm">2021 • 8 Cities • 10,000 Fans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};