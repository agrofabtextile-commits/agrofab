import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WEAVERS, FABRICS } from '../data';
import { MapPin, Award, BookOpen, Pocket, ShoppingBag, Eye, Users, ChevronRight } from 'lucide-react';

export default function StorySection() {
  const [activeDistrict, setActiveDistrict] = useState<'All' | 'Raipur' | 'Dhamtari' | 'Durg'>('All');
  const [selectedWeaverId, setSelectedWeaverId] = useState<string>('w-1');

  // Filter weavers
  const filteredWeavers = activeDistrict === 'All' 
    ? WEAVERS 
    : WEAVERS.filter(w => w.district === activeDistrict);

  const selectedWeaver = WEAVERS.find(w => w.id === selectedWeaverId) || WEAVERS[0];

  return (
    <section id="weavers" className="py-24 bg-white relative overflow-hidden border-b border-brand-border">
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-brand-sage/20 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <span className="inline-block px-3.5 py-1.5 bg-brand-sage text-brand-green text-[10px] font-bold uppercase tracking-widest rounded-xs">
              Rural Revitalization
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal tracking-tight leading-tight mt-4">
              Weaving Resilience: Stories Behind the Loom
            </h2>
            <p className="text-brand-muted text-sm sm:text-base mt-2">
              Our network comprises over 1,500 families in Chhattisgarh converting agricultural waste into haute home textiles. Meet your craftspeople from Raipur, Dhamtari, and Durg.
            </p>
          </div>

          {/* District Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-brand-sand p-1.5 rounded-xs border border-brand-border">
            {(['All', 'Raipur', 'Dhamtari', 'Durg'] as const).map((dist) => (
              <button
                key={dist}
                onClick={() => {
                  setActiveDistrict(dist);
                  // Auto-select first weaver in the filter for experience symmetry
                  const matching = dist === 'All' ? WEAVERS : WEAVERS.filter(w => w.district === dist);
                  if (matching.length > 0) setSelectedWeaverId(matching[0].id);
                }}
                className={`px-4 py-2 rounded-xs text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeDistrict === dist
                    ? 'bg-brand-green text-white shadow-xs'
                    : 'text-brand-muted hover:text-brand-charcoal'
                }`}
              >
                {dist === 'All' ? 'All Districts' : dist}
              </button>
            ))}
          </div>
        </div>

        {/* Master Artisan Grid: Main Detail (Left) and Selection (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Complete Weaver Biography Card (8 Columns) */}
          <div className="lg:col-span-8 bg-[#FAF9F6] rounded-xs p-6 sm:p-8 border border-brand-border shadow-xs flex flex-col justify-between">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Profile Photo */}
              <div className="md:col-span-4 relative group aspect-square md:aspect-auto md:h-64 rounded-xs overflow-hidden bg-brand-sand border border-brand-border">
                <img
                  src={selectedWeaver.imageUrl}
                  alt={selectedWeaver.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Biography Details */}
              <div className="md:col-span-8 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 bg-brand-sage text-brand-green font-mono text-[10px] uppercase font-bold rounded-xs">
                    {selectedWeaver.district} Cluster
                  </span>
                  <span className="flex items-center gap-1 text-xs text-brand-muted">
                    <MapPin className="w-3.5 h-3.5 text-brand-green" /> {selectedWeaver.location}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal tracking-tight font-bold">
                  {selectedWeaver.name}
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                  {selectedWeaver.story}
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-brand-border pt-4 text-xs font-sans">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-brand-gray block tracking-widest font-semibold">Specialty technique</span>
                    <span className="font-medium text-brand-charcoal mt-1 block">{selectedWeaver.specialty}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-brand-gray block tracking-widest font-semibold">Weaving Experience</span>
                    <span className="font-medium text-brand-charcoal mt-1 block">{selectedWeaver.yearsOfExperience} Years</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Micro banner detailing transparent wages */}
            <div className="mt-8 border-t border-brand-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-brand-sand/40 -mx-6 sm:-mx-8 px-6 sm:px-8 p-4 rounded-b-xs">
              <div className="flex items-center gap-2.5">
                <Users className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-xs text-brand-muted text-left">
                  Every product sale returns <strong className="text-brand-charcoal">45% transparent wages</strong> directly back to the weaving community workshop.
                </span>
              </div>
              <a 
                href="#catalog"
                className="text-xs font-bold text-brand-charcoal hover:text-brand-green flex items-center gap-1 group font-sans uppercase shrink-0 tracking-widest"
              >
                Explore Loom Crafts <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>

          {/* RIGHT: Quick-Selection Side-Dock List (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            <div className="space-y-3">
              <p className="text-[10px] font-mono font-bold text-brand-gray uppercase tracking-widest text-left pl-1">
                Selected Cluster Masters
              </p>
              
              {filteredWeavers.length > 0 ? (
                filteredWeavers.map((weaver) => {
                  const isSelected = selectedWeaverId === weaver.id;
                  return (
                    <button
                      key={weaver.id}
                      onClick={() => setSelectedWeaverId(weaver.id)}
                      className={`w-full text-left p-4 rounded-xs border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer relative ${
                        isSelected
                          ? 'border-brand-green bg-brand-green text-white shadow-xs'
                          : 'border-brand-border bg-white text-brand-charcoal hover:bg-brand-sand'
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <img
                          src={weaver.imageUrl}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover shrink-0 border border-brand-border"
                          referrerPolicy="no-referrer"
                        />
                        <div className="truncate text-left space-y-0.5">
                          <p className={`text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-brand-charcoal'}`}>
                            {weaver.name}
                          </p>
                          <p className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-brand-sage' : 'text-brand-muted'}`}>
                            {weaver.district} Cluster
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-white' : 'text-brand-gray'}`} />
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-10 bg-brand-sand rounded-xs text-brand-gray text-xs">
                  No weavers found in this district.
                </div>
              )}
            </div>

            {/* Dist district facts box */}
            <div className="bg-brand-sand border border-brand-border rounded-xs p-5 text-left">
              <h5 className="font-serif text-sm text-brand-charcoal font-semibold mb-2">Why Raipur, Dhamtari & Durg?</h5>
              <p className="text-[11px] text-brand-muted leading-relaxed">
                Chhattisgarh’s central plains host expansive banana plantations and flax fields. By harvesting unused crop waste stems directly from farming fields, we create a circular carbon cycle while preserving rich Chhattisgarhi handloom lineage.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
