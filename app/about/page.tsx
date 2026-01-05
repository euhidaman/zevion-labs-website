"use client";

import "@/lib/GSAPAnimations";
import { pageMetadata } from "@/lib/metadata";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import {
  GlobalMarketGrowthChart,
  RegionalMarketChart,
  EdgeROICalculatorChart,
  PrivacyEfficiencyChart,
  LatencyReductionChart,
  RoboticsAutonomyChart,
  OptimizationPipelineChart,
  HardwareExpansionChart,
  FleetScaleChart
} from "@/components/custom/MarketAnalysisCharts";
import { Cpu, Zap, Globe, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const workplaceContentRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const imageGroupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Animate hero content
    if (heroContentRef.current) {
      gsap.effects.fadeUpOnScroll(heroContentRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    // Animate workplace content
    if (workplaceContentRef.current) {
      gsap.effects.fadeUpOnScroll(workplaceContentRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    // Animate stats section
    if (statsSectionRef.current) {
      gsap.effects.fadeUpOnScroll(statsSectionRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    // Animate statistics grid with stagger
    if (statsGridRef.current) {
      gsap.effects.staggerFadeUpOnScroll(statsGridRef.current, {
        duration: 0.6,
        yOffset: 20,
        stagger: 0.1,
        start: "top 85%",
      });
    }

    // Animate images with slight delay
    imageGroupRefs.current.forEach((ref) => {
      if (ref) {
        gsap.effects.fadeUpOnScroll(ref, {
          duration: 0.7,
          yOffset: 25,
          start: "top 80%",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageMetadata.about.structuredData),
        }}
      />

      <main id="main-content" role="main">
        <section className="py-32 mx-auto max-w-6xl px-5" aria-labelledby="about-heading">
          <div className="container">
            <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
              <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
                <header ref={heroContentRef} className="pr-6">
                  <h1 id="about-heading" className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">
                    Our Mission
                  </h1>
                  <p className="mb-9 text-lg font-medium lg:text-xl">
                    Democratizing access to high-performance AI on every device
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    At Zevion Labs, we believe that true intelligence shouldn't be confined to data centers.
                    Our mission is to decouple AI from the cloud, enabling any device—from the smallest sensor to the largest industrial robot—to think, learn, and act independently. We are building the critical infrastructure that allows high-performance AI to run reliably in the physical world, where privacy, latency, and reliability matter most.
                  </p>
                </header>
                <figure ref={(el) => { imageGroupRefs.current[0] = el as HTMLDivElement; }} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" role="group" aria-label="Zevion Labs technical performance benchmarks">
                  {/* Privacy Radar - Leading Visual */}
                  <div className="md:col-span-2 aspect-[16/10] rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-8 sm:p-10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT/.05)_0%,transparent_70%)]" />
                    <div className="relative z-10 w-full h-full flex flex-col">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Efficiency & Privacy Benchmark</p>
                      <PrivacyEfficiencyChart />
                    </div>
                  </div>

                  {/* Strategic ROI */}
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-6 relative overflow-hidden group">
                    <div className="relative z-10 w-full h-full flex flex-col">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 text-center">Infrastructure ROI</p>
                      <div className="flex-1 min-h-0">
                        <EdgeROICalculatorChart />
                      </div>
                    </div>
                  </div>

                  {/* Technical Metrics Card */}
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/10 p-8 relative overflow-hidden group">
                    {/* Background Icon */}
                    <div className="absolute -right-8 -bottom-8 opacity-[0.03] dark:opacity-[0.05]">
                      <Cpu className="w-40 h-40 text-primary rotate-12" strokeWidth={1} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                          <Cpu className="w-5 h-5 text-primary" strokeWidth={2} />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Performance</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-4xl font-black tracking-tight text-foreground mb-1">90%</p>
                          <p className="text-xs text-muted-foreground">Energy Efficiency</p>
                        </div>
                        <div>
                          <p className="text-4xl font-black tracking-tight text-foreground mb-1">86%</p>
                          <p className="text-xs text-muted-foreground">Cost Reduction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
                <figure ref={(el) => { imageGroupRefs.current[1] = el as HTMLDivElement; }} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" role="group" aria-label="Conceptual visualizations of a smart, connected future">
                  {/* Global Market Growth - Leading Visual */}
                  <div className="md:col-span-2 aspect-[16/10] rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-8 sm:p-10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT/.05)_0%,transparent_70%)]" />
                    <div className="relative z-10 w-full h-full flex flex-col">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Global Market Trajectory ($170B+)</p>
                      <GlobalMarketGrowthChart />
                    </div>
                  </div>

                  {/* Regional Leadership */}
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 p-6 relative overflow-hidden group">
                    <div className="relative z-10 w-full h-full flex flex-col">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 text-center">Market Distribution</p>
                      <div className="flex-1 min-h-0">
                        <RegionalMarketChart />
                      </div>
                    </div>
                  </div>

                  {/* Market Growth Card */}
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/10 p-8 relative overflow-hidden group">
                    {/* Background Icon */}
                    <div className="absolute -right-8 -bottom-8 opacity-[0.03] dark:opacity-[0.05]">
                      <TrendingUp className="w-40 h-40 text-primary rotate-12" strokeWidth={1} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-primary" strokeWidth={2} />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Market Scale</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-4xl font-black tracking-tight text-foreground mb-1">7.9B</p>
                          <p className="text-xs text-muted-foreground">IoT Devices by 2025</p>
                        </div>
                        <div>
                          <p className="text-4xl font-black tracking-tight text-foreground mb-1">36%</p>
                          <p className="text-xs text-muted-foreground">Annual Growth Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
                <article ref={workplaceContentRef} className="px-8">
                  <h2 className="mb-8 text-2xl font-semibold lg:mb-6">
                    Our Vision
                  </h2>
                  <p className="mb-9 text-lg font-medium lg:text-xl">
                    A world where intelligence is ubiquitous and invisible
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a future where every device is smart by default.
                    Where your car, your home, and your city can make intelligent decisions instantly, without waiting for a server halfway across the world. A future where AI is not a service you subscribe to, but a fundamental utility embedded in the fabric of reality—private, secure, and always available.
                  </p>
                </article>
              </div>
            </div>

            <section ref={statsSectionRef} className="container flex flex-col gap-16 mt-24" aria-labelledby="stats-heading">
              <header>
                <h2 id="stats-heading" className="max-w-3xl text-4xl font-medium md:text-5xl">
                  Market Impact & Opportunity Potential
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl">
                  The edge AI market has reached a critical inflection point. As infrastructure pioneers, we are positioning Zevion Labs at the heart of this transformation.
                </p>
              </header>
              <div ref={statsGridRef} className="grid grid-cols-2 gap-6 md:grid-cols-3" role="region" aria-label="Industry statistics and market context">
                <div className="flex flex-col gap-6 border-b pb-8" role="article">
                  <p className="text-4xl font-medium md:text-5xl">$170.5B</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">Edge AI Market by 2035</p>
                  <p className="text-xs text-primary/70">21.2% CAGR Projection</p>
                </div>
                <div className="flex flex-col gap-6 border-b pb-8" role="article">
                  <p className="text-4xl font-medium md:text-5xl">90%</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">Energy Savings vs Cloud</p>
                  <p className="text-xs text-primary/70">Per-Query Efficiency</p>
                </div>
                <div className="flex flex-col gap-6 border-b pb-8" role="article">
                  <p className="text-4xl font-medium md:text-5xl">86%</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">Deployment Cost Reduction</p>
                  <p className="text-xs text-primary/70">Validated Industry Case Study</p>
                </div>
                <div className="flex flex-col gap-6 border-b pb-8" role="article">
                  <p className="text-4xl font-medium md:text-5xl">7.9B</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">IoT Devices by 2028</p>
                  <p className="text-xs text-primary/70">Requiring Local Intelligence</p>
                </div>
                <div className="flex flex-col gap-6 border-b pb-8" role="article">
                  <p className="text-4xl font-medium md:text-5xl">750M+</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">AI Chips Shipped Annually</p>
                  <p className="text-xs text-primary/70">36% Year-over-Year Growth</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;