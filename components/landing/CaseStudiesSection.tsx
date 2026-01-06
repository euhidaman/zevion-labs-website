"use client";

import ImageCarousel from "@/components/custom/ImageCarousel";
import { PrivacyEfficiencyChart, LatencyReductionChart, RoboticsAutonomyChart } from "@/components/custom/MarketAnalysisCharts";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import type { CaseStudyType } from "@/data/caseStudies";
import { caseStudies } from "@/data/caseStudies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface CaseStudyCardProps {
  caseStudy: CaseStudyType;
  index: number;
}

import { Factory, HeartPulse, Laptop, ShieldCheck, Truck, Cpu, LucideIcon } from "lucide-react";

// Map names to icons
const iconMap: Record<string, LucideIcon> = {
  "Consumer Electronics": Laptop,
  "Industrial IoT": Factory,
  "Robotics": Cpu,
  "Healthcare": HeartPulse,
  "Defense": ShieldCheck,
  "Automotive": Truck,
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const IconComponent = iconMap[caseStudy.name];

  useGSAP(() => {
    if (cardRef.current && gsap.effects?.fadeUpOnScroll) {
      gsap.effects.fadeUpOnScroll(contentRef.current, {
        start: "top 90%",
        duration: 0.8,
        markers: false,
      });

      gsap.effects.fadeUpOnScroll(imageRef.current, {
        start: "top 90%",
        duration: 0.8,
        delay: 0.2,
        markers: false,
      });
    }
  }, [index]);

  return (
    <section
      ref={cardRef}
      className="grid grid-cols-1 gap-8 rounded-lg p-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-4 lg:grid-cols-12 lg:gap-12"
      aria-labelledby={`case-study-${index}-title`}
      role="article"
    >
      <div ref={contentRef} className="col-span-1 space-y-6 lg:col-span-5">
        <div className="space-y-6">
          <div className="flex items-center">
            {/* Logo or minimalist identifier */}
            <div className="flex items-center gap-2">
              {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
              <span className="text-sm font-bold tracking-wider text-muted-foreground uppercase">{caseStudy.name}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3
              id={`case-study-${index}-title`}
              className="text-h4 text-heading pr-4 text-2xl leading-tight font-semibold lg:text-3xl"
            >
              {caseStudy.project_title}
            </h3>
          </div>

          <div className="space-y-4">
            <h4 className="sr-only">Key Features</h4>
            <p className="text-muted-foreground">{caseStudy.description}</p>
            <ul
              className="list-disc space-y-3 pl-4"
              role="list"
              aria-label="Project features and achievements"
            >
              {caseStudy.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-label text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>



        <p id={`case-study-${index}-description`} className="sr-only">
          Learn more about {caseStudy.name} solutions.
        </p>
      </div>

      <div
        ref={imageRef}
        className="col-span-1 aspect-[4/3] lg:col-span-7 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center relative"
        role="region"
        aria-label={`${caseStudy.name} visual`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {index === 0 && (
          <div className="w-full h-full p-6 md:p-10 relative z-10">
            <PrivacyEfficiencyChart />
          </div>
        )}
        {index === 1 && (
          <div className="w-full h-full p-6 md:p-10 relative z-10">
            <LatencyReductionChart />
          </div>
        )}
        {index === 2 && (
          <div className="w-full h-full p-6 md:p-10 relative z-10">
            <RoboticsAutonomyChart />
          </div>
        )}
        {index > 2 && IconComponent && (
          <IconComponent strokeWidth={0.5} className="w-48 h-48 text-primary/20" />
        )}
      </div>
    </section>
  );
};

const CaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the main heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false, // Set to false for production
          },
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="mx-auto max-w-7xl px-5 pb-16 pt-0 md:pb-24 md:pt-0"
        aria-labelledby="case-studies-heading"
        role="region"
      >
        {/* Header */}
        {/* Header */}
        <SectionHeading
          ref={headingRef}
          badge="Market Focus"
          heading="Target Customer Segments"
          description="Industries where offline-first, device-native intelligence creates immediate competitive advantage."
          size="md"
          align="center"
          as="h2"
          id="segments-heading"
          className="mb-8 md:mb-14"
        />

        {/* Case Studies */}
        <div className="space-y-8 md:space-y-24" role="main" aria-label="Case studies collection">
          {caseStudies.slice(0, 3).map((caseStudy, index) => (
            <div key={`${caseStudy.name}-${index}`}>
              <CaseStudyCard caseStudy={caseStudy} index={index} />
            </div>
          ))}
        </div>

        {/* Skip link for keyboard users */}
        <a
          href="#main-navigation"
          className="sr-only z-50 rounded-md bg-blue-600 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
        >
          Skip to main navigation
        </a>
      </section>
    </>
  );
};

export default CaseStudies;
