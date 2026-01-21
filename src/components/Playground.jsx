import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { playgroundData } from '../data/playground';
import Magnetic from './Magnetic';

export function Playground() {
    const [visibleItems, setVisibleItems] = useState(6);
    return (
        <section id="playground" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-4">Playground</h2>
                    <p className="text-4xl md:text-5xl font-bold">Coding experiments <br /> & digital sketches.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {playgroundData.slice(0, visibleItems).map((item, idx) => (
                        <motion.a
                            key={item.id}
                            href={item.link === "#" ? undefined : item.link}
                            target={item.link === "#" ? undefined : "_blank"}
                            rel={item.link === "#" ? undefined : "noopener noreferrer"}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group block ${item.link === "#" ? "cursor-default" : "cursor-pointer"}`}
                            onClick={(e) => item.link === "#" && e.preventDefault()}
                        >
                            {/* Thumbnail Placeholder */}
                            <div className={`w-full aspect-square bg-white/5 border border-white/10 rounded-2xl mb-6 overflow-hidden relative group-hover:border-primary/50 transition-colors duration-500`}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className={`absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-widest transition-colors ${item.link === "#"
                                        ? "text-white/20"
                                        : "text-white/20 group-hover:text-primary/50"
                                    }`}>
                                    {item.link === "#" ? "Coming Soon" : "Preview"}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                                    <span className="text-[10px] uppercase tracking-widest font-bold border border-white/10 px-2 py-1 rounded-full text-muted-foreground">
                                        {item.tech}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {playgroundData.length > 6 && (
                    <div className="flex justify-center mt-12">
                        <Magnetic>
                            <button
                                onClick={() => {
                                    if (visibleItems < playgroundData.length) {
                                        setVisibleItems(prev => prev + 6);
                                    } else {
                                        setVisibleItems(6);
                                        document.getElementById('playground').scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white font-semibold flex items-center space-x-2"
                            >
                                <span>{visibleItems < playgroundData.length ? "Show More" : "Show Less"}</span>
                                <Plus className={`w-4 h-4 transition-transform duration-300 ${visibleItems >= playgroundData.length ? "rotate-45" : ""}`} />
                            </button>
                        </Magnetic>
                    </div>
                )}
            </div>
        </section>
    );
}
