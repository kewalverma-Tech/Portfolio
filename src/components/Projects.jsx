import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, X, Clock, User, Sparkles, Layers, Search, MapPin, UserCheck, ChevronRight, Lightbulb } from 'lucide-react';
import { projects } from '../data/projects';

export function Projects() {
    const [isSwiggyModalOpen, setIsSwiggyModalOpen] = useState(false);

    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-4">Selected Work</h2>
                    <p className="text-4xl md:text-5xl font-bold">
                        Bringing ideas to life <br /> through digital craftsmanship.
                    </p>
                </motion.div>

                {/* FEATURED CASE STUDY CARD (Swiggy UX Audit) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 group relative overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-500"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12">
                        {/* Cover Image Visual */}
                        <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted/20 border border-border/60 group-hover:scale-[1.01] transition-transform duration-500 cursor-pointer"
                             onClick={() => setIsSwiggyModalOpen(true)}>
                            <img
                                src="/swiggy/swiggy-screens.png"
                                alt="Swiggy UX Audit Screens"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                            <div className="absolute top-4 left-4">
                                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-md flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5" /> Featured Case Study
                                </span>
                            </div>
                        </div>

                        {/* Details Column */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                    UX Research
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-foreground/5 text-muted-foreground border border-border">
                                    Information Architecture
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                                Swiggy - UX Audit & Opportunity Mapping
                            </h3>

                            {/* Subtitle */}
                            <p className="text-muted-foreground text-base leading-relaxed mb-8">
                                A hands-on breakdown of Swiggy's home, profile, and location flows using affinity mapping and problem framing.
                            </p>

                            {/* CTA Button */}
                            <button
                                onClick={() => setIsSwiggyModalOpen(true)}
                                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20 self-start"
                            >
                                Read Case Study <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* OTHER PROJECTS GRID */}
                <div className="space-y-8">
                    <h3 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-6">Other Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group relative rounded-2xl border border-border bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-300 flex flex-col overflow-hidden"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-background/80 backdrop-blur-md border border-border text-primary">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline mt-2"
                                    >
                                        View Project <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* FULL ARTICLE PAGE / MODAL FOR SWIGGY CASE STUDY */}
            <AnimatePresence>
                {isSwiggyModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSwiggyModalOpen(false)}
                        className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-2xl overflow-y-auto"
                    >
                        <div 
                            className="max-w-4xl mx-auto min-h-screen px-6 py-12 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Article Sticky Top Header */}
                            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md py-4 mb-8 border-b border-border flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                                        Case Study
                                    </span>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" /> 5 min read
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsSwiggyModalOpen(false)}
                                    className="p-2.5 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors"
                                    aria-label="Close article"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Main Title & Meta Header */}
                            <div className="mb-12">
                                <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                                    Swiggy - UX Audit & Opportunity Mapping
                                </h1>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground border-y border-border/60 py-4">
                                    <span className="flex items-center gap-2 text-foreground font-medium">
                                        <User className="w-4 h-4 text-primary" /> Kewal Verma
                                    </span>
                                    <span>•</span>
                                    <span>Product Designer</span>
                                    <span>•</span>
                                    <span>UX Audit Report</span>
                                </div>
                            </div>

                            {/* ARTICLE CONTENT BODY */}
                            <div className="space-y-20 text-foreground">

                                {/* SECTION 1: OVERVIEW */}
                                <section className="space-y-4">
                                    <h2 className="text-sm uppercase tracking-[0.25em] font-bold text-primary flex items-center gap-2">
                                        <Layers className="w-4 h-4" /> 1. OVERVIEW
                                    </h2>
                                    <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-border/80 space-y-3 text-base md:text-lg leading-relaxed text-foreground font-normal">
                                        <p className="text-foreground">
                                            Swiggy is one of India's top food and grocery apps. In this case study, I broke down three main parts of the app: the <strong>Home Page</strong>, <strong>Profile Settings</strong>, and <strong>Location Update</strong> flow.
                                        </p>
                                        <p className="text-foreground/90">
                                            My goal was simple: spot usability issues, find hidden friction, and see how business goals balance with user experience.
                                        </p>
                                    </div>
                                </section>

                                {/* SECTION 2: HOME PAGE ANALYSIS */}
                                <section className="space-y-8 pt-6 border-t border-border/60">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md">
                                            1
                                        </span>
                                        <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight flex items-center gap-2">
                                            <Search className="w-5 h-5 text-primary" /> Home Page Analysis
                                        </h2>
                                    </div>

                                    {/* Mobile Screen Image */}
                                    <div className="max-w-xs mx-auto md:mx-0 rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted/20">
                                        <img
                                            src="/swiggy/screen-home.png"
                                            alt="Swiggy Home Screen Mobile App"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    {/* Formatted Article Text as 2-Column Card Grid */}
                                    <div className="space-y-4 text-base leading-relaxed text-foreground">
                                        <p className="text-foreground font-medium text-lg mb-4">
                                            The Home page focuses heavily on the Search Bar as the primary entry point to minimize the time-to-first-click for hungry users.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Search & Dietary Micro-actions:</strong> The Veg/Non-Veg toggle is placed directly beside the search bar to eliminate friction for users with strict dietary preferences. The Mic icon provides a voice-first alternative for users who want to avoid typing dish names manually.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Location Context & Profile Shortcuts:</strong> The top-left location selector grounds the user's delivery context immediately before browsing. Tapping it opens quick GPS auto-detection. Profile access is kept top-right to remain accessible without distracting from the main food feed.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Visual Hierarchy & Contrast:</strong> The dark blue header block was deliberately chosen to increase visual contrast, separating top system controls from the vibrant promotional banners below for better readability.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Monetization & Deal Hooks:</strong> Prime real estate directly below search is used during peak IPL season to promote co-branded UPI offers (super.money), balancing ad-monetization with high-visibility consumer discounts.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all md:col-span-2">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Decision Acceleration & Footer:</strong> The dedicated 'Fast Delivery' rail caters to urgent, high-intent orders by grouping quick turnaround restaurants. The footer grounds main navigation (Food, EatRight, Reorder) within natural thumb reach.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* SECTION 3: PROFILE PAGE ANALYSIS */}
                                <section className="space-y-8 pt-8 border-t border-border/60">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md">
                                            2
                                        </span>
                                        <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight flex items-center gap-2">
                                            <UserCheck className="w-5 h-5 text-primary" /> Profile Page Analysis
                                        </h2>
                                    </div>

                                    {/* Mobile Screen Image */}
                                    <div className="max-w-xs mx-auto md:mx-0 rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted/20">
                                        <img
                                            src="/swiggy/screen-profile.png"
                                            alt="Swiggy Profile Screen Mobile App"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    {/* Formatted Article Text as 2-Column Card Grid */}
                                    <div className="space-y-4 text-base leading-relaxed text-foreground">
                                        <p className="text-foreground font-medium text-lg mb-4">
                                            The profile header keeps things clear by showing your name and phone number on a clean, light background.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all md:col-span-2">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Help & Settings:</strong> A top-right <strong>Help button</strong> gives instant access for order or payment issues. Next to it, a three-dot menu opens account settings.
                                                </p>
                                                {/* UX Insight Callout */}
                                                <div className="mt-3 p-3.5 rounded-xl bg-primary/10 border border-primary/30 text-foreground flex items-start gap-3 text-xs md:text-sm shadow-inner">
                                                    <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                    <div>
                                                        <span className="font-bold text-primary">UX Insight:</span> Moving logout to the very bottom prevents accidental taps when a user is already frustrated.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Swiggy One Membership:</strong> Placed right below profile details, this card highlights perks like free delivery and extra discounts to encourage upgrades.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Account Quick Links:</strong> Key actions like <em>Vouchers</em>, <em>Statements</em>, <em>Saved Addresses</em>, and <em>Refunds</em> get equal visual weight, making the layout feel clean and reliable.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all md:col-span-2">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Past Order Shortcuts:</strong> A dark <strong>"BROWSE PAST ORDERS"</strong> button sits near the bottom. It taps into repeat habits, letting users re-order favorite meals in one tap.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* SECTION 4: LOCATION UPDATE PAGE */}
                                <section className="space-y-8 pt-8 border-t border-border/60">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md">
                                            3
                                        </span>
                                        <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-primary" /> Location Update Flow
                                        </h2>
                                    </div>

                                    {/* Mobile Screen Image */}
                                    <div className="max-w-xs mx-auto md:mx-0 rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted/20">
                                        <img
                                            src="/swiggy/screen-location.png"
                                            alt="Swiggy Location Update Screen Mobile App"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    {/* Formatted Article Text as 2-Column Card Grid */}
                                    <div className="space-y-4 text-base leading-relaxed text-foreground">
                                        <p className="text-foreground font-medium text-lg mb-4">
                                            The location screen gives users flexible ways to set where their food should arrive.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Manual & GPS Search:</strong> Users can type an address manually or tap <strong>"Turn on Location"</strong> to let GPS auto-detect their exact spot.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Saved Addresses & Map Pin:</strong> "Add New Address" lets users drop a pin on the map, while saved addresses like Home or Work stay ready for one-tap selection.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Combined Flow Summary Visual */}
                                <section className="space-y-6 pt-8 border-t border-border">
                                    <h3 className="text-lg font-bold text-foreground">
                                        Full Swiggy Journey Side-by-Side
                                    </h3>
                                    <div className="rounded-2xl overflow-hidden border border-border bg-muted/20">
                                        <img
                                            src="/swiggy/swiggy-screens.png"
                                            alt="Swiggy Mobile Screens Overview"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </section>

                            </div>

                            {/* Article Footer */}
                            <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
                                <div className="text-xs text-muted-foreground">
                                    Swiggy UX Audit & Opportunity Mapping Case Study • By Kewal Verma
                                </div>
                                <button
                                    onClick={() => setIsSwiggyModalOpen(false)}
                                    className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-all"
                                >
                                    Close Case Study
                                </button>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

