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
                                Swiggy – UX Audit & Opportunity Mapping
                            </h3>

                            {/* Subtitle */}
                            <p className="text-muted-foreground text-base leading-relaxed mb-8">
                                Deconstructing Swiggy's home, profile, and location architecture using Affinity Mapping & HMWs.
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
                                    Swiggy – UX Audit & Opportunity Mapping
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
                                            Swiggy is one of India's leading hyper-local food and grocery delivery platforms. This comprehensive UX audit deconstructs 3 core application touchpoints: <strong>Home Page</strong>, <strong>Profile Settings</strong>, and <strong>Location Update Flow</strong>.
                                        </p>
                                        <p className="text-foreground/90">
                                            The objective is to map search accessibility, cognitive clutter, monetization banners vs user comfort, and strategic placement of retention drivers across the user journey.
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
                                            The Home page is heavily focused around the <strong>Search Bar</strong> to immediately prompt users to find their desired food.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Search & Dietary Filters:</strong> Beside the search bar, a toggle option is provided for <strong>Vegetarian</strong> or <strong>Non-Vegetarian</strong> preferences. A <strong>Mic icon</strong> is integrated directly in the search bar to allow hands-free voice search for users who prefer not to type.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Top Navigation Shortcuts:</strong> On the top-right, a direct <strong>Profile icon</strong> allows immediate access to profile settings. On the top-left, the <strong>Location text frame</strong> displays the current delivery address; tapping it opens the location picker with current GPS detection.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Contrast & Visual Hierarchy:</strong> A dark blue background header increases contrast and readability across top controls.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>IPL Banners & Monetization:</strong> Directly below the search bar, dynamic banners highlight time-sensitive IPL offers, co-branded with the <em>super.money</em> UPI app to promote integrated payments. Secondary offer cards below the blue section display additional consumer deals.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all md:col-span-2">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Fast Delivery & Footer Controls:</strong> A dedicated <em>"Fast Delivery"</em> section categorizes items delivered quicker than average. The footer navigation bar offers 3 main tabs: <strong>Food</strong>, <strong>EatRight</strong>, and <strong>Reorder</strong>, along with an interactive IPL offer widget.
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
                                            At the top of the Profile page, the user's <strong>Name and Mobile Number</strong> are presented on a soft light background with dark text, keeping the primary focus on user identity.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all md:col-span-2">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Help & Account Settings:</strong> Top-right features a prominent <strong>Help option</strong> for users facing order issues, transaction failures, or scams. Next to it, a 3-dot menu grants access to edit profile, settings, and logout.
                                                </p>
                                                {/* UX Insight Callout */}
                                                <div className="mt-3 p-3.5 rounded-xl bg-primary/10 border border-primary/30 text-foreground flex items-start gap-3 text-xs md:text-sm shadow-inner">
                                                    <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                    <div>
                                                        <span className="font-bold text-primary">UX Insight:</span> Placing the logout option at the bottom of the page is ideal to prevent accidental logouts during user stress.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Swiggy One Subscription Incentive:</strong> Positioned directly below identity info, a membership card leverages FOMO drivers—motivating users to join for unlimited free delivery, extra discounts, and priority delivery during peak hours.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Account Quick Links:</strong> Essential account options like <em>My Vouchers</em>, <em>Account Statements</em>, <em>Saved Addresses</em>, and <em>My Refunds</em> are presented with equal contrast and typography, establishing clarity and trust.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all md:col-span-2">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Past Order Shortcut Psychology:</strong> A high-contrast dark CTA reading <strong>"BROWSE PAST ORDERS"</strong> sits anchored at the bottom. This leverages craving triggers and nostalgia—allowing users to quickly re-order past favorite meals without searching.
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
                                            The Location update screen allows users to configure delivery destinations through multiple intuitive input options.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Manual & Automated Selection:</strong> Provides a manual search bar to type any area/address alongside a 1-tap <strong>"Turn on Location"</strong> option that uses GPS auto-detection.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-xl border border-neutral-200 dark:border-border/80 bg-neutral-50 dark:bg-foreground/[0.03] shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                                <p className="text-foreground text-sm md:text-base">
                                                    <strong>Interactive Map & Address Management:</strong> "Add New Address" allows pin-drop selection on a map. Below, all previously saved addresses (Home, Work, etc.) are listed for instant 1-tap selection.
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

