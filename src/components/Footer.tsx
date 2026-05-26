import React from 'react';
import { Leaf, Map, Award, HelpCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-[#FAF9F6] border-t border-brand-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-brand-border/20 pb-12">
          
          {/* Column 1: Brand (5 shares on desktop) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="bg-[#FAF9F6] text-brand-charcoal p-2 rounded-xs border border-brand-border">
                <Leaf className="w-5 h-5 text-brand-green" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white tracking-tight leading-none uppercase">Sutra Sustainable</span>
                <span className="text-[9px] font-mono text-brand-sage uppercase tracking-widest font-bold">Chhattisgarh Handlooms</span>
              </div>
            </div>
            
            <p className="text-xs text-[#FAF9F6]/80 leading-relaxed font-light max-w-sm font-sans">
              We empower over 1500 master weavers across Raipur, Dhamtari, and Durg districts of Chhattisgarh, transforming agricultural waste fiber streams into world-class bio-textile home comforts.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[9px] font-mono uppercase bg-brand-charcoal text-brand-sage border border-brand-border/30 px-2.5 py-1 rounded-xs">100% GOTS Cotton</span>
              <span className="text-[9px] font-mono uppercase bg-brand-charcoal text-brand-sage border border-brand-border/30 px-2.5 py-1 rounded-xs">Craftmark Authentic</span>
              <span className="text-[9px] font-mono uppercase bg-brand-charcoal text-brand-sage border border-brand-border/30 px-2.5 py-1 rounded-xs">Zero-Waste Standard</span>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-mono text-[10px] font-bold text-brand-sage uppercase tracking-widest">Navigation</h4>
            <div className="flex flex-col gap-2.5 text-xs text-brand-sand font-sans">
              <a href="#fibers" className="hover:text-white transition-colors">Agro-residues Process</a>
              <a href="#weavers" className="hover:text-white transition-colors">Weaver Profiles</a>
              <a href="#try-on" className="hover:text-white transition-colors">AR Digital Studio</a>
              <a href="#catalog" className="hover:text-white transition-colors">Product Catalog</a>
            </div>
          </div>

          {/* Column 3: Contact & Raipur location */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-mono text-[10px] font-bold text-brand-sage uppercase tracking-widest">Heritage Central Office</h4>
            <p className="text-xs text-brand-sand leading-relaxed font-light font-sans">
              Weaver Development Hub<br />
              Civil Lines, Raipur District<br />
              Chhattisgarh, 492001, India<br />
              <span className="text-white font-medium font-mono block mt-1">support@sutrasustainable.org</span>
            </p>
            <div className="text-[10px] font-mono text-brand-sage border-t border-brand-border/20 pt-2.5">
              Empowering Raipur, Dhamtari, and Durg rural ecosystems.
            </div>
          </div>

        </div>

        {/* Copy-right footer bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-brand-sage">
          <p>© {new Date().getFullYear()} Sutra Sustainable Chhattisgarh Handlooms. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Charter</a>
            <a href="#" className="hover:text-white">Weaver Wages Pledge</a>
            <a href="#" className="hover:text-white">CO₂ Calculation Methodology</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
