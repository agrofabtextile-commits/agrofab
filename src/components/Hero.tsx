import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Award, MapPin, Eye, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-[#FAF9F6] relative overflow-hidden flex items-center min-h-[90vh] border-b border-brand-border">
      {/* Absolute background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(#4a5d4e 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px'
      }} />
      <div className="absolute right-[-10%] top-[-10%] w-[50%] aspect-square rounded-full bg-brand-sage/40 blur-3xl z-0" />
      <div className="absolute left-[-5%] bottom-[-5%] w-[40%] aspect-square rounded-full bg-brand-sand/50 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (7 Columns on desktop) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3.5 py-1.5 bg-brand-sage text-brand-green text-[10px] font-bold uppercase tracking-widest rounded-xs"
            >
              Agro-Residue Textile Innovation
            </motion.div>

            {/* Title Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-serif text-4xl sm:text-6.5xl leading-tight text-brand-charcoal tracking-tight">
                Artisanal Luxury <br/>From <span className="italic font-light text-brand-green">Nature's Waste.</span>
              </h1>
              <p className="text-brand-muted font-sans text-base sm:text-lg leading-relaxed max-w-xl font-light">
                Handloomed by 1,500 master weavers across Raipur, Dhamtari, and Durg. We transform organic <span className="font-semibold text-brand-charcoal">banana stems</span>, <span className="font-semibold text-brand-charcoal">flax stalks</span>, and <span className="font-semibold text-brand-charcoal">bamboo</span> into world-class home linens and curtains.
              </p>
            </motion.div>

            {/* Raipur, Dhamtari, Durg Weaver Network Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 border-t border-b border-brand-border py-8 max-w-lg"
            >
              <div>
                <div className="text-3xl font-serif text-brand-green">1,500+</div>
                <div className="text-[10px] uppercase tracking-widest text-brand-gray mt-1">Master Weavers</div>
              </div>
              <div className="border-l border-r border-brand-border px-4">
                <div className="text-3xl font-serif text-brand-green">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-brand-gray mt-1">Agro-Residue</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-brand-green">0%</div>
                <div className="text-[10px] uppercase tracking-widest text-brand-gray mt-1">Synthetic Dyes</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#try-on"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-green hover:bg-opacity-95 text-white rounded-xs font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-brand-sage" /> Try-On Studio
              </a>
              <a 
                href="#catalog"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-brand-sand text-brand-charcoal border border-brand-border rounded-xs font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                Explore Catalog
              </a>
            </motion.div>

            {/* Location tags of weaver clusters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-2.5 items-center text-xs text-brand-muted font-medium"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider font-bold">Artisanal Nodes:</span>
              <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-xs border border-brand-border">
                <MapPin className="w-3.5 h-3.5 text-brand-green" /> Raipur
              </span>
              <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-xs border border-brand-border">
                <MapPin className="w-3.5 h-3.5 text-brand-green" /> Dhamtari
              </span>
              <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-xs border border-brand-border">
                <MapPin className="w-3.5 h-3.5 text-brand-green" /> Durg
              </span>
            </motion.div>

          </div>

          {/* Hero Visual Mockup (5 Columns on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer Decorative frame */}
              <div className="absolute inset-0 bg-brand-green/10 rounded-2xl blur-xl -z-10" />
              
              {/* Main Styled Card */}
              <div className="bg-white rounded-sm p-4 border border-brand-border shadow-md overflow-hidden relative">
                
                {/* Floating Weaver Story Badge */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-xs p-3.5 border border-brand-border shadow-xs z-10 flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
                    alt="Phoolbai"
                    className="w-10 h-10 object-cover rounded-full border border-brand-border"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <h5 className="text-xs font-bold text-brand-charcoal leading-tight">Phoolbai Sahu</h5>
                    <p className="text-[10px] text-brand-muted font-mono">Dhamtari Cluster</p>
                  </div>
                </div>

                {/* Main bedroom image showcasing banana fabrics */}
                <div className="aspect-[4/5] rounded-xs overflow-hidden bg-brand-sand relative group">
                  <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                    alt="Eco bedding loom"
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle translucent gradient on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent opacity-90" />

                  {/* Quote from Chhattisgarh */}
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <p className="font-serif italic text-sm sm:text-base mb-2 text-brand-sage">
                      &ldquo;Every thread is organic residue hand-spun, connecting Raipur farms directly with premium home design.&rdquo;
                    </p>
                    <div className="h-[1px] w-12 bg-brand-border mb-2" />
                    <span className="text-[10px] font-mono uppercase tracking-wider block text-brand-sage">
                      Agro-waste Banana Stem Fiber
                    </span>
                  </div>
                </div>

              </div>

              {/* Little overlapping card for Try On teaser */}
              <div className="absolute bottom-[-20px] right-[-10px] sm:right-[-20px] bg-brand-green text-[#FAF9F6] rounded-xs p-4 shadow-xl border border-brand-green/30 max-w-[180px] sm:max-w-[200px] hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer hidden sm:block">
                <a href="#try-on" className="block text-left space-y-1.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider font-bold text-brand-sageGlobal text-brand-sage">Interactive Studio</span>
                  <p className="text-xs font-semibold text-white leading-tight">Click to drape curtains on your photo instantly</p>
                  <div className="flex items-center gap-1 text-[10px] text-brand-sage font-mono">
                    <span>Try On Studio</span> →
                  </div>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
