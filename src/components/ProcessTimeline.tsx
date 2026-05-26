import React from 'react';
import { Leaf, Sprout, Layers, Sparkles } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      title: "Agro-Residue Sourcing",
      subtitle: "Raipur, Dhamtari & Durg",
      description: "Instead of burning agricultural residue, we procure stalks of flax fibers, bamboo clippings, and discarded pseudo-stems of banana plants from Chhattisgarhi farmers, transforming liabilities into circular revenues.",
      icon: <Sprout className="w-5 h-5 text-brand-green" />
    },
    {
      title: "Organic Extract & Carding",
      subtitle: "De-gumming & Softening",
      description: "Pseudo-stems are scraped and cleaned enzymatically by a local rural women's self-help coop to fiber threads without heavy chemical solvents, followed by carding to produce long silky weavable threads.",
      icon: <Leaf className="w-5 h-5 text-brand-green" />
    },
    {
      title: "The Heritage Looming",
      subtitle: "Chhattisgarh Weavers",
      description: "Our 1,500 expert weavers load the fibers onto traditional pit looms and frame looms to produce exquisite textured fabrics, introducing traditional motifs and herbal dyes.",
      icon: <Layers className="w-5 h-5 text-brand-green" />
    },
    {
      title: "Circular Home Comfort",
      subtitle: "Safe & Biodegradable",
      description: "The resulting bedsheets, pillow covers, and curtain panels are packed in potato-starch materials, presenting a luxurious feel that decomposes naturally back into soil cycles.",
      icon: <Sparkles className="w-5 h-5 text-brand-green" />
    }
  ];

  return (
    <section id="fibers" className="py-24 bg-[#F1F0EC]/40 border-t border-b border-brand-border relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-sage/20 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 bg-brand-sage text-brand-green text-[10px] font-bold uppercase tracking-widest rounded-xs">
            Circular Production
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-charcoal tracking-tight mt-4">
            From Agro-Residue To Home Luxury
          </h2>
          <p className="text-brand-muted text-sm sm:text-base mt-2">
            Each thread traces a conscious journey from rural fields in Chhattisgarh directly to your windows and beds.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative items-start">
          
          {steps.map((s, idx) => (
            <div key={idx} className="relative space-y-4 text-left p-6 bg-white border border-brand-border rounded-xs shadow-xs hover:border-brand-green/30 transition-all">
              
              {/* Connector line for large screens */}
              {idx < 3 && (
                <div className="hidden md:block absolute top-[44px] right-[-20px] w-6 h-[1px] border-t border-dashed border-brand-border z-10" />
              )}

              {/* Icon Circle */}
              <div className="w-10 h-10 rounded-xs bg-brand-sage border border-brand-border flex items-center justify-center">
                {s.icon}
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-brand-gray uppercase">Phase 0{idx + 1}</span>
                <h3 className="font-serif text-lg text-brand-charcoal font-bold leading-tight">{s.title}</h3>
                <p className="text-[11px] font-semibold text-brand-green uppercase tracking-wide">{s.subtitle}</p>
              </div>

              <p className="text-xs text-brand-muted leading-relaxed font-light">
                {s.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
