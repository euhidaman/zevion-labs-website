"use client";

import ProcessSection from "@/components/landing/ProcessSection";
import "@/lib/GSAPAnimations";
import { useRef } from "react";

const MilestonesClient = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <main id="main-content" role="main" className="pt-24 min-h-screen">
            <div className="mx-auto max-w-6xl" ref={containerRef}>
                <ProcessSection />
            </div>
        </main>
    );
};

export default MilestonesClient;
