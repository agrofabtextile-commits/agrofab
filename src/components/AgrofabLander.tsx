import React, { useState } from "react";
import { 
  Sprout, 
  Droplet, 
  Heart, 
  Users, 
  Home, 
  Shirt, 
  Sparkles, 
  Layers, 
  Globe, 
  UserCheck, 
  ChevronRight, 
  ExternalLink,
  ShieldAlert,
  Gauge,
  Flame,
  ArrowRight,
  ChevronLeft,
  Award,
  Newspaper,
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  MessageSquare,
  Quote
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MaterialItem, ApplicationItem } from "../types";

const MATERIALS_DATA: MaterialItem[] = [
  {
    id: "banana",
    name: "Banana Fiber & Yarn",
    source: "Banana Tree Stems (Agricultural Residue)",
    description: "Extracted post-harvest from agricultural trunks. Our chemical-free mechanical process creates ultra-strong, breathable fiber resembling fine linen, including specialized cottonized styles for incredible soft apparel.",
    properties: ["95% Water Saving vs Cotton", "No Regenerated Chemical Acids", "Extreme Tensile Durability", "Inherent Moisture-Wicking"],
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "linen-flax",
    name: "Linen & Flax Fiber",
    source: "Flax Stalk Bundles",
    description: "Harvested from leftover stalks using optimized retting that minimizes runoff. We spin non-regenerated organic flax, retaining the pristine native crystalline form of pure natural linen filaments.",
    properties: ["zero artificial chemicals", "biodegradable within 60 days", "highly heat-regulating", "breathable texture"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rice-straw",
    name: "Rice Straw Textiles",
    source: "Paddy Crop Leftovers",
    description: "Transforms agricultural residue that is traditionally burned (causing massive regional smog) into robust, heavy-weave utilitarian fabrics. Perfect for durable home furnishings and texturized accents.",
    properties: ["Combats Crop Burning", "100% Organic Origin", "Rich Textured Drape", "Low Ecological Footprint"],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80"
  }
];

const APPLICATIONS_DATA: ApplicationItem[] = [
  {
    id: "furnishings",
    title: "Home Furnishings",
    description: "Sturdy, textured weaves perfect for premium organic curtains, durable upholstery, table runners, and elegant rustic pillow cushions.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=650&q=80"
  },
  {
    id: "apparel",
    title: "Eco-Conscious Apparel",
    description: "Breathable and summer-cool wear crafted using our patent-pending cottonized banana fibers and lightweight linen blends.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=650&q=80"
  },
  {
    id: "suiting",
    title: "Shirting & Suiting",
    description: "High-density tailored handloom fabrics offering clean architectural silhouettes, premium feel, and exquisite natural drape.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=650&q=80"
  }
];

const AWARDS_DATA = [
  {
    image: "https://majorproject-theta.vercel.app/images/awards/amritam-award-iit-bhilai.png",
    title: "Amritam Award by the Sustainable India Foundation",
    subtitle: "at IIT-Bhilai, 23 Aug 2024",
    accent: "bg-emerald-500"
  },
  {
    image: "https://majorproject-theta.vercel.app/images/awards/recognition-by-cg-governer.png",
    title: "Recognition by the Hon. Governor of Chhattisgarh",
    subtitle: "18 Sep 2024",
    accent: "bg-amber-500"
  },
  {
    image: "https://majorproject-theta.vercel.app/images/awards/shark-tank-event.png",
    title: "🏆 First Position — Shark Tank Pitch Event",
    subtitle: "i-Hub CG + YI (CII), September 2, 2025",
    accent: "bg-indigo-500"
  },
  {
    image: "https://majorproject-theta.vercel.app/images/awards/techstart-ideathon-event.png",
    title: "🏆 First Position — CG Techstart Ideathon",
    subtitle: "Dept. of Industry, Govt. of CG, November 4, 2025",
    accent: "bg-orange-500"
  },
  {
    image: "https://majorproject-theta.vercel.app/images/awards/tribal-business-conclave.png",
    title: "Tribal Business Conclave 2025",
    subtitle: "Yashobhumi, New Delhi, 12 November 2025",
    accent: "bg-teal-500"
  },
  {
    image: "https://majorproject-theta.vercel.app/images/awards/convergence-india-expo-1.png",
    title: "Convergence India Expo 2026",
    subtitle: "Bharatmandapam, New Delhi, 23–25 March 2026",
    accent: "bg-red-500"
  }
];

const MEDIA_DATA = [
  {
    image: "https://majorproject-theta.vercel.app/images/newspaper/2.png",
    source: "Regional Press",
    date: "Nov 2025",
    title: "Chhattisgarh Tech Start 2025 opens new gateways of innovation",
    description: "Featured coverage of AgroFab securing 1st position at the Chhattisgarh TechStart event, attended by Chief Minister and Chief Secretary."
  },
  {
    image: "https://majorproject-theta.vercel.app/images/newspaper/1.png",
    source: "City Bhaskar, Raipur",
    date: "2 Nov 2025",
    title: "18 लाख की नौकरी छोड़ी, अब शुरू करेंगे स्टार्टअप",
    description: "Featured story on leaving an ₹18 lakh job to build AgroFab — converting agricultural waste into premium textile fibres."
  }
];

export default function AgrofabLander() {
  const [activeMaterial, setActiveMaterial] = useState<string>("banana");
  const [compareMetric, setCompareMetric] = useState<"water" | "chemicals" | "biodegradability" | "artisan">("water");
  const [activeAwardIndex, setActiveAwardIndex] = useState<number>(0);
  
  // Contact Form States
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactOrg, setContactOrg] = useState("");
  const [contactSubject, setContactSubject] = useState("Samples & Swatches");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      setContactError("Please fill in all required fields (Name, Email, Message).");
      return;
    }
    setContactError("");
    setContactSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSubmitted(true);
    }, 1200);
  };

  const handleNextAward = () => {
    setActiveAwardIndex((prev) => (prev + 1) % AWARDS_DATA.length);
  };

  const handlePrevAward = () => {
    setActiveAwardIndex((prev) => (prev - 1 + AWARDS_DATA.length) % AWARDS_DATA.length);
  };

  const currentMaterial = MATERIALS_DATA.find(m => m.id === activeMaterial) || MATERIALS_DATA[0];

  return (
    <div className="bg-brand-beige text-brand-dark font-sans selection:bg-brand-olive selection:text-brand-beige">
      
      {/* 1. Header/Navigation */}
      <nav className="border-b border-brand-olive border-opacity-10 py-6 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-brand-beige bg-opacity-95 backdrop-blur z-20">
        <div className="flex items-center gap-2">
          <Sprout className="w-6 h-6 text-brand-forest" />
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-forest">Agrofab</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-forest text-opacity-80">
          <a href="#materials" className="hover:text-brand-clay transition-all">Sourced Materials</a>
          <a href="#impact" className="hover:text-brand-clay transition-all">Our 80% Women Unit</a>
          <a href="#applications" className="hover:text-brand-clay transition-all">Applications</a>
          <a href="#awards" className="hover:text-brand-clay transition-all">Awards & Press</a>
          <a href="#compare" className="hover:text-brand-clay transition-all">Impact Analyzer</a>
          <a href="#contact" className="hover:text-brand-clay transition-all">Contact Us</a>
        </div>

        <button 
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-brand-olive hover:bg-brand-forest hover:text-brand-beige text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer"
        >
          <span>Request Swatches</span>
        </button>
      </nav>

      {/* 2. Stunning Hero Banner Section */}
      <header className="relative bg-gradient-to-b from-brand-beige to-white pt-20 pb-28 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tagline Badge */}
            <div className="flex flex-col gap-1 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-forest block">Earth-to-Fabric</span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-brand-clay font-mono block">100% Circular Agricultural Waste Fabric</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-brand-dark leading-[0.95] mb-6 font-light">
              Residual <br />
              <span className="text-brand-forest italic font-normal">Grace & Renewal.</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-forest text-opacity-85 font-sans leading-relaxed mb-8 max-w-2xl">
              We extract and refine post-harvest banana stems, rice straw, and flax stalks into lightweight, high-performance, low-chemical textiles. Woven by <strong className="text-brand-forest">3,000 skilled handloom artisans</strong>, under an integrated unit powered by an <strong className="text-brand-forest">80% women-led workforce</strong>. A cycle of renewal from soil to suit.
            </p>

            {/* CTA Elements */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#materials" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-forest text-brand-beige font-semibold text-sm hover:bg-brand-moss transition-all shadow-lg shadow-brand-forest/10 hover:shadow-brand-forest/25"
              >
                <span>Explore Sourced Fibers</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a 
                href="#compare" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-brand-forest border border-brand-olive border-opacity-35 font-semibold text-sm hover:bg-brand-beige hover:border-brand-forest transition-all"
              >
                <span>Impact Analyzer</span>
                <ArrowRight className="w-4 h-4 text-brand-clay" />
              </a>
            </div>

            {/* Quick Micro stat banner */}
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-brand-olive border-opacity-10 w-full">
              <div className="flex items-end gap-3">
                <span className="text-5xl font-serif leading-none text-brand-forest">80%</span>
                <span className="text-[10px] uppercase font-sans tracking-wider mb-1 leading-tight text-brand-dark text-opacity-80">Women Workforce<br />Empowered</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-serif leading-none text-brand-forest">3k+</span>
                <span className="text-[10px] uppercase font-sans tracking-wider mb-1 leading-tight text-brand-dark text-opacity-80">Artisans In<br />Chhattisgarh</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-serif leading-none text-brand-forest">-95%</span>
                <span className="text-[10px] uppercase font-sans tracking-wider mb-1 leading-tight text-brand-dark text-opacity-80">Water Required<br />Saved vs Cotton</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive visual stack placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand-olive rounded-3xl rotate-3 opacity-10 blur-xl scale-95" />
            
            {/* Multi-layered visual display of sustainable yarns */}
            <div className="relative bg-white p-4 rounded-3xl border border-brand-olive border-opacity-15 shadow-xl">
              <img 
                src="src/WhatsApp Image 2026-06-06 at 9.26.28 PM.jpeg" 
                alt="Artisan hands with natural flax threads and hand-woven linen textiles on a rustic table" 
                referrerPolicy="no-referrer"
                className="w-full h-[380px] object-cover rounded-2xl"
              />
              
              {/* Dynamic Overlay card */}
              <div className="absolute bottom-10 -left-6 bg-brand-dark text-brand-beige p-5 rounded-2xl border border-brand-moss max-w-[260px] shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">Region Origin</span>
                </div>
                <h4 className="font-serif font-semibold text-md text-brand-beige">Chhattisgarh Network</h4>
                <p className="text-xs text-brand-beige text-opacity-70 mt-1 leading-relaxed">
                  Supporting traditional handloom craft lineages using zero-waste yarns.
                </p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 3. Sourced Materials Section */}
      <section id="materials" className="py-24 px-6 md:px-12 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-clay">Harvest Residue Redefined</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-brand-dark mt-2">
              From Agricultural Byproducts to Pure Fiber Yarns
            </h3>
            <p className="text-sm text-brand-forest text-opacity-75 mt-4">
              We intercept raw materials that would otherwise decompose or be burned, transforming them in our integrated zero-waste units into clean fabric.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual selector tabs */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {MATERIALS_DATA.map((mat) => {
                const isActive = activeMaterial === mat.id;
                return (
                  <button
                    key={mat.id}
                    onClick={() => setActiveMaterial(mat.id)}
                    className={`p-6 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between ${
                      isActive 
                        ? "bg-brand-beige border-brand-forest shadow-md"
                        : "bg-white border-brand-olive border-opacity-15 hover:border-brand-olive"
                    }`}
                  >
                    <div>
                      <h4 className="font-serif font-bold text-md text-brand-dark">{mat.name}</h4>
                      <span className="text-xs text-brand-forest text-opacity-60 block mt-1">{mat.source}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-brand-forest transition-transform ${isActive ? 'translate-x-1' : 'opacity-40'}`} />
                  </button>
                );
              })}
            </div>

            {/* Active Material focus display */}
            <div className="lg:col-span-8 bg-brand-beige bg-opacity-45 border border-brand-olive border-opacity-10 p-6 md:p-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Info description */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-brand-forest bg-opacity-5 text-brand-forest text-[11px] font-mono font-medium rounded-full mb-4">
                    <Layers className="w-3.5 h-3.5 text-brand-clay" />
                    <span>Non-Regenerated Natural Yarns</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark leading-tight">
                    {currentMaterial.name}
                  </h3>
                  <p className="text-xs text-brand-clay font-mono mt-1 italic font-medium">{currentMaterial.source}</p>

                  <p className="text-sm text-brand-dark text-opacity-80 mt-4 leading-relaxed font-sans">
                    {currentMaterial.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-brand-olive border-opacity-15 pt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-forest mb-3">Material Characteristics</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentMaterial.properties.map((prop, index) => (
                      <div key={index} className="flex items-center gap-1.5 text-xs text-brand-dark text-opacity-85 font-mono">
                        <DroplepHalo />
                        <span>{prop}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Styled material imagery */}
              <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-full min-h-[250px] shadow-lg border border-brand-olive border-opacity-10">
                <img 
                  src={currentMaterial.image} 
                  alt={currentMaterial.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 p-3 bg-white/90 backdrop-blur rounded-xl border border-brand-olive border-opacity-10 text-[10px] font-mono text-brand-forest tracking-wide">
                  Ethically Sourced Raw Stock
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Social Impact Showcase Section (80% Women Workforce & Weaving Heritage) */}
      <section id="impact" className="py-24 bg-brand-forest text-brand-beige overflow-hidden relative">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-moss opacity-20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Mosaic Panel */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden border border-brand-moss shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80" 
                  alt="Rural female artisan spinners" 
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-brand-dark bg-opacity-20 blend-overlay" />
              </div>

              {/* Suspended card */}
              <div className="absolute -bottom-6 -right-6 bg-brand-beige text-brand-dark p-6 rounded-2xl border border-brand-olive max-w-sm hidden sm:block shadow-2xl">
                <div className="flex items-center gap-2 text-brand-clay mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-[10px] uppercase font-mono tracking-widest font-semibold">Decentralized Livelihoods</span>
                </div>
                <h4 className="font-serif font-bold text-md text-brand-dark">3,000 Chhattisgarh Artisans</h4>
                <p className="text-xs text-brand-dark text-opacity-80 mt-1 lines-3 font-sans leading-relaxed">
                  Integrating handloom weavers into modern green supply chains. Providing high-volume fair wages for hand-spun products.
                </p>
              </div>
            </div>

            {/* Informative Text */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-moss bg-opacity-30 border border-brand-moss text-xs font-mono text-brand-beige mb-6">
                <Heart className="w-3.5 h-3.5 text-pink-300 animate-pulse" />
                <span>Empowering Rural India Weavers</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
                Woven by Heritage, <span className="text-brand-olive italic">Powered by Women.</span>
              </h2>

              <p className="text-md text-brand-beige text-opacity-85 font-sans leading-relaxed mb-8">
                At the core of Agrofab lies two deeply integrated missions: environmental circularity and direct economic empowerment. Our primary processing and spinning unit is proud to be operated by a <strong className="text-emerald-300">workforce comprising 80% rural women</strong>, giving them financial sovereignty. 
                <br /><br />
                Additionally, we run a hybrid model: we supply both powerloom facilities and support a deeply treasured heritage network of <strong className="text-emerald-300">3,000 rural weavers in Chhattisgarh</strong>, preserving India's ancient weaving traditions using modern, non-regenerated bio-materials.
              </p>

              {/* Side-by-Side Stat Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-brand-moss pt-8">
                <div className="flex gap-4">
                  <div className="p-3 bg-brand-moss bg-opacity-30 rounded-xl max-h-12 border border-brand-moss flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Integrated Fiber Facility</h4>
                    <p className="text-xs text-brand-beige text-opacity-70 mt-1 leading-relaxed">
                      Operated by 80% rural mothers and daughters, providing full healthcare and safety standard wages.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-brand-moss bg-opacity-30 rounded-xl max-h-12 border border-brand-moss flex items-center justify-center">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Chhattisgarh Loom Guild</h4>
                    <p className="text-xs text-brand-beige text-opacity-70 mt-1 leading-relaxed">
                      Custom structural weaves created on demand, preserving intricate region-specific artisan designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Material Applications Showcase */}
      <section id="applications" className="py-24 px-6 md:px-12 bg-brand-beige bg-opacity-40 scroll-mt-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-clay">Global Premium Markets</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-brand-dark mt-2">
                Versatile Textures for Luxury Spaces
              </h3>
            </div>
            <p className="text-sm text-brand-forest text-opacity-75 max-w-md font-sans">
              Our non-regenerated organic yarns provide unique tactile weight with beautiful uneven slub textures, suitable for multiple dynamic industries.
            </p>
          </div>

          {/* Cards Loop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPLICATIONS_DATA.map((app) => (
              <div 
                key={app.id} 
                className="group bg-white rounded-[32px] overflow-hidden border border-brand-olive border-opacity-10 card-shadow transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative h-[220px] m-3 overflow-hidden rounded-[24px]">
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Decorative Icon */}
                  <div className="absolute bottom-4 left-4 p-2 bg-white bg-opacity-90 rounded-lg text-brand-forest shadow-md">
                    {app.id === "furnishings" ? <Home className="w-4 h-4" /> : 
                     app.id === "apparel" ? <Shirt className="w-4 h-4" /> : 
                     <Layers className="w-4 h-4" />}
                  </div>
                </div>

                <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-xl text-brand-dark mb-2 group-hover:text-brand-forest transition-colors">
                      {app.title}
                    </h4>
                    <p className="text-xs text-brand-dark text-opacity-70 font-sans leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-brand-clay font-semibold uppercase tracking-wider mt-6 pt-4 border-t border-brand-olive border-opacity-10">
                    <span>Premium Organic Fiber</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5.5 Awards & Media (Authority Showcase) */}
      <section id="awards" className="py-24 bg-white scroll-mt-10 border-t border-brand-olive border-opacity-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Awards Headings */}
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-clay">Global Validations & Laurels</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-brand-dark mt-2">
              Awards & <span className="text-brand-forest italic font-normal">Recognition</span>
            </h3>
            <p className="text-sm text-brand-forest text-opacity-75 max-w-xl mx-auto mt-4 font-sans">
              Honored by industry leaders, academic institutions, government bodies, and global sustainability organizations for pioneering circular agro-fabrics.
            </p>
          </div>

          {/* Active Award Card (Slider style with real transition animations) */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-brand-beige bg-opacity-40 border border-brand-olive border-opacity-15 rounded-[32px] overflow-hidden shadow-sm p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Image display */}
                <div className="relative w-full h-[240px] md:h-[300px] rounded-[24px] overflow-hidden shadow-md">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeAwardIndex}
                      src={AWARDS_DATA[activeAwardIndex].image}
                      alt={AWARDS_DATA[activeAwardIndex].title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  {/* Subtle Accent index indicator */}
                  <div className="absolute top-4 right-4 bg-brand-dark/75 backdrop-blur-md text-brand-beige text-xs font-mono px-3 py-1.5 rounded-full border border-white/10">
                    {activeAwardIndex + 1} / {AWARDS_DATA.length}
                  </div>
                </div>

                {/* Info Text */}
                <div className="flex flex-col justify-between h-full py-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest/5 text-brand-forest text-[10px] font-mono font-semibold uppercase tracking-wider mb-4">
                      <Award className="w-3.5 h-3.5 text-brand-clay" />
                      <span>Certified Pioneer</span>
                    </span>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeAwardIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h4 className="text-xl md:text-2xl font-serif font-bold text-brand-dark leading-snug">
                          {AWARDS_DATA[activeAwardIndex].title}
                        </h4>
                        <p className="text-sm font-mono text-brand-clay mt-3">
                          {AWARDS_DATA[activeAwardIndex].subtitle}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Manual Arrow navigators */}
                  <div className="flex items-center gap-3 mt-8">
                    <button
                      onClick={handlePrevAward}
                      aria-label="Previous award"
                      className="w-10 h-10 rounded-full bg-white border border-brand-olive border-opacity-25 flex items-center justify-center text-brand-forest hover:bg-brand-forest hover:text-brand-beige transition-all cursor-pointer shadow-sm"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={handleNextAward}
                      aria-label="Next award"
                      className="w-10 h-10 rounded-full bg-white border border-brand-olive border-opacity-25 flex items-center justify-center text-brand-forest hover:bg-brand-forest hover:text-brand-beige transition-all cursor-pointer shadow-sm"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>

            {/* Custom Dot style selection indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {AWARDS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveAwardIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeAwardIndex 
                      ? "w-8 bg-brand-forest" 
                      : "w-2.5 bg-brand-forest bg-opacity-20 hover:bg-opacity-40"
                  }`}
                  aria-label={`Go to award ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Media Coverage Section */}
      <section id="media" className="py-24 bg-brand-forest text-brand-beige overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-moss opacity-15 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Media articles grid representation */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {MEDIA_DATA.map((media, index) => (
                <div
                  key={index}
                  className={`bg-white text-brand-dark p-4 rounded-3xl border border-brand-olive border-opacity-10 shadow-lg transform transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] cursor-default ${
                    index === 0 ? "sm:rotate-[-1.5deg]" : "sm:rotate-[1deg] sm:translate-y-4"
                  }`}
                >
                  <div className="relative w-full h-[180px] rounded-2xl overflow-hidden mb-4 border border-brand-beige">
                    <img
                      src={media.image}
                      alt={media.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute bottom-2 left-2 bg-brand-dark text-[9px] font-mono tracking-wider text-brand-beige px-2.5 py-1 rounded-md uppercase font-bold">
                      {media.source}
                    </div>
                  </div>
                  
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-clay font-bold">
                    {media.date}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-brand-dark leading-snug mt-1.5 min-h-[50px] lines-2">
                    {media.title}
                  </h4>
                  <p className="text-xs text-brand-dark text-opacity-70 mt-2 font-sans leading-relaxed">
                    {media.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right side: Media context stats and custom Blockquote */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-moss bg-opacity-30 border border-brand-moss text-xs font-mono text-brand-beige mb-6 max-w-max">
                <Newspaper className="w-3.5 h-3.5 text-emerald-400" />
                <span>Media & Publicity</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-tight">
                Making Headline <span className="text-brand-olive italic">Waves</span>
              </h3>
              
              <p className="text-sm text-brand-beige text-opacity-80 mt-4 leading-relaxed font-sans">
                Our revolutionary mechanical extraction technology and socioeconomic weaver empowerment processes have garnered features in national newspapers, state bulletins, and ecological design journals.
              </p>

              {/* Stat figures */}
              <div className="flex gap-8 my-8 pb-8 border-b border-brand-moss border-opacity-30">
                <div>
                  <div className="text-4xl md:text-5xl font-serif text-brand-beige leading-none font-bold">2+</div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-brand-olive text-opacity-90 mt-2">Press Features</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-serif text-brand-beige leading-none font-bold">3+</div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-brand-olive text-opacity-90 mt-2">Publications</div>
                </div>
              </div>

              {/* Direct, unaltered blockquote from the vercel site */}
              <div className="bg-brand-moss bg-opacity-15 border-l-2 border-brand-olive p-5 rounded-r-2xl">
                <Quote className="w-8 h-8 text-brand-olive mb-2 opacity-55" />
                <blockquote className="text-sm text-brand-beige text-opacity-90 italic font-serif leading-relaxed">
                  “AgroFab is pioneering a new chapter in sustainable textiles, turning what was once burnt waste into the fabric of the future.”
                </blockquote>
                <cite className="text-[10px] uppercase font-mono tracking-wider font-semibold text-brand-olive text-opacity-90 block mt-3">
                  — Featured in regional media
                </cite>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. Environmental Comparison Interactive Tool */}
      <section id="compare" className="py-24 px-6 md:px-12 bg-white">
        <div 
          className="max-w-4xl mx-auto rounded-3xl border border-brand-olive border-opacity-15 p-8 md:p-12 relative overflow-hidden shadow-xl"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDkwIDkwIj4KICA8cmVjdCB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIGZpbGw9IiNmNWYyZWIiIC8+CiAgPHBhdGggZD0iTTAsNSBoOTAgTTAsMjUgaDkwIE0wLDUwIGg5MCBNMCw3MCBoOTAiIHN0cm9rZT0iI2RmZGFjZiIgc3Ryb2tlLXdpZHRoPSIxLjgiIG9wYWNpdHk9IjAuNTUiIHN0cm9rZS1kYXNoYXJyYXk9IjEwLDI1LDQ1LDEwIiAvPgogIDxwYXRoIGQ9Ik0wLDEyIGg5MCBNMCwzMiBoOTAgTTAsNTggaDkwIE0wLDc4IGg5MCIgc3Ryb2tlPSIjZGZkYWNmIiBzdHJva2Utd2lkdGg9IjEuMiIgb3BhY2l0eT0iMC41IiBzdHJva2UtZGFzaGFycmF5PSIzMCwxMCwyMCwzMCIgLz4KICA8cGF0aCBkPSJNMCwxOCBoOTAgTTAsNDIgaDkwIE0wLDY0IGg5MCBNMCw4NSBoOTAiIHN0cm9rZT0iI2RmZGFjZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjUsMTUsNTAsMjAiIG9wYWNpdHk9IjAuNSIgLz4KICA8cGF0aCBkPSJNNiwwIHY5MCBNMjYsMCB2OTAgTTUyLDAgdjkwIE03MiwwIHY5MCIgc3Ryb2tlPSIjZGZkYWNmIiBzdHJva2Utd2lkdGg9IjEuOCIgb3BhY2l0eT0iMC41NSIgc3Ryb2tlLWRhc2hhcnJheT0iMTUsNDAsMjUsMTAiIC8+CiAgPHBhdGggZD0iTTE1LDAgdjkwIE0zOCwwIHY5MCBNNTgsMCB2OTAgTTgwLDAgdjkwIiBzdHJva2U9IiNkZmRhY2YiIHN0cm9rZS13aWR0aD0iMS4yIiBvcGFjaXR5PSIwLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjIwLDE1LDM1LDIwIiAvPgogIDxwYXRoIGQ9Ik0yMCwwIHY5MCBNNDUsMCB2OTAgTTY0LDAgdjkwIE04NSwwIHY5MCIgc3Ryb2tlPSIjZGZkYWNmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iOCwyNSw0MCwxNyIgb3BhY2l0eT0iMC41IiAvPgogIDxwYXRoIGQ9Ik0wLDAgaDkwIE0wLDMgaDkwIE0wLDYgaDkwIE0wLDkgaDkwIE0wLDEyIGg5MCBNMCwxNSBoOTAgTTAsMTggaDkwIE0wLDIxIGg5MCBNMCwyNCBoOTAgTTAsMjcgaDkwIE0wLDMwIGg5MCBNMCwzMyBoOTAgTTAsMzYgaDkwIE0wLDM5IGg5MCBNMCw0MiBoOTAgTTAsNDUgaDkwIE0wLDQ4IGg5MCBNMCw1MSBoOTAgTTAsNTQgaDkwIE0wLDU3IGg5MCBNMCw2MCBoOTAgTTAsNjMgaDkwIE0wLDY2IGg5MCBNMCw2OSBoOTAgTTAsNzIgaDkwIE0wLDc1IGg5MCBNMCw3OCBoOTAgTTAsODEgaDkwIE0wLDg0IGg5MCBNMCw4NyBoOTAiIHN0cm9rZT0iI2VhZTVkOSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuOCIgLz4KICA8cGF0aCBkPSJNMCwwIHY5MCBNMywwIHY5MCBNNiwwIHY5MCBNOSwwIHY5MCBNMTIsMCB2OTAgTTE1LDAgdjkwIE0xOCwwIHY5MCBNMjEsMCB2OTAgTTI0LDAgdjkwIE0yNywwIHY5MCBNMzAsMCB2OTAgTTMzLDAgdjkwIE0zNiwwIHY5MCBNMzksMCB2OTAgTTQyLDAgdjkwIE00NSwwIHY5MCBNNDgsMCB2OTAgTTUxLDAgdjkwIE01NCwwIHY5MCBNNTcsMCB2OTAgTTYwLDAgdjkwIE02MywwIHY5MCBNNjYsMCB2OTAgTTY5LDAgdjkwIE03MiwwIHY5MCBNNzUsMCB2OTAgTTc4LDAgdjkwIE04MSwwIHY5MCBNODQsMCB2OTAgTTg3LDAgdjkwIiBzdHJva2U9IiNlYWU1ZDkiIHN0cm9rZT0iMC41IiBvcGFjaXR5PSIwLjgiIC8+Cjwvc3ZnPg==')",
            backgroundSize: "90px 90px",
          }}
        >
          {/* Subtle overlay for beautiful integration of fabric contrast */}
          <div className="absolute inset-0 bg-brand-forest bg-opacity-[0.02] pointer-events-none" />

          <div className="relative z-10 text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-clay">Material Sincerity Analyzer</h3>
            <h4 className="text-3xl font-serif font-bold tracking-tight text-brand-dark mt-2">
              How Agrofab Compares to Legacy Fibers
            </h4>
            <p className="text-xs text-brand-forest text-opacity-80 mt-2 font-sans font-medium">
              Compare estimated agricultural metrics directly across standard cotton, polyester synthetics, and our organic residuary yarns.
            </p>
          </div>

          {/* Metric Filter Buttons */}
          <div className="relative z-10 flex flex-wrap gap-2 justify-center mb-10">
            {[
              { id: "water", name: "Water Consumption", description: "Liters required to produce 1KG of raw fiber." },
              { id: "chemicals", name: "Toxic Chemicals", description: "Acids, caustic sodas, and toxic runoff during processing." },
              { id: "biodegradability", name: "Time to Decompose", description: "Standard period within which material reverts to soil without microplastics." },
              { id: "artisan", name: "Fair Artisan Wages", description: "Economic percentage returned to local region weavers & family workforces." }
            ].map((met) => (
              <button
                key={met.id}
                onClick={() => setCompareMetric(met.id as any)}
                className={`px-4 py-2 text-xs rounded-full border shadow-sm transition-all cursor-pointer ${
                  compareMetric === met.id
                    ? "bg-brand-forest border-brand-forest text-brand-beige font-semibold scale-105"
                    : "bg-white/95 border-brand-olive border-opacity-30 text-brand-dark hover:border-brand-forest hover:bg-white"
                }`}
              >
                {met.name}
              </button>
            ))}
          </div>

          {/* Active Metric Description */}
          <div className="relative z-10 text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-xl bg-white/90 border border-brand-olive border-opacity-10 text-xs font-serif italic text-brand-clay font-medium shadow-sm max-w-lg">
              {compareMetric === "water" ? "Liters required to produce 1KG of raw fiber." :
               compareMetric === "chemicals" ? "Process chemicals, caustic synthetic polymers and acid emissions." :
               compareMetric === "biodegradability" ? "Average decomposition period in standard organic soil conditions." :
               "Percentage of market price directly funding regional artisan weavers & spinners."}
            </span>
          </div>

          {/* Comparison Bar chart structure */}
          <div className="relative z-10 space-y-6">
            
            {/* 1. Polyester Card */}
            <div className="bg-white/95 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-brand-olive border-opacity-15 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="font-bold text-brand-dark uppercase tracking-wider text-[10px]">Synthetic Polyester</span>
                <span className="font-semibold text-brand-clay">
                  {compareMetric === "water" ? "300 Liters" :
                   compareMetric === "chemicals" ? "Extremely High (Petrochemicals)" :
                   compareMetric === "biodegradability" ? "500+ Years" :
                   "0% (Industrial Automation)"}
                </span>
              </div>
              <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-stone-400 h-full transition-all duration-700" 
                  style={{ 
                    width: compareMetric === "water" ? "20%" : 
                           compareMetric === "chemicals" ? "100%" : 
                           compareMetric === "biodegradability" ? "100%" : "2%" 
                  }} 
                />
              </div>
            </div>

            {/* 2. Conventional Cotton Card */}
            <div className="bg-white/95 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-brand-olive border-opacity-15 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="font-bold text-brand-dark uppercase tracking-wider text-[10px]">Conventional Cotton</span>
                <span className="font-semibold text-brand-clay">
                  {compareMetric === "water" ? "10,000 Liters" :
                   compareMetric === "chemicals" ? "High (Pesticides & GMOs)" :
                   compareMetric === "biodegradability" ? "1-5 Months" :
                   "Less than 5% (Middlemen)"}
                </span>
              </div>
              <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-800 bg-opacity-70 h-full transition-all duration-700" 
                  style={{ 
                    width: compareMetric === "water" ? "100%" : 
                           compareMetric === "chemicals" ? "75%" : 
                           compareMetric === "biodegradability" ? "15%" : "8%" 
                  }} 
                />
              </div>
            </div>

            {/* 3. Agrofab Residues Card */}
            <div className="bg-white/95 backdrop-blur-sm p-5 md:p-6 rounded-2xl border-2 border-emerald-600/30 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600" />
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="font-bold text-brand-forest flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                  <Sprout className="w-4 h-4 text-emerald-600" />
                  Agrofab Materials
                </span>
                <span className="font-extrabold text-emerald-800">
                  {compareMetric === "water" ? "Under 50 Liters (Residual Recycled)" :
                   compareMetric === "chemicals" ? "Zero Caustic Acids Used" :
                   compareMetric === "biodegradability" ? "Under 60 Days" :
                   "Over 45% (Direct Guild Funding)"}
                </span>
              </div>
              <div className="w-full bg-emerald-50 h-3.5 rounded-full overflow-hidden border border-emerald-400 border-opacity-20 shadow-inner">
                <div 
                  className="bg-emerald-600 h-full transition-all duration-700 shadow-inner" 
                  style={{ 
                    width: compareMetric === "water" ? "5%" : 
                           compareMetric === "chemicals" ? "5%" : 
                           compareMetric === "biodegradability" ? "5%" : "100%" 
                  }} 
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Contact Us Form Section */}
      <section id="contact" className="py-24 bg-brand-beige bg-opacity-40 border-t border-brand-olive border-opacity-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-clay">Connect with Agrofab</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-brand-dark mt-2">
              Begin Your Circle of <span className="text-brand-forest italic font-normal">Renewal</span>
            </h3>
            <p className="text-sm text-brand-forest text-opacity-75 max-w-md mx-auto mt-4 font-sans">
              Request material swatch samples, schedule dynamic supply consultations, or explore partnership with our weavers guild.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-[36px] overflow-hidden border border-brand-olive border-opacity-10 shadow-xl p-6 md:p-10">
            
            {/* Quick Contact metadata / info col */}
            <div className="lg:col-span-5 bg-brand-dark text-brand-beige p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-forest opacity-10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 block mb-6">Contact Channels</span>
                
                <h4 className="font-serif text-2xl font-light mb-8">
                  Let's make <br />
                  <span className="text-emerald-400 italic">fabrics together.</span>
                </h4>

                <div className="space-y-6">
                  
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-moss bg-opacity-30 border border-brand-moss flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-stone-400 block uppercase font-bold">Email</span>
                      <a href="mailto:hello@agrofab.co" className="text-sm hover:text-emerald-400 transition-all font-sans font-medium">hello@agrofab.co</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-moss bg-opacity-30 border border-brand-moss flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-stone-400 block uppercase font-bold">Phone</span>
                      <a href="tel:+91771402344" className="text-sm hover:text-emerald-400 transition-all font-sans font-medium">+91 771-402-344</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-moss bg-opacity-30 border border-brand-moss flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-stone-400 block uppercase font-bold">Primary Unit Address</span>
                      <p className="text-xs text-stone-300 font-sans leading-relaxed">
                        Agrofab Integrated Facility, Industrial Zone, Raipur, Chhattisgarh, India
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-brand-moss border-opacity-30 text-[10px] font-mono text-stone-400">
                Our weavers network supports fair labor ethics & 100% ecological transparent practices.
              </div>

            </div>

            {/* Interactive form col */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {contactSubmitted ? (
                <div className="text-center py-10 px-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-brand-dark">Message Dispatched!</h4>
                  <p className="text-sm text-brand-forest text-opacity-80 mt-2 max-w-sm mx-auto font-sans">
                    Thank you, <strong className="text-brand-dark">{contactName}</strong>. We have registered your request regarding <strong className="text-brand-clay">{contactSubject}</strong>. An organic swatch kit representative will contact you at <strong className="text-brand-dark">{contactEmail}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setContactName("");
                      setContactEmail("");
                      setContactMessage("");
                      setContactOrg("");
                    }}
                    className="mt-8 px-6 py-2 rounded-full border border-brand-forest text-brand-forest text-xs font-semibold hover:bg-brand-forest hover:text-brand-beige transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  
                  {contactError && (
                    <div className="p-4 bg-red-50 text-red-700 text-xs rounded-xl font-mono border border-red-200">
                      {contactError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-brand-clay mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 rounded-xl border border-brand-olive border-opacity-25 bg-brand-beige bg-opacity-20 text-brand-dark focus:outlined-none focus:border-brand-forest text-xs font-sans transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-brand-clay mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="e.g. eleanor@atelier.com"
                        className="w-full px-4 py-3 rounded-xl border border-brand-olive border-opacity-25 bg-brand-beige bg-opacity-20 text-brand-dark focus:outline-none focus:border-brand-forest text-xs font-sans transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-brand-clay mb-2">
                        Organization / Atelier
                      </label>
                      <input
                        type="text"
                        value={contactOrg}
                        onChange={(e) => setContactOrg(e.target.value)}
                        placeholder="e.g. Vance Furnishings"
                        className="w-full px-4 py-3 rounded-xl border border-brand-olive border-opacity-25 bg-brand-beige bg-opacity-20 text-brand-dark focus:outline-none focus:border-brand-forest text-xs font-sans transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-brand-clay mb-2">
                        Purpose of Inquiry
                      </label>
                      <select
                        value={contactSubject}
                        onChange={(e) => setContactSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-brand-olive border-opacity-25 bg-brand-beige bg-opacity-20 text-brand-dark focus:outline-none focus:border-brand-forest text-xs font-sans bg-white transition-all cursor-pointer"
                      >
                        <option value="Samples & Swatches">Request Organic Swatch Kits</option>
                        <option value="Custom Loom Orders">Custom Loom / Weaver Orders</option>
                        <option value="Spinnable Fiber Supply">Spinnable Raw Fiber Supply</option>
                        <option value="Press Inquiry">Media & Press Relations</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-brand-clay mb-2">
                      Inquiry / Message *
                    </label>
                    <textarea
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Share details of your fabrics specifications and requirements..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-brand-olive border-opacity-25 bg-brand-beige bg-opacity-20 text-brand-dark focus:outline-none focus:border-brand-forest text-xs font-sans transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={contactSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-forest text-brand-beige font-semibold text-xs uppercase tracking-wider hover:bg-brand-moss transition-all cursor-pointer disabled:opacity-75"
                  >
                    {contactSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-brand-beige/30 border-t-brand-beige rounded-full animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-emerald-400" />
                        <span>Send Message & Swatch Kit Request</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Sustainable Footprint Footer */}
      <footer className="bg-brand-dark text-stone-400 py-12 px-6 border-t border-brand-moss border-opacity-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-brand-beige mb-4">
            <Sprout className="w-5 h-5 text-emerald-400" />
            <span className="font-serif text-xl font-bold tracking-tight">Agrofab Sustainable Pvt Ltd</span>
          </div>
          <p className="text-xs text-brand-beige text-opacity-60 max-w-md mx-auto leading-relaxed mb-6">
            Pioneering true zero-waste circularity by weaving premium banana, linen, and rice straw fabrics with traditional heritage looms in Chhattisgarh.
          </p>
          <div className="text-[10px] font-mono tracking-widest text-[#677D6A]">
            © {new Date().getFullYear()} AGROFAB. ALL HUMAN & ROT CRAWLER RIGHTS RESPECTED.
          </div>
        </div>
      </footer>

    </div>
  );
}

function DroplepHalo() {
  return (
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block shrink-0" />
  );
}
