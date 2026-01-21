import { motion, useScroll, useTransform } from 'framer-motion';
import { MousePointer2, Sparkles, ArrowDownRight } from 'lucide-react';

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
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-8"
                >
                    <Sparkles className="w-3 h-3" />
                    <span>Available for new projects</span>
                </motion.div>

                <motion.h1
                    style={{ y: y1, opacity, scale }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold tracking-tight mb-8"
                >
                    Designing Intelligence, <br />
                    <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                        Crafting Experiences
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                >
                    I'm Kewal Verma, a Creative Technologist | UI/UX & Motion Designer | Front-End Developer. Based in India, working globally.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <Magnetic>
                        <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold overflow-hidden transition-all hover:pr-12">
                            <span className="relative z-10">View Projects</span>
                            <ArrowDownRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white font-semibold">
                            About Me
                        </button>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-muted-foreground"
            >
                <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/40 rounded-full" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
            </motion.div>
        </section>
    );
}
