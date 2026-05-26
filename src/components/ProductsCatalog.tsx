import React, { useState } from 'react';
import { PRODUCTS, FABRICS } from '../data';
import { Star, ShieldCheck, Heart, Eye, ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';

export default function ProductsCatalog() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bedsheet' | 'curtain' | 'pillow_cover'>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [addedToCartAlert, setAddedToCartAlert] = useState<string | null>(null);

  // Toggle favorite
  const toggleFav = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleAddToCart = (productName: string) => {
    setAddedToCartAlert(productName);
    setTimeout(() => {
      setAddedToCartAlert(null);
    }, 3000);
  };

  // Filter products
  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-24 bg-white relative overflow-hidden border-t border-b border-brand-border">
      
      {/* Absolute ambient light accent */}
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-brand-sage/10 rounded-full blur-3xl opacity-70 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Alert for Cart actions */}
        {addedToCartAlert && (
          <div className="fixed bottom-6 right-6 z-50 bg-brand-charcoal text-[#FAF9F6] rounded-xs px-5 py-4 border border-brand-charcoal shadow-xl flex items-center gap-3 animate-fade-in text-xs font-sans">
            <span className="bg-brand-green text-white w-5 h-5 rounded-full flex items-center justify-center font-bold font-mono">✓</span>
            <div className="text-left">
              <p className="font-bold">{addedToCartAlert}</p>
              <p className="text-[10px] text-brand-sage">Added to cart successfully • Ships in sustainable starch pack</p>
            </div>
          </div>
        )}

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <span className="inline-block px-3.5 py-1.5 bg-brand-sage text-brand-green text-[10px] font-bold uppercase tracking-widest rounded-xs">
              Artisan Catalog
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal tracking-tight mt-4">
              Explore Our Collection
            </h2>
            <p className="text-brand-muted text-sm sm:text-base mt-2">
              Luxurious household items ethically woven by hand. Tap &ldquo;AR Try-On&rdquo; to visualize any selection inside a bedroom or window drape template.
            </p>
          </div>

          {/* Catalog category selector tab */}
          <div className="flex flex-wrap gap-1.5 bg-brand-sand p-1.5 rounded-xs border border-brand-border">
            {(['all', 'bedsheet', 'curtain', 'pillow_cover'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xs text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-green text-white shadow-xs'
                    : 'text-brand-muted hover:text-brand-charcoal'
                }`}
              >
                {cat === 'all' ? 'All Items' : cat.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => {
            const isFavorite = favorites.includes(p.id);

            return (
              <div 
                key={p.id}
                id={`product-card-${p.id}`}
                className="group bg-white border border-brand-border rounded-xs overflow-hidden shadow-xs hover:border-brand-green/30 transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Media Container */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-brand-sand relative">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale transition-all duration-750 ease-out group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-white px-2.5 py-1 rounded-xs border border-brand-border text-[9px] font-mono uppercase tracking-widest font-bold text-brand-charcoal">
                    {p.category.replace('_', ' ')}
                  </div>

                  {/* Favorite Trigger */}
                  <button 
                    onClick={() => toggleFav(p.id)}
                    className="absolute top-4 right-4 bg-white hover:bg-brand-sand text-brand-charcoal hover:text-red-600 rounded-sm p-2 shadow-xs transition-colors border border-brand-border cursor-pointer"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-red-601 text-red-600' : ''}`} />
                  </button>

                  {/* Quick AR try-on badge overlay trigger */}
                  <div className="absolute inset-x-4 bottom-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href="#try-on"
                      className="w-full py-2.5 bg-brand-charcoal text-white rounded-xs text-[10px] font-bold font-sans uppercase tracking-widest flex items-center justify-center gap-1.5 shadow"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-brand-sage" /> Live Interactive Try-On
                    </a>
                  </div>

                </div>

                {/* Information Body */}
                <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-serif text-lg text-brand-charcoal font-bold">
                        {p.name}
                      </h3>
                      <div className="font-mono text-base font-bold text-brand-green">
                        ₹{p.price.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 fill-current ${i < Math.floor(p.rating) ? '' : 'text-gray-200'}`} />
                        ))}
                      </div>
                      <span className="text-[10px] text-brand-gray font-bold font-mono">{p.rating} / 5.0</span>
                    </div>

                    <p className="text-xs text-brand-muted leading-relaxed font-light line-clamp-3 font-sans">
                      {p.description}
                    </p>
                  </div>

                  {/* Key material traits lists */}
                  <div className="space-y-1.5 pt-1.5 border-t border-brand-border">
                    <div className="flex flex-wrap gap-1">
                      {p.fibers.map((f, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-brand-sand text-brand-green border border-brand-border text-[9px] font-bold uppercase tracking-wide rounded-xs">
                          {f} fiber
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Operational button triggers */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <a
                      href="#try-on"
                      className="py-3 px-3 bg-brand-sand hover:bg-[#E5E2D9] text-brand-charcoal text-[10px] uppercase font-bold tracking-widest rounded-xs text-center flex items-center justify-center gap-1 cursor-pointer border border-brand-border"
                    >
                      <Eye className="w-3.5 h-3.5 text-brand-green" /> AR Try-On
                    </a>
                    <button
                      onClick={() => handleAddToCart(p.name)}
                      className="py-3 px-3 bg-brand-green hover:bg-opacity-95 text-white text-[10px] uppercase font-bold tracking-widest rounded-xs text-center flex items-center justify-center gap-1 cursor-pointer transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-brand-sage" /> Buy Now
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Quality commitment notes */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 bg-brand-sand p-8 border border-brand-border rounded-xs">
          <div className="flex items-start gap-3.5 text-left">
            <div className="w-10 h-10 rounded-full bg-white text-brand-charcoal border border-brand-border flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
            </div>
            <div>
              <h4 className="font-serif text-sm text-brand-charcoal font-bold">100% GOTS & Craft Mark</h4>
              <p className="text-[11px] text-brand-muted leading-relaxed mt-1">Certified authentic Chhattisgarh handweaving processes with zero industrial chemicals.</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5 text-left border-y md:border-y-0 md:border-x border-brand-border py-4 md:py-0 md:px-6">
            <div className="w-10 h-10 rounded-full bg-white text-brand-charcoal border border-brand-border flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
            </div>
            <div>
              <h4 className="font-serif text-sm text-brand-charcoal font-bold">Zero Carbon Logistics</h4>
              <p className="text-[11px] text-brand-muted leading-relaxed mt-1">Packaged entirely in starch potato covers using natural flax twines that break down fully.</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5 text-left">
            <div className="w-10 h-10 rounded-full bg-white text-brand-charcoal border border-brand-border flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
            </div>
            <div>
              <h4 className="font-serif text-sm text-brand-charcoal font-bold">Warp & Weft Traceability</h4>
              <p className="text-[11px] text-brand-muted leading-relaxed mt-1">Each shipping box carries a custom postcard signed by the weavers indicating the specific Dhamtari or Raipur loom.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
