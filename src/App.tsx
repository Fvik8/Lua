/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion'; // Коригирано на 'framer-motion' за стандартна съвместимост
import { ArrowRight, Instagram, Linkedin, Globe } from 'lucide-react';

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16">
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[10px] uppercase tracking-widest-xl text-tan font-bold mb-4"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="overflow-x-hidden bg-white text-black font-sans">
      {/* Navigation - Minimal */}
      <nav className="fixed top-0 left-0 w-full z-50 h-20 px-6 md:px-12 flex justify-between items-center bg-white/90 backdrop-blur-sm border-b border-neutral-100">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#D2B48C] shrink-0"></div>
          <div className="text-[10px] font-bold uppercase tracking-widest-xl hidden sm:block">
            BLANK STUDIO | JUNIOR DESIGNER CANDIDATE
          </div>
        </div>
        <div className="serif italic text-lg absolute left-1/2 -translate-x-1/2 hidden lg:block font-serif">
          LÚA — Mediterranean Botanical Skincare
        </div>
        <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest-xl font-bold">
          <div className="hidden md:flex space-x-8">
            <a href="#vision" className="hover:text-[#D2B48C] transition-colors">Vision</a>
            <a href="#packaging" className="hover:text-[#D2B48C] transition-colors">Packaging</a>
          </div>
          <div className="border-b border-black pb-0.5 hover:border-[#D2B48C] hover:text-[#D2B48C] cursor-pointer transition-all">
            Project ID: 2026-C01
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden pt-20">
        <div className="relative w-full md:w-5/12 h-1/2 md:h-full bg-[#E8E8E8] border-r border-neutral-100 flex items-center justify-center p-12">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "30px 30px" }}></div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: -2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-sm aspect-[2/3] bg-white shadow-2xl flex items-center justify-center p-8 border border-black/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1000" 
              alt="LÚA Serum Hero Mockup" 
              className="w-full h-full object-cover grayscale-[40%] opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-8 bottom-8 text-center">
              <span className="text-[10px] uppercase tracking-widest-xl text-black/30">Mockup v.01</span>
            </div>
          </motion.div>
          
          <div className="absolute bottom-12 left-12 right-12 z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-serif text-7xl md:text-8xl leading-none mb-4 italic"
            >
              LÚA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-[10px] uppercase tracking-widest-xl text-[#D2B48C] font-bold"
            >
              Branding & Packaging Identity
            </motion.p>
          </div>
        </div>
        
        <div className="w-full md:w-7/12 h-1/2 md:h-full relative overflow-hidden bg-[#F9F9F9] flex flex-col justify-end p-12 lg:p-24">
           <img 
             src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=2000" 
             alt="LÚA Context" 
             className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
             referrerPolicy="no-referrer"
           />
           <div className="relative z-10 max-w-xl">
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 1.5 }}
               className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black/70 mb-12"
             >
               "LÚA is a premium, Mediterranean-inspired organic skincare line. The goal was to develop an identity that conveys purity, sophistication, and raw natural beauty."
             </motion.p>
             <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center">
                  <ArrowRight size={14} className="rotate-45" />
                </div>
                <span className="text-[10px] uppercase tracking-widest-xl font-bold self-center">Explore Collection</span>
             </div>
           </div>
        </div>
      </section>

      {/* Vision & Moodboard Section */}
      <div id="vision" className="bg-white border-y border-neutral-100">
        <Section className="grid grid-cols-1 lg:grid-cols-12 gap-0 py-0 px-0 md:px-0 lg:px-0 max-w-none">
          <div className="lg:col-span-4 p-12 lg:p-24 border-r border-neutral-100 flex flex-col justify-between min-h-[500px]">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest-xl mb-6">01. The Vision</h3>
              <motion.p {...fadeUp} className="font-serif italic text-2xl leading-relaxed text-[#1A1A1A] mb-8">
                Raw refinement. Stripping away the excess to focus on the biological connection.
              </motion.p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-neutral-100 pb-2">
                <span className="text-[10px] uppercase tracking-widest-xl opacity-40">Atmosphere</span>
                <span className="text-[10px] font-bold">Sun-bleached linen</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-2">
                <span className="text-[10px] uppercase tracking-widest-xl opacity-40">Tactility</span>
                <span className="text-[10px] font-bold">Cold Stone</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
             <div className="p-12 lg:p-24 border-r border-neutral-100 bg-[#F5F5F5] flex items-center justify-center">
                <div className="w-full h-full border border-dashed border-black/10 flex items-center justify-center p-8 bg-white/50">
                  <span className="text-[9px] uppercase tracking-widest-xl opacity-40 text-center">Moodboard Grid Reference:<br />Organic Textures & Mediterranean Light</span>
                </div>
             </div>
             <div className="grid grid-rows-2 h-full">
                <div className="border-b border-neutral-100 h-full">
                   {/* ЗДРАВЕЙТЕ, ЕТО ГИ ПРОМЕНИТЕ ТУК: */}
                   <img 
                     src="https://raw.githubusercontent.com/Fvik8/Lua/main/Texture%20detail.png" 
                     alt="LÚA Texture Detail - Linen" 
                     className="w-full h-full object-cover grayscale opacity-80"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <div className="bg-[#1A1A1A] p-12 flex items-center justify-center">
                  <p className="text-xs uppercase tracking-widest-xl text-[#D2B48C] text-center leading-loose">
                    Raw <br /> Natural <br /> Beauty
                  </p>
                </div>
             </div>
          </div>
        </Section>
      </div>

      {/* Logo System Section */}
      <section id="logo" className="bg-white">
        <Section className="grid grid-cols-1 lg:grid-cols-12 gap-0 py-0 px-0 md:px-0 lg:px-0 max-w-none border-b border-neutral-100">
          <div className="lg:col-span-7 p-12 lg:p-24 border-r border-neutral-100 bg-[#F9F9F9]">
            <h3 className="text-[10px] font-bold uppercase tracking-widest-xl mb-12">02. Logo System</h3>
            <div className="flex flex-col items-center justify-center space-y-12 py-12">
               <div className="font-serif text-8xl tracking-tighter border-b border-black w-full text-center pb-2">LÚA</div>
               <div className="grid grid-cols-3 gap-6 w-full max-w-md">
                 <div className="aspect-square bg-[#1A1A1A] flex items-center justify-center text-white font-serif text-3xl">L</div>
                 <div className="aspect-square border border-neutral-200 flex items-center justify-center font-serif text-3xl">L</div>
                 <div className="aspect-square bg-[#D2B48C] flex items-center justify-center text-white font-serif text-3xl">L</div>
               </div>
            </div>
          </div>
          <div className="lg:col-span-5 p-12 lg:p-24 flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest-xl font-bold mb-8">Typography Spec</h4>
                <div className="space-y-8">
                  <div className="border-l-2 border-[#D2B48C] pl-6 py-2">
                    <p className="text-4xl font-serif mb-1">Cormorant</p>
                    <p className="text-[10px] uppercase tracking-widest-xl opacity-40 italic">Primary Display | Serif</p>
                  </div>
                  <div className="border-l-2 border-neutral-200 pl-6 py-2">
                    <p className="text-3xl font-light tracking-widest uppercase mb-1">Inter UI</p>
                    <p className="text-[10px] uppercase tracking-widest-xl opacity-40 italic">Secondary / UI | Sans</p>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-neutral-100">
                <p className="text-[10px] tracking-widest-xl uppercase font-bold text-[#D2B48C] mb-4 italic">Note</p>
                <p className="text-xs leading-loose opacity-60">Identity maintains a 2:1 ratio for letter spacing to ensure maximum legibility across luxury packaging substrates.</p>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Packaging Section */}
      <section id="packaging" className="bg-[#F5F5F5]">
        <Section className="py-24 max-w-none px-0">
          <div className="px-12 lg:px-24 mb-16">
            <h3 className="text-[10px] font-bold uppercase tracking-widest-xl mb-4">03. Packaging Execution</h3>
            <div className="w-24 h-px bg-[#D2B48C]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-neutral-100 bg-white">
            <div className="p-12 lg:p-24 border-r border-neutral-100 flex flex-col justify-end min-h-[600px] group overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=1000" 
                 alt="Amber Glass" 
                 className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-110 transition-transform duration-[2s]"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="relative z-10 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                 <span className="text-[10px] font-bold uppercase tracking-widest-xl">Substrate: 01</span>
                 <h4 className="text-3xl font-serif italic">Amber Glass</h4>
               </div>
            </div>
            <div className="p-12 lg:p-24 border-r border-neutral-100 flex flex-col justify-end min-h-[600px] group overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=1000" 
                 alt="Outer Box" 
                 className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-110 transition-transform duration-[2s]"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="relative z-10 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                 <span className="text-[10px] font-bold uppercase tracking-widest-xl">Substrate: 02</span>
                 <h4 className="text-3xl font-serif italic">Textured Paper</h4>
               </div>
            </div>
            <div className="p-12 lg:p-24 flex flex-col justify-end min-h-[600px] group overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1000" 
                 alt="Texture Detail" 
                 className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-110 transition-transform duration-[2s]"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="relative z-10 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                 <span className="text-[10px] font-bold uppercase tracking-widest-xl">Detail: Zoom</span>
                 <h4 className="text-3xl font-serif italic">Blind Embossing</h4>
               </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="bg-white">
        <Section className="grid grid-cols-1 lg:grid-cols-2 gap-0 py-0 px-0 max-w-none border-b border-neutral-100">
          <div className="p-12 lg:p-24 border-r border-neutral-100">
             <h3 className="text-[10px] font-bold uppercase tracking-widest-xl mb-12">04. Guidelines</h3>
             <div className="grid grid-cols-2 gap-12">
                <div className="space-y-8">
                   <div className="flex gap-3">
                      <div className="w-10 h-10 bg-white border border-neutral-200 shadow-sm"></div>
                      <div className="w-10 h-10 bg-[#1A1A1A]"></div>
                      <div className="w-10 h-10 bg-[#D2B48C]"></div>
                      <div className="w-10 h-10 bg-[#6B8E23]"></div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between border-b border-neutral-100 py-2">
                        <span className="text-[10px] opacity-50 uppercase tracking-widest">Primary</span>
                        <span className="text-[10px] font-bold font-mono">#FFFFFF</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-100 py-2">
                        <span className="text-[10px] opacity-50 uppercase tracking-widest">Accent</span>
                        <span className="text-[10px] font-bold font-mono">#D2B48C</span>
                      </div>
                   </div>
                </div>
                <div className="bg-[#F5F5F0] p-8 flex flex-col justify-between">
                   <p className="text-[10px] uppercase tracking-widest-xl italic">Color Theory</p>
                   <p className="text-xs leading-relaxed opacity-60 font-serif italic">Selected to evoke sun-bleached landscapes and organic minerals found along the Mediterranean coastline.</p>
                </div>
             </div>
          </div>
          <div className="p-12 lg:p-24 flex flex-col items-center justify-center bg-[#D2B48C]/5">
             <motion.div {...fadeUp} className="text-center">
                <p className="font-serif italic text-3xl mb-10 leading-relaxed text-[#1A1A1A]">A holistic approach to <br />natural elegance.</p>
                <a href="mailto:viktorovfilip8@gmail.com" className="inline-block px-10 py-5 border border-black text-[10px] uppercase tracking-widest-xl hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
                  Connect with Filip Viktorov
                </a>
             </motion.div>
          </div>
        </Section>
      </section>

      {/* Footer */}
      <footer className="h-20 px-6 md:px-12 lg:px-24 flex items-center justify-between border-t border-neutral-100 bg-white">
        <span className="text-[9px] uppercase tracking-widest-xl opacity-60">Filip Viktorov | Junior Graphic Designer Candidate</span>
        <div className="flex gap-8">
           <a href="https://www.linkedin.com/in/filip-viktorov-37878b407?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="text-[9px] uppercase tracking-widest-xl hover:text-[#D2B48C] transition-colors">LinkedIn</a>
           <a href="https://fviktorov.com" className="text-[9px] uppercase tracking-widest-xl hover:text-[#D2B48C] transition-colors font-bold border-b border-black">Portfolio</a>
        </div>
      </footer>
    </div>
  );
}
