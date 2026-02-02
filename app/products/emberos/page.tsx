"use client";

import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Image from "next/image";
import {
    Lock,
    Bolt,
    Layers,
    RotateCcw,
    Monitor,
    Code,
    Terminal,
    Folder,
    Brain,
    Workflow,
    Zap,
    Server,
    ArrowRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EmberOSPage = () => {
    const heroContentRef = useRef<HTMLDivElement>(null);
    const screenshotRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const architectureRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate hero content
        if (heroContentRef.current) {
            gsap.effects.fadeUpOnScroll(heroContentRef.current, {
                duration: 0.8,
                yOffset: 30,
                start: "top 85%",
            });
        }

        // Animate screenshot
        if (screenshotRef.current) {
            gsap.effects.fadeUpOnScroll(screenshotRef.current, {
                duration: 0.8,
                yOffset: 40,
                start: "top 80%",
            });
        }

        // Animate features
        if (featuresRef.current) {
            gsap.effects.staggerFadeUpOnScroll(featuresRef.current, {
                duration: 0.6,
                yOffset: 20,
                stagger: 0.1,
                start: "top 85%",
            });
        }

        // Animate architecture
        if (architectureRef.current) {
            gsap.effects.fadeUpOnScroll(architectureRef.current, {
                duration: 0.8,
                yOffset: 30,
                start: "top 85%",
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <main id="main-content" role="main">
            {/* Hero Section */}
            <section className="py-24 mx-auto max-w-6xl px-5" aria-labelledby="emberos-heading">
                <div className="container">
                    <div ref={heroContentRef} className="text-center mb-12">
                        <div className="inline-block h-1 w-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full mb-6" />
                        <h1 id="emberos-heading" className="text-5xl font-bold md:text-6xl lg:text-7xl mb-6">
                            EmberOS in Action
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
                            Your AI-Native OS Layer
                        </p>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            Not an app - <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent font-semibold">an operating system layer</span> with always-on intelligence
                        </p>
                    </div>

                    {/* Screenshot at the top */}
                    <div ref={screenshotRef} className="relative mb-24 max-w-4xl mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl blur opacity-20 transition duration-1000"></div>
                        <div className="relative bg-background rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                            <Image
                                src="/EmberOS-pic.png"
                                alt="EmberOS in action showing AI-powered terminal interface"
                                width={1920}
                                height={1080}
                                priority
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background border border-border px-6 py-2 rounded-full shadow-lg">
                            <p className="text-xs font-bold uppercase tracking-widest text-orange-600 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                Live Product Screenshot
                            </p>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
                        {[
                            {
                                icon: <Lock className="w-5 h-5 text-white" />,
                                title: "100% Local",
                                desc: "Processing on-device with full encryption.",
                                cardClass: "bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/20 hover:bg-emerald-500/15",
                                iconClass: "bg-emerald-500 shadow-emerald-500/20"
                            },
                            {
                                icon: <Bolt className="w-5 h-5 text-white" />,
                                title: "3-5x Faster",
                                desc: "Specialized tiny models for edge speed.",
                                cardClass: "bg-orange-500/10 dark:bg-orange-500/20 border-orange-500/20 hover:bg-orange-500/15",
                                iconClass: "bg-orange-500 shadow-orange-500/20"
                            },
                            {
                                icon: <Layers className="w-5 h-5 text-white" />,
                                title: "Native Integration",
                                desc: "Direct access to kernel/file system.",
                                cardClass: "bg-blue-500/10 dark:bg-blue-500/20 border-blue-500/20 hover:bg-blue-500/15",
                                iconClass: "bg-blue-500 shadow-blue-500/20"
                            },
                            {
                                icon: <RotateCcw className="w-5 h-5 text-white" />,
                                title: "Interrupt/Rollback",
                                desc: "Stop any operation instantly.",
                                cardClass: "bg-purple-500/10 dark:bg-purple-500/20 border-purple-500/20 hover:bg-purple-500/15",
                                iconClass: "bg-purple-500 shadow-purple-500/20"
                            }
                        ].map((f, i) => (
                            <div key={i} className={`${f.cardClass} border-2 rounded-xl p-6 transition-all shadow-sm`}>
                                <div className="flex items-start gap-4">
                                    <div className={`w-10 h-10 ${f.iconClass} rounded-lg flex items-center justify-center shrink-0 shadow-lg`}>
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground font-medium leading-tight">{f.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Architecture Section - Balanced Size */}
                    <div ref={architectureRef} className="mt-24 pb-16">
                        <div className="text-center mb-16">
                            <div className="inline-block h-1 w-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full mb-6" />
                            <h2 className="text-3xl font-bold md:text-4xl mb-4 tracking-tight">
                                EmberOS Architecture
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                <span className="text-orange-500 font-bold uppercase text-xs tracking-widest">A Structural Intelligence Layer</span>
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-0 relative">
                            {/* Layer 1: User Applications */}
                            <div className="relative group/layer p-8 rounded-2xl border-2 border-blue-500/40 bg-blue-500/[0.08] dark:bg-blue-500/15 shadow-xl transition-all">
                                <div className="absolute -top-4 left-6 bg-blue-600 px-4 py-2 rounded-xl text-xs font-black text-white uppercase flex items-center gap-2 shadow-lg shadow-blue-500/30">
                                    <Monitor className="w-4 h-4" />
                                    User Applications
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                                    {[
                                        { icon: <Monitor className="w-6 h-6 text-blue-500" />, label: "Browser" },
                                        { icon: <Code className="w-6 h-6 text-purple-500" />, label: "Editor" },
                                        { icon: <Terminal className="w-6 h-6 text-emerald-500" />, label: "Terminal" },
                                        { icon: <Folder className="w-6 h-6 text-amber-500" />, label: "Files" }
                                    ].map((app, i) => (
                                        <div key={i} className="bg-background border-2 border-border/50 rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:border-blue-500/50 transition-all">
                                            {app.icon}
                                            <span className="text-xs font-black tracking-tight uppercase text-muted-foreground">{app.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Connector 1 */}
                            <div className="h-12 flex items-center justify-center relative">
                                <div className="w-1 h-full bg-gradient-to-b from-blue-500/50 to-orange-500/50"></div>
                                <div className="absolute bg-background border-2 border-border px-4 py-1 rounded-full text-[10px] font-black text-foreground uppercase tracking-widest shadow-md">
                                    System API
                                </div>
                            </div>

                            {/* Layer 2: EmberOS AI Layer */}
                            <div className="relative group/layer p-6 rounded-2xl border-2 border-orange-500/40 bg-orange-500/[0.08] dark:bg-orange-500/15 shadow-2xl transition-all">
                                <div className="absolute -top-4 left-6 bg-orange-600 px-4 py-2 rounded-xl text-xs font-black text-white uppercase flex items-center gap-2 shadow-lg shadow-orange-500/30">
                                    <Brain className="w-4 h-4" />
                                    Ember-OS AI Layer
                                </div>

                                <div className="space-y-6 pt-2">
                                    {/* Workflow pipeline */}
                                    <div className="bg-background/80 border-2 border-orange-500/20 rounded-xl p-6 shadow-inner">
                                        <div className="flex items-center gap-2 mb-4 text-[10px] font-black text-orange-600 uppercase tracking-widest">
                                            <Workflow className="w-4 h-4 text-orange-500" />
                                            Orchestrator Pipeline
                                        </div>
                                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                            {["Context", "Plan", "Review", "Execute", "Result", "Memory"].map((step, i) => (
                                                <div key={i} className="bg-orange-500/10 dark:bg-orange-500/20 px-2 py-3 rounded-lg border-2 border-orange-500/30 text-[10px] font-black text-orange-700 dark:text-orange-400 text-center uppercase tracking-tighter">
                                                    {step}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Model Core - Balanced Size */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-full max-w-sm bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-0.5 shadow-lg shadow-orange-500/20">
                                            <div className="bg-background rounded-[14px] p-2 flex items-center gap-4 px-6">
                                                <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                                                    <Zap className="w-6 h-6 text-orange-500" />
                                                </div>
                                                <div className="text-left">
                                                    <h3 className="text-lg font-black text-foreground  tracking-tight">EmberVLM Model (Tiny)</h3>
                                                    <p className="text-xs text-muted-foreground font-bold leading-tight uppercase tracking-wider">Zero-latency Edge Intelligence</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Connector 2 */}
                            <div className="h-12 flex items-center justify-center relative">
                                <div className="w-1 h-full bg-gradient-to-b from-orange-500/50 to-slate-400/50"></div>
                                <div className="absolute bg-background border-2 border-border px-4 py-1 rounded-full text-[10px] font-black text-foreground uppercase tracking-widest shadow-md">
                                    Kernel Link
                                </div>
                            </div>

                            {/* Layer 3: Host Operating System */}
                            <div className="relative group/layer p-6 rounded-2xl border-2 border-slate-400/40 bg-slate-500/[0.08] dark:bg-slate-500/15 shadow-xl transition-all">
                                <div className="absolute -top-4 left-6 bg-slate-700 px-4 py-2 rounded-xl text-xs font-black text-white uppercase flex items-center gap-2 shadow-lg shadow-slate-500/30">
                                    <Server className="w-4 h-4" />
                                    Host OS
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                    <div className="bg-background border-2 border-border/50 rounded-xl p-5 flex items-center gap-4 shadow-sm hover:border-slate-400 transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl shadow-inner">🐧</div>
                                        <div>
                                            <h4 className="text-base font-black tracking-tight uppercase">Linux</h4>
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Primary Platform</p>
                                        </div>
                                    </div>
                                    <div className="bg-background border-2 border-border/50 rounded-xl p-5 flex items-center gap-4 shadow-sm hover:border-blue-500/50 transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center text-3xl shadow-inner">🪟</div>
                                        <div>
                                            <h4 className="text-base font-black tracking-tight uppercase">Windows 10 / 11</h4>
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Native Compatibility</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EmberOSPage;
