import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Playground } from './components/Playground';
import { TechMarquee } from './components/TechMarquee';
import { Contact } from './components/Contact';
import { useMousePosition } from './hooks/useMousePosition';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  useMousePosition();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Interactive Aura Glow */}
      <div className="aura-glow" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <div className="relative">
        <Hero />
        <Projects />
        <Playground />

        {/* Simple About Section */}
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-6">About Me</h2>
              <p className="text-4xl md:text-6xl font-serif mb-8 leading-tight italic font-light">
                Bridging the gap between <br /> code and canvas.
              </p>
              <div className="space-y-5 mb-8">
                <p className="text-foreground text-xl font-medium leading-relaxed italic">
                  Good design, to me, is invisible.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm Kewal — a Product Designer who obsesses over why things work, not just how they look. I care about the decisions behind the pixels as much as the pixels themselves.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm drawn to complex problems — the kind where the obvious solution is rarely the right one. My process begins with questions, moves through systems, and ends with experiences that feel simple even when they aren't. When I'm not designing, I'm usually pulling apart products I love — trying to understand what made someone choose that word, that color, that interaction.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-foreground font-bold mb-4 uppercase tracking-widest text-xs">Design</h4>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>Product Design</li>
                    <li>Design Systems</li>
                    <li>UX Research</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-foreground font-bold mb-4 uppercase tracking-widest text-xs">Tech</h4>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>React / Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group border border-border"
            >
              <img
                src="/profile.jpg"
                alt="Kewal Verma"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 border border-border rounded-3xl pointer-events-none" />
            </motion.div>
          </div>
        </section>

        <TechMarquee />
        <Contact />
      </div>

      {/* Background Grid/Noise */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </main>
  );
}

export default App;
