"use client";

import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Link2, GraduationCap, Bot, Lightbulb, Image as ImageIcon, MessageCircle, Eye, ListChecks, ArrowRight, RefreshCcw, BarChart3, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EmberVLMPage = () => {
    const heroContentRef = useRef<HTMLDivElement>(null);
    const pipelineRef = useRef<HTMLDivElement>(null);
    const learningRef = useRef<HTMLDivElement>(null);
    const stagesRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate hero content
        if (heroContentRef.current) {
            gsap.effects.fadeUpOnScroll(heroContentRef.current, {
                duration: 0.8,
                yOffset: 30,
                start: "top 85%",
            });
        }

        // Animate pipeline
        if (pipelineRef.current) {
            gsap.effects.staggerFadeUpOnScroll(pipelineRef.current, {
                duration: 0.6,
                yOffset: 20,
                stagger: 0.15,
                start: "top 85%",
            });
        }

        // Animate learning process
        if (learningRef.current) {
            gsap.effects.fadeUpOnScroll(learningRef.current, {
                duration: 0.8,
                yOffset: 30,
                start: "top 85%",
            });
        }

        // Animate stages
        if (stagesRef.current) {
            gsap.effects.staggerFadeUpOnScroll(stagesRef.current, {
                duration: 0.6,
                yOffset: 20,
                stagger: 0.1,
                start: "top 85%",
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <main id="main-content" role="main" className="overflow-hidden">
            {/* Hero Section */}
            <section className="py-24 mx-auto max-w-6xl px-5" aria-labelledby="embervlm-heading">
                <div className="container">
                    <div ref={heroContentRef} className="text-center mb-16">
                        <div className="inline-block h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6" />
                        <h1 id="embervlm-heading" className="text-5xl font-bold md:text-6xl lg:text-7xl mb-6">
                            EmberVLM
                        </h1>
                        <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-4">
                            A Tiny Vision-Language Model for Edge Deployments
                        </p>
                    </div>

                    {/* Edge Vision-Language Model Diagram */}
                    <div ref={learningRef} className="bg-slate-500/[0.05] dark:bg-slate-500/[0.1] border-2 border-slate-500/20 rounded-3xl p-10 mb-24 backdrop-blur-sm relative overflow-hidden">
                        <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tight">Edge Vision-Language Model</h2>

                        {/* Main Flow Layer */}
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 mb-12">
                            {/* Input Modalities */}
                            <div className="w-full lg:w-1/3 space-y-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-0.5 w-8 bg-cyan-500/50"></div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-cyan-600">Input Modalities</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-background/80 border-2 border-border/50 rounded-2xl p-4 shadow-sm hover:border-cyan-500/30 transition-all group/card">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20 group-hover/card:scale-110 transition-transform">
                                            <ImageIcon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-black uppercase tracking-tight">Visual Scene</div>
                                            <div className="text-[11px] text-muted-foreground font-bold tracking-tighter">Vision Encoder (Frozen)</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-background/80 border-2 border-border/50 rounded-2xl p-4 shadow-sm hover:border-purple-500/30 transition-all group/card">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/20 group-hover/card:scale-110 transition-transform">
                                            <MessageCircle className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-black uppercase tracking-tight">Instruction/Caption</div>
                                            <div className="text-[11px] text-muted-foreground font-bold tracking-tighter">Tokenized Text + [VIS]</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Connector 1 */}
                            <div className="hidden lg:flex items-center justify-center flex-1 px-4">
                                <div className="w-full max-w-[120px] h-8 relative">
                                    <svg width="100%" height="100%" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 12H96M96 12L88 4M96 12L88 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500/20" />
                                        <path d="M0 12H96" stroke="url(#cyan-flow)" strokeWidth="2.5" strokeLinecap="round" className="animate-[dash_2s_linear_infinite]" strokeDasharray="15 45" />
                                        <defs>
                                            <linearGradient id="cyan-flow" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="transparent" />
                                                <stop offset="50%" stopColor="#06b6d4" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/* Learning Engine Core */}
                            <div className="flex flex-col items-center justify-center z-10 lg:px-4">
                                <div className="relative group">
                                    <div className="absolute inset-x-0 -inset-y-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
                                    <div className="relative bg-background border-2 border-border shadow-2xl rounded-full p-10 transform group-hover:scale-105 transition-transform duration-500">
                                        <div className="text-center">
                                            <div className="text-5xl mb-3">🧠</div>
                                            <div className="text-lg font-black tracking-tighter text-foreground">EmberVLM</div>
                                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1">Learning</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Connector 2 */}
                            <div className="hidden lg:flex items-center justify-center flex-1 px-4">
                                <div className="w-full max-w-[120px] h-8 relative">
                                    <svg width="100%" height="100%" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 12H96M96 12L88 4M96 12L88 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500/20" />
                                        <path d="M0 12H96" stroke="url(#purple-flow)" strokeWidth="2.5" strokeLinecap="round" className="animate-[dash_2s_linear_infinite]" strokeDasharray="15 45" />
                                        <defs>
                                            <linearGradient id="purple-flow" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="transparent" />
                                                <stop offset="50%" stopColor="#a855f7" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/* Output Capabilities */}
                            <div className="w-full lg:w-1/3 space-y-6">
                                <div className="flex items-center lg:justify-end gap-2 mb-2">
                                    <h3 className="text-sm font-black uppercase tracking-widest text-purple-600">Output Capabilities</h3>
                                    <div className="h-0.5 w-8 bg-purple-500/50"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-background/80 border-2 border-border/50 rounded-2xl p-4 shadow-sm hover:border-green-500/30 transition-all group/card">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-green-500/20 group-hover/card:scale-110 transition-transform">
                                            <Eye className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-black uppercase tracking-tight">Visual Understanding</div>
                                            <div className="text-[11px] text-muted-foreground font-bold tracking-tighter">Captioning & VQA</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-background/80 border-2 border-border/50 rounded-2xl p-4 shadow-sm hover:border-amber-500/30 transition-all group/card">
                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-amber-500/20 group-hover/card:scale-110 transition-transform">
                                            <ListChecks className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-black uppercase tracking-tight">Task Decisions</div>
                                            <div className="text-[11px] text-muted-foreground font-bold tracking-tighter">Specialized Reasoning + CoT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Optimization Flow Indicators */}
                        <div className="flex flex-wrap justify-center gap-6 mt-4">
                            <div className="flex items-center gap-2.5 px-4 py-2 bg-background/40 border border-border/40 rounded-full shadow-sm backdrop-blur-md transition-colors hover:bg-background/60">
                                <RefreshCcw className="w-3.5 h-3.5 text-orange-500" />
                                <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap">Progressive Learning</span>
                            </div>
                            <div className="flex items-center gap-2.5 px-4 py-2 bg-background/40 border border-border/40 rounded-full shadow-sm backdrop-blur-md transition-colors hover:bg-background/60">
                                <BarChart3 className="w-3.5 h-3.5 text-purple-500" />
                                <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap">Task Specialist</span>
                            </div>
                            <div className="flex items-center gap-2.5 px-4 py-2 bg-background/40 border border-border/40 rounded-full shadow-sm backdrop-blur-md transition-colors hover:bg-background/60">
                                <Target className="w-3.5 h-3.5 text-emerald-500" />
                                <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap">Interpretable AI</span>
                            </div>
                        </div>
                    </div>

                    {/* Training Pipeline Flow */}
                    <div ref={pipelineRef} className="mb-24">
                        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-tight">Training Pipeline Stages</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Stage 1 */}
                            <div className="bg-cyan-500/10 dark:bg-cyan-500/20 border-2 border-cyan-500/30 rounded-2xl p-8 transition-all hover:bg-cyan-500/15 shadow-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-cyan-600 text-white text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">Stage 1</span>
                                    <Link2 className="w-6 h-6 text-cyan-600" />
                                </div>
                                <h3 className="text-xl font-black text-cyan-900 dark:text-cyan-100 mb-2 leading-tight">
                                    Vision-Language<br />Alignment
                                </h3>
                                <p className="text-sm font-bold text-cyan-700 dark:text-cyan-400 mb-4 tracking-tight">Joint embedding space</p>
                                <div className="text-xs text-cyan-600 dark:text-cyan-300 space-y-1 font-bold">
                                    <div>Trainable: Vision Proj + Full LM</div>
                                    <div>Loss: Contrastive + LM</div>
                                </div>
                            </div>

                            {/* Stage 2 */}
                            <div className="bg-purple-500/10 dark:bg-purple-500/20 border-2 border-purple-500/30 rounded-2xl p-8 transition-all hover:bg-purple-500/15 shadow-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-purple-600 text-white text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">Stage 2</span>
                                    <GraduationCap className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-black text-purple-900 dark:text-purple-100 mb-2 leading-tight">
                                    Instruction<br />Tuning
                                </h3>
                                <p className="text-sm font-bold text-purple-700 dark:text-purple-400 mb-4 tracking-tight">Conversational agent</p>
                                <div className="text-xs text-purple-600 dark:text-purple-300 space-y-1 font-bold">
                                    <div>Trainable: Full LM + Proj</div>
                                    <div>Loss: SFT + Distillation</div>
                                </div>
                            </div>

                            {/* Stage 3 */}
                            <div className="bg-blue-500/10 dark:bg-blue-500/20 border-2 border-blue-500/30 rounded-2xl p-8 transition-all hover:bg-blue-500/15 shadow-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-blue-600 text-white text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">Stage 3</span>
                                    <Bot className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-black text-blue-900 dark:text-blue-100 mb-2 leading-tight">
                                    Specialized<br />Reasoning
                                </h3>
                                <p className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-4 tracking-tight">Task specialized expert</p>
                                <div className="text-xs text-blue-600 dark:text-blue-300 space-y-1 font-bold">
                                    <div>Trainable: Reasoning Head</div>
                                    <div>Loss: CE + BCE</div>
                                </div>
                            </div>

                            {/* Stage 4 */}
                            <div className="bg-amber-500/10 dark:bg-amber-500/20 border-2 border-amber-500/30 rounded-2xl p-8 transition-all hover:bg-amber-500/15 shadow-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-amber-600 text-white text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">Stage 4</span>
                                    <Lightbulb className="w-6 h-6 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-black text-amber-900 dark:text-amber-100 mb-2 leading-tight">
                                    Chain-of-<br />Thought
                                </h3>
                                <p className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-4 tracking-tight">Interpretable reasoning</p>
                                <div className="text-xs text-amber-600 dark:text-amber-300 space-y-1 font-bold">
                                    <div>Trainable: Reasoning Module</div>
                                    <div>Loss: Reasoning + CoT + Consist</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <style jsx>{`
                @keyframes dash {
                    to {
                        stroke-dashoffset: -56;
                    }
                }
            `}</style>
        </main>
    );
};

export default EmberVLMPage;
