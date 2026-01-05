"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { OptimizationPipelineChart, HardwareExpansionChart, FleetScaleChart } from "@/components/custom/MarketAnalysisCharts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Cpu, Globe, Network, LucideIcon } from "lucide-react";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface processType {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  deliverables: {
    item: string;
  }[];
}

const ProcessCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const process: processType[] = [
    {
      title: "Phase 1: Foundation",
      tagline: "Months 0-12",
      description:
        "We build the core infrastructure for embedded intelligence. This phase focuses on developing our proprietary model optimization pipeline, creating reference implementations for target hardware, and establishing valid benchmarks. We prove that high-performance AI can run reliably on constrained edge devices without cloud dependency.",
      deliverables: [
        { item: "Core model optimization pipeline" },
        { item: "Reference implementations (3-5 platforms)" },
        { item: "Edge-optimized benchmarking framework" },
      ],
      icon: Cpu,
    },
    {
      title: "Phase 2: Market Entry",
      tagline: "Months 12-24",
      description:
        "With a solid foundation, we expand our hardware support and launch our OTA update infrastructure. We partner with key enterprise customers in industrial and consumer sectors to convert pilot projects into commercial deployments. This stage is about proving reliability at scale and providing the tools developers need to build on our platform.",
      deliverables: [
        { item: "Expanded hardware support (10+ platforms)" },
        { item: "OTA update infrastructure launch" },
        { item: "Developer tools & SDKs" },
      ],
      icon: Network,
    },
    {
      title: "Phase 3: Scale",
      tagline: "Months 24-36",
      description:
        "We scale to become the standard operating system for embedded intelligence. Our platform expands to include federated learning, multimodal capabilities, and global deployment. We aim for over 1 million deployed devices, establishing Zevion Labs as the critical infrastructure layer for the next generation of smart hardware.",
      deliverables: [
        { item: "Global fleet deployment (1M+ devices)" },
        { item: "Federated learning capabilities" },
        { item: "Multimodal sensor fusion" },
      ],
      icon: Globe,
    },
  ];

  useGSAP(() => {
    const slides = slidesRef.current;
    if (!slides.length || !headingRef.current || !sectionRef.current) return;

    const headerPin = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 5%",
      endTrigger: slidesRef.current[slidesRef.current.length - 1],
      end: "bottom center",
      pin: headingRef.current,
      pinSpacing: false,
      anticipatePin: 1,
    });

    slides.forEach((slide, index) => {
      if (!slide) return;

      const isLastSlide = index === slides.length - 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: isLastSlide ? "top 80%" : "top 12%",
          end: isLastSlide ? "bottom 20%" : "+=100%",
          scrub: 1.2,
          pin: !isLastSlide,
          pinSpacing: false,
          anticipatePin: 1,
        },
      });

      // Simple, elegant transition
      if (!isLastSlide) {
        tl.to(slide, {
          y: -30,
          scale: 0.98,
          filter: "blur(4px)",
          opacity: 0,
          duration: 1,
          ease: "none",
        });
      } else {
        // Last slide entrance only
        tl.from(slide, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    });

    // Add responsive behavior
    const updatePinning = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      if (isMobile) {
        // Disable header pinning on mobile for better UX
        headerPin.disable();
      } else if (isTablet) {
        // Reduce pinning intensity on tablet
        headerPin.enable();
      } else {
        // Full pinning on desktop
        headerPin.enable();
      }
    };

    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    // Initial call
    updatePinning();

    // Update on window resize
    window.addEventListener("resize", updatePinning);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", updatePinning);
    };
  }, []);

  const addSlideRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      slidesRef.current[index] = el;
    }
  };

  return (
    <div ref={sectionRef} className="relative space-y-4 px-4 sm:px-6 lg:px-8">
      <SectionHeading
        ref={headingRef}
        badge="Strategic Roadmap"
        heading="Milestones to Impact"
        description="Our phased approach to building the infrastructure for embedded intelligence, from core R&D to global scale."
        size="md"
        align="center"
        as="h2"
        id="process-heading"
        className="mb-6 md:mb-14"
      />

      <div ref={containerRef} className="relative">
        {process.map((slide, index) => (
          <div
            key={`slide-main-${index}`}
            ref={(el) => addSlideRef(el, index)}
            className="relative mb-6 flex h-fit w-full items-center justify-center sm:mb-8 md:mb-10"
          >
            <div
              className={`relative h-fit w-full rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="w-full space-y-3 rounded-md p-2 sm:space-y-4">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="heading text-h4 text-heading font-semibold text-2xl md:text-3xl">{slide.title}</h3>
                    <p className="text-sm font-medium tracking-wide text-primary sm:text-base uppercase">
                      {slide.tagline}
                    </p>
                  </div>

                  <p className="text-p text-sm leading-snug text-muted-foreground sm:text-base">
                    {slide.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3 md:mt-8">
                    {slide.deliverables.map((dl, ix) => (
                      <li
                        key={`deliverable-${dl.item}-${ix}`}
                        className="text-heading bg-secondary/50 border border-border rounded-full px-3 py-1 text-xs tracking-wide sm:px-4"
                      >
                        {dl.item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Visual */}
                <div className="relative flex items-center justify-center h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 overflow-hidden">
                  {/* Background element */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT/.05)_0%,transparent_70%)]" />

                  {index === 0 && (
                    <div className="w-full h-full p-6 md:p-10 relative z-10">
                      <OptimizationPipelineChart />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="w-full h-full p-6 md:p-10 relative z-10">
                      <HardwareExpansionChart />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-full h-full p-6 md:p-10 relative z-10">
                      <FleetScaleChart />
                    </div>
                  )}

                  {/* Number Overlay */}
                  <div className="absolute right-4 bottom-4 opacity-10">
                    <span className="text-9xl font-black text-primary">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessCards;
