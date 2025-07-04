import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MusicSection } from './components/MusicSection';
import { TourSection } from './components/TourSection';
import { MerchandiseSection } from './components/MerchandiseSection';
import { ContactSection } from './components/ContactSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/ShoppingCart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      <div className="App">
        {/* Header */}
        <Header onCartClick={handleCartToggle} />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <MusicSection />
          <TourSection />
          <MerchandiseSection />
          <CommunitySection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Shopping Cart */}
        <ShoppingCart isOpen={isCartOpen} onClose={handleCartClose} />
      </div>
    </CartProvider>
  );
}

export default App;
