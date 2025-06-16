import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LoyaltySection from '../components/LoyaltySection';
import About from '../components/About';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LoyaltySection />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
