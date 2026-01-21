import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

import Magnetic from './Magnetic';

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-6">Contact</h2>
                        <p className="text-5xl md:text-7xl font-bold mb-12">Let's build <br /> something <br /> great.</p>

                        <div className="space-y-8">
                            <a href="mailto:kewalverma.studio@gmail.com" className="flex items-center space-x-4 text-2xl font-medium hover:text-primary transition-colors group">
                                <Mail className="w-8 h-8" />
                                <span>kewalverma.studio</span>
                                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                            </a>

                            <div className="flex space-x-6 pt-8">
                                {[
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/kewalverma2006/" },
                                    { icon: Github, href: "https://github.com/kewalverma-Tech" }
                                ].map((social, i) => (
                                    <Magnetic key={i}>
                                        <motion.a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -5 }}
                                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </motion.a>
                                    </Magnetic>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <form
                            className="space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const name = e.target.name.value;
                                const email = e.target.email.value;
                                const message = e.target.message.value;
                                window.location.href = `mailto:kewalverma.studio@gmail.com?subject=Portfolio Contact from ${name}&body=${message} (from ${email})`;
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Name</label>
                                    <input name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Email</label>
                                    <input name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Message</label>
                                <textarea name="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project..." required />
                            </div>
                            <Magnetic>
                                <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all active:scale-[0.98]">
                                    Send Message
                                </button>
                            </Magnetic>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
                    <p>© 2026 Kewal Verma. Built with React & Framer Motion.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0 uppercase tracking-widest font-bold text-[10px]">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
