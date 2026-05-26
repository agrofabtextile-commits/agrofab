import React from 'react';
import { Eye, Leaf, Map, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo with Earth leaf design */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center transition-all duration-300">
              <span className="text-white font-serif font-bold text-lg select-none">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-brand-charcoal tracking-tight leading-none uppercase">AGROFAB</span>
              <span className="text-[10px] font-mono text-brand-muted uppercase tracking-widest font-semibold">Chhattisgarh Handlooms</span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-brand-muted uppercase tracking-widest font-sans">
            <a href="#fibers" className="hover:text-brand-green transition-colors">Our Fibers</a>
            <a href="#weavers" className="hover:text-brand-green transition-colors">Artisan Stories</a>
            <a href="#try-on" className="hover:text-brand-green transition-colors flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-brand-green" /> Try-On Studio
            </a>
            <a href="#catalog" className="hover:text-brand-green transition-colors">Catalog</a>
          </div>

          {/* Quick CTA - Try On trigger button */}
          <div className="flex items-center gap-3">
            <a 
              href="#try-on" 
              className="flex items-center gap-1.5 px-6 py-2.5 bg-brand-green hover:bg-opacity-90 text-white rounded-xs text-xs font-bold font-sans uppercase tracking-widest transition-all duration-305 pointer-events-auto group"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-sage group-hover:rotate-12 transition-transform" /> 
              Try-On Studio
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
