import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { playgroundData } from '../data/playground';

export function Playground() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeImageIdx, setActiveImageIdx] = useState(0);

    const openModal = (item) => {
        setSelectedItem(item);
        setActiveImageIdx(0);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setActiveImageIdx(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedItem && selectedItem.images) {
            setActiveImageIdx((prev) => (prev + 1) % selectedItem.images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedItem && selectedItem.images) {
            setActiveImageIdx((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length);
        }
    };

    return (
        <section id="playground" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-4">Playground</h2>
                    <p className="text-4xl md:text-5xl font-bold">
                        Coding experiments <br /> & digital sketches.
                    </p>
                </motion.div>

                {/* Grid of Playground Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {playgroundData.map((item, idx) => {
                        const hasImages = item.images && item.images.length > 0;
                        const mainImage = hasImages ? item.images[0] : null;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className="group relative rounded-2xl border border-border bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-300 flex flex-col overflow-hidden"
                            >
                                {/* Image Box / Thumbnail */}
                                <div 
                                    className="relative aspect-[16/10] overflow-hidden bg-muted/20 cursor-pointer group/img"
                                    onClick={() => hasImages && openModal(item)}
                                >
                                    {hasImages ? (
                                        <>
                                            <img
                                                src={mainImage}
                                                alt={item.title}
                                                className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                <span className="px-4 py-2 rounded-full bg-background/80 text-foreground text-xs font-semibold flex items-center gap-2 border border-border">
                                                    <Maximize2 className="w-3.5 h-3.5" /> View ({item.images.length})
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/10 to-transparent">
                                            <ImageIcon className="w-10 h-10 text-primary/40 mb-2" />
                                            <span className="text-xs text-muted-foreground font-mono">Code Experiment</span>
                                        </div>
                                    )}

                                    {/* Tech Badge */}
                                    <div className="absolute top-3 left-3 z-10">
                                        <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-background/80 backdrop-blur-md border border-border text-primary">
                                            {item.tech}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Info */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>
                                    </div>

                                    {hasImages ? (
                                        <button
                                            onClick={() => openModal(item)}
                                            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline mt-2 self-start"
                                        >
                                            View Full Images ({item.images.length}) →
                                        </button>
                                    ) : item.link && item.link !== "#" ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline mt-2 self-start"
                                        >
                                            View Experiment <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    ) : null}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>

            {/* Lightbox / Modal for Clear Image Viewing */}
            <AnimatePresence>
                {selectedItem && selectedItem.images && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-2xl p-4 md:p-8 flex flex-col items-center justify-between"
                    >
                        {/* Top Header Bar inside Modal */}
                        <div 
                            className="w-full max-w-6xl flex items-start justify-between z-30 pt-2 pb-4 border-b border-border/40 shrink-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div>
                                <span className="text-xs uppercase font-bold tracking-widest text-primary">
                                    {selectedItem.tech}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1">
                                    {selectedItem.title}
                                </h3>
                                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                                    Image {activeImageIdx + 1} of {selectedItem.images.length}
                                </p>
                            </div>

                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors shrink-0"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>

                        {/* Modal Main Image Container */}
                        <div 
                            className="relative max-w-5xl w-full flex-1 flex items-center justify-center py-4 my-auto overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                key={activeImageIdx}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.2 }}
                                src={selectedItem.images[activeImageIdx]}
                                alt={`${selectedItem.title} preview ${activeImageIdx + 1}`}
                                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-border/50"
                            />

                            {/* Prev / Next buttons for multiple images */}
                            {selectedItem.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 md:left-4 p-3 rounded-full bg-background/80 hover:bg-background border border-border text-foreground transition-all shadow-lg backdrop-blur-md z-20"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 md:right-4 p-3 rounded-full bg-background/80 hover:bg-background border border-border text-foreground transition-all shadow-lg backdrop-blur-md z-20"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails row at bottom */}
                        {selectedItem.images.length > 1 && (
                            <div 
                                className="flex gap-3 overflow-x-auto p-2 shrink-0 z-30 max-w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {selectedItem.images.map((imgSrc, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImageIdx(i)}
                                        className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                                            i === activeImageIdx ? 'border-primary scale-105 shadow-md' : 'border-transparent opacity-50 hover:opacity-100'
                                        }`}
                                    >
                                        <img src={imgSrc} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

