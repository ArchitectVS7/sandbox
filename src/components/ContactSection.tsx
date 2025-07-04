import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../types';
import { mockApi } from '../utils/mockData';
import { LoadingSpinner } from './LoadingSpinner';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    inquiryType: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'booking', label: 'Booking & Shows' },
    { value: 'press', label: 'Press & Media' },
    { value: 'merchandise', label: 'Merchandise' },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await mockApi.submitContactForm(formData);
      if (response.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          inquiryType: 'general',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-primary-neutral">
      <div className="container-metal">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-primary text-5xl md:text-6xl mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-8" />
          <p className="text-xl text-primary-gray max-w-3xl mx-auto">
            Ready to join the darkness? Have questions? Want to book us for your venue? 
            We're here to listen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="heading-secondary text-2xl mb-8">Send us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-700 rounded-metal flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <p className="text-green-400">Your message has been sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-700 rounded-metal flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <p className="text-red-400">Failed to send message. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary-light font-inter font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`input-metal w-full ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-primary-light font-inter font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`input-metal w-full ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-primary-light font-inter font-medium mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                  className="input-metal w-full"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-primary-light font-inter font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={6}
                  className={`input-metal w-full ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Tell us what's on your mind..."
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="heading-secondary text-2xl mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-accent/20 rounded-metal flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="heading-secondary text-lg mb-2">Email Us</h4>
                  <p className="text-primary-gray">
                    <a href="mailto:contact@crimsonthrone.com" className="hover:text-primary-accent transition-colors">
                      contact@crimsonthrone.com
                    </a>
                  </p>
                  <p className="text-primary-gray">
                    <a href="mailto:booking@crimsonthrone.com" className="hover:text-primary-accent transition-colors">
                      booking@crimsonthrone.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-accent/20 rounded-metal flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="heading-secondary text-lg mb-2">Call Us</h4>
                  <p className="text-primary-gray">
                    <a href="tel:+1234567890" className="hover:text-primary-accent transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </p>
                  <p className="text-primary-gray text-sm">
                    Monday - Friday, 10:00 AM - 6:00 PM CST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-accent/20 rounded-metal flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-accent" />
                </div>
                <div>
                  <h4 className="heading-secondary text-lg mb-2">Visit Us</h4>
                  <p className="text-primary-gray">
                    123 Metal Street<br />
                    Chicago, IL 60601<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-12 p-6 bg-primary-dark rounded-metal">
              <h4 className="heading-secondary text-lg mb-4">Response Time</h4>
              <div className="space-y-2 text-primary-gray">
                <p>• <span className="text-primary-accent">General Inquiries:</span> 24-48 hours</p>
                <p>• <span className="text-primary-accent">Booking Requests:</span> 2-5 business days</p>
                <p>• <span className="text-primary-accent">Press & Media:</span> 1-2 business days</p>
                <p>• <span className="text-primary-accent">Merchandise:</span> 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};