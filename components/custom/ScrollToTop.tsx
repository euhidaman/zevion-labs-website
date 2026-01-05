"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Button
            variant="secondary"
            size="icon"
            className={cn(
                "fixed bottom-8 right-8 z-50 h-10 w-10 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 border border-border bg-background/80 backdrop-blur-md",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
            )}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ChevronUp className="h-5 w-5" />
        </Button>
    );
}
