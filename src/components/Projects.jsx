import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useRef } from 'react';

function ProjectCard({ project, idx }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

    return (
        <motion.div
            ref={cardRef}
            style={{ scale, opacity }}
            transition={{ duration: 0.8 }}
            className={idx % 2 === 0 ? "flex flex-col lg:flex-row gap-12 items-center" : "flex flex-col lg:flex-row-reverse gap-12 items-center"}
        >
            {/* Image Container */}
            <div className="relative w-full lg:w-3/5 group overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-video">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex space-x-3">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Panel */}
            <div className="w-full lg:w-2/5">
                <div className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">{project.category}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {project.description}
                </p>

                <a
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-white font-semibold group"
                >
                    <span>View Case Study</span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black group-hover:border-white">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </a>
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-4">Selected Work</h2>
                    <p className="text-4xl md:text-5xl font-bold">Bringing ideas to life <br /> through digital craftsmanship.</p>
                </motion.div>

                <div className="grid grid-cols-1 gap-32">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
