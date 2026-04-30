import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export function Projects() {
    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-4">Selected Work</h2>
                    <p className="text-4xl md:text-5xl font-bold">
                        Bringing ideas to life <br /> through digital craftsmanship.
                    </p>
                </motion.div>

                {/* Coming Soon Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] px-10 py-20 flex flex-col items-center justify-center text-center gap-6"
                >
                    {/* Subtle background glow */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-3xl"
                        style={{
                            background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(180, 80, 30, 0.08), transparent)',
                        }}
                    />

                    {/* Live indicator dot */}
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                            In Progress
                        </span>
                    </div>

                    {/* Message */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground max-w-lg leading-snug">
                        Case studies coming soon — currently working on 2 product design projects.
                    </h3>

                    <p className="text-muted-foreground text-base max-w-sm">
                        Check back soon. Deep-dive case studies are being documented and will be published here.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
