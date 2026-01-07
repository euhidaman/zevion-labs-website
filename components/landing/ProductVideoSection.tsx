"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProductVideoSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // GitHub raw content URL for the video
    const videoUrl = "https://raw.githubusercontent.com/euhidaman/zevion-labs-website/main/public/videos/Zevion-Ad.mp4";

    useGSAP(() => {
        if (videoContainerRef.current) {
            gsap.fromTo(
                videoContainerRef.current,
                {
                    y: 40,
                    opacity: 0,
                    scale: 0.98,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: videoContainerRef.current,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                        markers: false,
                    },
                }
            );
        }

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Ensure video plays on load
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay was prevented, but that's okay
                console.log("Video autoplay was prevented by browser");
            });
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative mx-auto max-w-7xl px-5 py-4 md:py-8"
            aria-label="Product showcase video"
            role="region"
        >
            <div
                ref={videoContainerRef}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl ring-1 ring-white/10"
            >
                {/* Decorative gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none z-10" />

                {/* Subtle corner accents */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full pointer-events-none z-10 opacity-50" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full pointer-events-none z-10 opacity-50" />

                {/* Video container with aspect ratio */}
                <div className="relative w-full aspect-video">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        aria-label="Zevion Labs product demonstration video"
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default ProductVideoSection;
