import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const placeholders = [1, 2, 3];

export function Playground() {
    return (
        <section id="playground" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-4">Playground</h2>
                    <p className="text-4xl md:text-5xl font-bold">
                        Coding experiments <br /> & digital sketches.
                    </p>
                </motion.div>

                {/* 3 Blurred Coming Soon Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {placeholders.map((_, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.12 }}
                            className="relative rounded-2xl border border-border bg-foreground/[0.02] aspect-square overflow-hidden flex items-center justify-center"
                        >
                            {/* Blur overlay */}
                            <div className="absolute inset-0 backdrop-blur-md bg-background/60 z-10" />

                            {/* Subtle gradient */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0"
                                style={{
                                    background: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(210, 110, 55, 0.12), transparent)',
                                }}
                            />

                            <div className="relative z-20 flex flex-col items-center gap-3 select-none">
                                <div className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center">
                                    <Lock className="w-4 h-4 text-primary/70" />
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    Coming Soon
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
