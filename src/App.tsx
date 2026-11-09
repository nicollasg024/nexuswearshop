import React from 'react';
import { StoreProvider } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Lookbook } from './components/Lookbook';
import { Features } from './components/Features';
import { StoreInfo } from './components/StoreInfo';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ToastContainer } from './components/ToastContainer';

export default function App() {
  return (
    <StoreProvider>
      <Navbar />
      <main id="top">
        <Hero />
        <ProductGrid />
        <Lookbook />
        <Features />
        <StoreInfo />
      </main>
      <Footer />
      <CartDrawer />
      <ToastContainer />
    </StoreProvider>
  );
}
