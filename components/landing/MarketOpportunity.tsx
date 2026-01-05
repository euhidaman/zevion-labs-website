"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { GlobalMarketGrowthChart, RegionalMarketChart, EdgeROICalculatorChart } from "@/components/custom/MarketAnalysisCharts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { TrendingUp, Globe, Zap, DollarSign } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MarketOpportunity() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        if (cardsRef.current) {
            gsap.effects.staggerFadeUpOnScroll(containerRef.current, {
                start: "top 85%",
                childSelector: ".opportunity-card",
                stagger: 0.15,
            });
        }
    }, []);

    return (
        <section className="py-24 px-5" id="market-revolution">
            <SectionHeading
                badge="The Edge AI Revolution"
                heading="A $170 Billion Market Opportunity"
                description="We are entering the era of ubiquitous local intelligence. The convergence of energy efficiency, cost savings, and privacy is driving a massive shift from cloud-dependent services to device-native AI."
                size="md"
                align="center"
                className="mb-16"
            />

            <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Global Growth */}
                <div className="opportunity-card group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-border">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <TrendingUp size={20} />
                        </div>
                        <h3 className="text-xl font-semibold">Global Growth</h3>
                    </div>
                    <div className="h-48 mb-6">
                        <GlobalMarketGrowthChart />
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Projected to reach <span className="text-foreground font-semibold">$170.56B by 2035</span> with a 21.2% CAGR as AI shifts to the edge.
                    </p>
                </div>

                {/* Regional Lead */}
                <div className="opportunity-card group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-border">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Globe size={20} />
                        </div>
                        <h3 className="text-xl font-semibold">Regional Leadership</h3>
                    </div>
                    <div className="h-48 mb-6">
                        <RegionalMarketChart />
                    </div>
                    <p className="text-sm text-muted-foreground">
                        North America leads with <span className="text-foreground font-semibold">42% market share</span>, while Asia-Pacific sees the fastest growth at 29.4% CAGR.
                    </p>
                </div>

                {/* ROI Comparison */}
                <div className="opportunity-card group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-border">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <DollarSign size={20} />
                        </div>
                        <h3 className="text-xl font-semibold">Strategic ROI</h3>
                    </div>
                    <div className="h-48 mb-6">
                        <EdgeROICalculatorChart />
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Manufacturing case studies show an <span className="text-foreground font-semibold">86% cost reduction</span> when shifting from Cloud GPUs to on-device AI.
                    </p>
                </div>
            </div>

            {/* Trust Signal Grid */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: "Energy Efficiency", value: "90%", desc: "vs Cloud Processing", icon: Zap },
                    { label: "Deployment Cost", value: "86%", desc: "Lower in Manufacturing", icon: DollarSign },
                    { label: "IoT Projections", value: "7.9B", desc: "Devices by 2028", icon: Globe },
                    { label: "Growth Rate", value: "36%", desc: "YoY Chip Shipments", icon: TrendingUp },
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                        <stat.icon size={16} className="text-primary mb-2 opacity-50" />
                        <span className="text-2xl font-bold">{stat.value}</span>
                        <span className="text-xs text-muted-foreground mt-1 text-center font-medium uppercase tracking-wider">{stat.label}</span>
                        <span className="text-[10px] text-muted-foreground/60">{stat.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
