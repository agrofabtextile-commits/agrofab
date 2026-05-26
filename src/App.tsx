/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProcessTimeline from './components/ProcessTimeline';
import StorySection from './components/StorySection';
import TryOnVisualizer from './components/TryOnVisualizer';
import ProductsCatalog from './components/ProductsCatalog';
import Footer from './components/Footer';
import { Leaf, Award, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-brand-charcoal font-sans antialiased selection:bg-brand-sage selection:text-brand-green scroll-smooth">
      
      {/* Sustainable Announcement Bar */}
      <div className="bg-brand-charcoal text-[#faf9f6]/95 py-2.5 px-4 text-center text-[10px] sm:text-xs font-mono tracking-wider font-semibold flex items-center justify-center gap-2 border-b border-brand-border/20 z-50 relative">
        <Sparkles className="w-3.5 h-3.5 text-brand-sage animate-pulse" />
        <span>PROUDLY EMPOWERING 1,500+ WEAVERS IN RAIPUR, DHAMTARI & DURG • FREE CARBON-NEUTRAL DELIVERY INDIA-WIDE</span>
        <span className="hidden md:inline bg-brand-green text-brand-sand px-2 py-0.5 rounded-xs text-[9px] uppercase font-bold tracking-widest font-mono">
          0% Chemicals
        </span>
      </div>

      {/* Primary Navigation */}
      <Navbar />

      {/* Main Flow Sections */}
      <main className="relative">
        
        {/* Hero Banner Section */}
        <Hero />

        {/* Dynamic Materials Circular Timeline Section */}
        <ProcessTimeline />

        {/* Weaver Biographies & District Stories */}
        <StorySection />

        {/* Augmented Drapery Real-time try-on */}
        <TryOnVisualizer />

        {/* Complete Organic Catalog */}
        <ProductsCatalog />

      </main>

      {/* Footer Details */}
      <Footer />

    </div>
  );
}

