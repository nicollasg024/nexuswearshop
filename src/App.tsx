import React from 'react';
import { StoreProvider } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductGrid } from './components/ProductGrid';
import { Lookbook } from './components/Lookbook';
import { About } from './components/About';
import { StoreInfo } from './components/StoreInfo';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ToastContainer } from './components/ToastContainer';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StoreProvider>
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#E4161C] selection:text-white">
        {/* Navigation */}
        <Navbar onNavigate={handleNavigate} />

        {/* Main Content */}
        <main className="flex-1">
          <Hero onCtaClick={() => handleNavigate('products')} />
          <Features />
          <ProductGrid />
          <Lookbook />
          <About />
          <StoreInfo />
        </main>

        {/* Footer */}
        <Footer />

        {/* Shopping Bag Drawer & Notifications */}
        <CartDrawer />
        <ToastContainer />
      </div>
    </StoreProvider>
  );
}
