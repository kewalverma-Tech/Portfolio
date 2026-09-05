import { motion, useScroll, useTransform } from 'framer-motion';
import { MousePointer2, Sparkles, ArrowDownRight, Download } from 'lucide-react';

import Magnetic from './Magnetic';

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
            {/* Background Decor */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="relative z-10 max-w-5xl mx-auto text-center">


                <motion.h1
                    style={{ y: y1, opacity, scale }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                >
                    Designing Intelligence, <br />
                    <span style={{ color: '#8B7355' }}>
                        Crafting Experiences
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                >
                    Product Designer who thinks in systems and builds in code.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <Magnetic>
                        <button
                            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold overflow-hidden transition-all hover:pr-12"
                        >
                            <span className="relative z-10">View Projects</span>
                            <ArrowDownRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <a
                            href="/Resume.pdf"
                            download="Kewal_Verma_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full border border-border hover:bg-foreground/5 transition-all text-foreground font-semibold flex items-center space-x-2"
                        >
                            <span>Download Resume</span>
                            <Download className="w-4 h-4" />
                        </a>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-muted-foreground"
            >
                <div className="w-5 h-8 border-2 border-foreground/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-foreground/40 rounded-full" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
            </motion.div>
        </section>
    );
}
