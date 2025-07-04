import React from 'react';
import { ExternalLink, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    band: [
      { name: 'About', href: '#about' },
      { name: 'Music', href: '#music' },
      { name: 'Tour Dates', href: '#tour' },
      { name: 'Press Kit', href: '#' },
    ],
    shop: [
      { name: 'Merchandise', href: '#merch' },
      { name: 'Music', href: '#music' },
      { name: 'Gift Cards', href: '#' },
      { name: 'Size Guide', href: '#' },
    ],
    support: [
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Refund Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/crimsonthrone', icon: '📷' },
    { name: 'Facebook', url: 'https://facebook.com/crimsonthrone', icon: '📘' },
    { name: 'Twitter', url: 'https://twitter.com/crimsonthrone', icon: '🐦' },
    { name: 'YouTube', url: 'https://youtube.com/crimsonthrone', icon: '📺' },
    { name: 'Spotify', url: 'https://open.spotify.com/artist/crimsonthrone', icon: '🎵' },
    { name: 'Bandcamp', url: 'https://crimsonthrone.bandcamp.com', icon: '🎼' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-primary-dark border-t border-gray-700">
      <div className="container-metal">
        {/* Main Footer Content */}
        <div className="py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Band Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-10 w-10 bg-primary-accent rounded-metal flex items-center justify-center">
                  <span className="text-primary-light font-bebas text-xl">CT</span>
                </div>
                <span className="heading-primary text-3xl">Crimson Throne</span>
              </div>
              
              <p className="text-primary-gray mb-6 max-w-md leading-relaxed">
                Forged in the fires of underground metal scenes, we bring you raw power and dark artistry. 
                Join our journey through darkness and discover the true meaning of metal.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-primary-gray">
                  <Mail className="h-4 w-4 text-primary-accent" />
                  <a href="mailto:contact@crimsonthrone.com" className="hover:text-primary-light transition-colors">
                    contact@crimsonthrone.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-primary-gray">
                  <Phone className="h-4 w-4 text-primary-accent" />
                  <a href="tel:+1234567890" className="hover:text-primary-light transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-primary-gray">
                  <MapPin className="h-4 w-4 text-primary-accent" />
                  <span>Chicago, IL</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="heading-secondary text-lg mb-6">Quick Links</h3>
              <div className="space-y-3">
                {footerLinks.band.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-primary-gray hover:text-primary-accent transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Shop */}
            <div>
              <h3 className="heading-secondary text-lg mb-6">Shop</h3>
              <div className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-primary-gray hover:text-primary-accent transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="max-w-2xl">
              <h3 className="heading-secondary text-2xl mb-4">Stay in the Loop</h3>
              <p className="text-primary-gray mb-6">
                Get exclusive updates, early access to tickets, and behind-the-scenes content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input-metal flex-1"
                />
                <button className="btn-primary px-8">
                  Subscribe
                </button>
              </div>
              <p className="text-primary-gray text-sm mt-3">
                Join 15,000+ fans who never miss a beat. No spam, just metal.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="py-8 px-4 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-gray font-inter font-medium">Follow Us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-neutral rounded-metal flex items-center justify-center hover:bg-primary-accent transition-colors group"
                    title={social.name}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-gray hover:text-primary-accent transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-primary-gray text-sm flex items-center justify-center space-x-1">
              <span>© {currentYear} Crimson Throne. All rights reserved.</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-primary-accent fill-current" />
                <span>for metalheads everywhere</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};