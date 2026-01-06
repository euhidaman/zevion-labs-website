"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Link from "next/link";
import { useRef, useState } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type BlogPost = {
    slug: string;
    metadata: {
        title: string;
        publishedAt: string;
        summary: string;
        image?: string;
        externalLink?: string;
        tag?: string[];
        isTopPick?: boolean;
        publishedBy?: string;
    };
};

const blogTags = ["All", "AI Strategy", "ML Engineering", "LLM Development"];

export default function BlogList({ posts }: { posts: BlogPost[] }) {
    const [selectedTag, setSelectedTag] = useState("All");
    const heroRef = useRef(null);
    const topPicksRef = useRef(null);
    const blogGridRef = useRef(null);

    // Filter blog posts based on selected tag
    // Note: Handle tag as array or string for backward compatibility/flexibility
    const filteredPosts =
        selectedTag === "All"
            ? posts.filter((post) => !post.metadata.isTopPick)
            : posts.filter((post) => {
                if (post.metadata.isTopPick) return false;
                const tags = Array.isArray(post.metadata.tag)
                    ? post.metadata.tag
                    : [post.metadata.tag];
                return tags.includes(selectedTag);
            });

    const topPicks = posts.filter((post) => post.metadata.isTopPick);

    useGSAP(() => {
        // Hero section animation
        SplitText.create(".blog-heading", {
            type: "lines, words",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
                return gsap.from(self.words, {
                    duration: 0.6,
                    y: 10,
                    opacity: 0.5,
                    filter: "blur(6px)",
                    autoAlpha: 0,
                    stagger: 0.06,
                });
            },
        });

        // Top picks section animation
        if (topPicksRef.current) {
            gsap.effects.fadeUpOnScroll(topPicksRef.current, {
                start: "top 80%",
                duration: 0.8,
                markers: false,
            });
        }

        // Blog grid section animation
        if (blogGridRef.current) {
            gsap.effects.staggerFadeUpOnScroll(blogGridRef.current, {
                start: "top 85%",
                duration: 0.7,
                stagger: 0.1,
                childSelector: ".blog-card",
                markers: false,
            });
        }

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen w-full">
            <main id="main-content" role="main">
                <div className="mx-auto max-w-6xl px-5">
                    {/* Hero Section */}
                    <section
                        ref={heroRef}
                        className="hero space-y-4 text-center pt-[116px] pb-[48px] md:pt-[128px] md:pb-[64px] lg:pt-[140px] lg:pb-[80px]"
                        role="banner"
                        aria-label="Blog introduction"
                    >
                        <div className="bg-tag-bg w-fit rounded-3xl px-6 py-1 mx-auto">
                            <p className="text-tag align-middle text-sm ">
                                <span className="mt-1.5 mr-2 inline-block self-center" aria-hidden="true">
                                    📝
                                </span>
                                AI Insights & Research
                            </p>
                        </div>

                        <h1 className="blog-heading text-h1 text-text-heading !text-center font-semibold md:mx-auto md:w-2/3">
                            Latest AI Research & Insights
                        </h1>

                        <p className="text-caption text-label md:mx-auto md:w-2/3">
                            Stay updated with the latest trends, research, and insights in artificial
                            intelligence, machine learning, and emerging technologies that are shaping the future
                            of business.
                        </p>
                    </section>

                    {/* Top Picks Section */}
                    {topPicks.length > 0 && (
                        <section
                            ref={topPicksRef}
                            className="mb-16"
                            role="region"
                            aria-labelledby="top-picks-heading"
                        >
                            <div className="mb-8">
                                <h2 id="top-picks-heading" className="text-h2 text-text-heading font-semibold mb-2">
                                    Top Picks
                                </h2>
                                <div className="h-px bg-border"></div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {topPicks.map((post, index) => (
                                    <Link
                                        key={post.slug}
                                        href={post.metadata.externalLink || `/blog/${post.slug}`}
                                        target={post.metadata.externalLink ? "_blank" : undefined}
                                        className="group cursor-pointer space-y-4 block"
                                        role="article"
                                        aria-labelledby={`top-pick-title-${post.slug}`}
                                        aria-describedby={`top-pick-excerpt-${post.slug}`}
                                    >
                                        <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                                            <img
                                                src={post.metadata.image || "/images/placeholder.jpg"}
                                                alt={`${post.metadata.title} - Featured image`}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                loading={index < 2 ? "eager" : "lazy"}
                                                decoding={index < 2 ? "sync" : "async"}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <h3
                                                id={`top-pick-title-${post.slug}`}
                                                className="text-h5 text-text-heading font-medium leading-tight group-hover:text-primary transition-colors"
                                            >
                                                {post.metadata.title}
                                            </h3>

                                            <div className="flex items-center gap-3 text-sm text-label">
                                                <time dateTime={post.metadata.publishedAt} className="font-medium">
                                                    {post.metadata.publishedAt}
                                                </time>
                                                {post.metadata.tag && (
                                                    <div className="flex gap-1">
                                                        {(Array.isArray(post.metadata.tag) ? post.metadata.tag : [post.metadata.tag]).map((tag, i) => (
                                                            <Badge key={i} variant="secondary" className="text-xs">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <p
                                                id={`top-pick-excerpt-${post.slug}`}
                                                className="text-caption text-label line-clamp-2"
                                            >
                                                {post.metadata.summary}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Research/Blogs Section */}
                    <section
                        ref={blogGridRef}
                        className="mb-16"
                        role="region"
                        aria-labelledby="research-blogs-heading"
                    >
                        <div className="mb-8">
                            <h2
                                id="research-blogs-heading"
                                className="text-h2 text-text-heading font-semibold mb-6"
                            >
                                Research Papers
                            </h2>

                            {/* Filter Tags */}
                            <div className="mb-8">
                                <div
                                    className="flex flex-wrap gap-2"
                                    role="tablist"
                                    aria-label="Blog category filters"
                                >
                                    {blogTags.map((tag) => (
                                        <Button
                                            key={tag}
                                            variant={selectedTag === tag ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => setSelectedTag(tag)}
                                            className="text-sm"
                                            role="tab"
                                            aria-selected={selectedTag === tag}
                                            aria-controls={`blog-content-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                                        >
                                            {tag}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-border"></div>
                        </div>

                        {/* Blog Grid */}
                        <div
                            id={`blog-content-${selectedTag.toLowerCase().replace(/\s+/g, "-")}`}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                            role="tabpanel"
                            aria-labelledby={`${selectedTag.toLowerCase().replace(/\s+/g, "-")}-tab`}
                        >
                            {filteredPosts.map((post, index) => (
                                <Link
                                    key={post.slug}
                                    href={post.metadata.externalLink || `/blog/${post.slug}`}
                                    target={post.metadata.externalLink ? "_blank" : undefined}
                                    className="blog-card group cursor-pointer space-y-4 block"
                                    role="article"
                                    aria-labelledby={`blog-title-${post.slug}`}
                                    aria-describedby={`blog-excerpt-${post.slug}`}
                                >
                                    <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                                        <img
                                            src={post.metadata.image || "/images/placeholder.jpg"}
                                            alt={`${post.metadata.title} - Featured image`}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading={index < 3 ? "eager" : "lazy"}
                                            decoding={index < 3 ? "sync" : "async"}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <h3
                                            id={`blog-title-${post.slug}`}
                                            className="text-h5 text-text-heading font-medium leading-tight group-hover:text-primary transition-colors"
                                        >
                                            {post.metadata.title}
                                        </h3>

                                        <div className="flex items-center gap-3 text-sm text-label">
                                            <time dateTime={post.metadata.publishedAt} className="font-medium">
                                                {post.metadata.publishedAt}
                                            </time>
                                            {post.metadata.tag && (
                                                <div className="flex gap-1">
                                                    {(Array.isArray(post.metadata.tag) ? post.metadata.tag : [post.metadata.tag]).map((tag, i) => (
                                                        <Badge key={i} variant="secondary" className="text-xs">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <p
                                            id={`blog-excerpt-${post.slug}`}
                                            className="text-caption text-label line-clamp-2"
                                        >
                                            {post.metadata.summary}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* No results message */}
                        {filteredPosts.length === 0 && (
                            <div className="text-center py-12" role="status" aria-live="polite">
                                <p className="text-label text-lg">No blog posts found for the selected category.</p>
                                <Button
                                    variant="outline"
                                    className="mt-4"
                                    onClick={() => setSelectedTag("All")}
                                    aria-label="Clear filter and show all blog posts"
                                >
                                    Show All Posts
                                </Button>
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}
