import type { Metadata } from "next";

export const siteConfig = {
  name: "Zevion Labs",
  description: "Device-native intelligence. We build the infrastructure for embedded AI.",
  url: "https://zevionlabs.com",
  ogImage: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
  logo: "/zevion-logo.png",
  keywords: [
    "Embedded AI",
    "Edge Intelligence",
    "Device-Native AI",
    "AI Infrastructure",
    "Offline AI",
    "Privacy-First AI",
    "Robotics AI",
    "Industrial IoT AI"
  ],
  authors: [
    {
      name: "Zevion Labs Team",
      url: "https://zevionlabs.com",
    },
  ],
  creator: "Zevion Labs",
  publisher: "Zevion Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zevionlabs.com",
    siteName: "Zevion Labs",
    title: "Zevion Labs - Embedded Intelligence Infrastructure",
    description: "Device-native intelligence. We build the infrastructure for embedded AI.",
    images: [
      {
        url: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
        width: 1200,
        height: 630,
        alt: "Zevion Labs - Embedded Intelligence Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zevion Labs - Embedded Intelligence Infrastructure",
    description: "Device-native intelligence. We build the infrastructure for embedded AI.",
    images: ["https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png"],
    creator: "@zevionlabs",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://zevionlabs.com",
  },
  category: "technology",
};


export const pageMetadata = {
  home: {
    title: "Zevion Labs - Embedded Intelligence Infrastructure",
    description: "Transform your business with device-native AI. Zevion Labs delivers innovative embedded intelligence technologies that drive growth and efficiency.",
    keywords: [
      "AI solutions",
      "embedded intelligence",
      "edge ai",
      "device-native ai",
      "technology transformation",
      "business AI",
      "AI strategy"
    ],
    openGraph: {
      title: "Zevion Labs - Embedded Intelligence Infrastructure",
      description: "Transform your business with device-native AI. Zevion Labs delivers innovative embedded intelligence technologies that drive growth and efficiency.",
      url: "https://zevionlabs.com",
      type: "website",
    },
    twitter: {
      title: "Zevion Labs - Embedded Intelligence Infrastructure",
      description: "Transform your business with device-native AI. Zevion Labs delivers innovative embedded intelligence technologies that drive growth and efficiency.",
    },
    alternates: {
      canonical: "https://zevionlabs.com",
    },
  },
  about: {
    title: "About Zevion Labs - Embedded Intelligence Infrastructure",
    description: "Learn about Zevion Labs' store, culture, and expertise in embedded AI. We are driven by mission to decouple AI from the cloud.",
    keywords: [
      "Zevion Labs",
      "AI innovation",
      "embedded AI",
      "edge intelligence",
      "technology solutions",
      "artificial intelligence",
      "machine learning",
      "company culture"
    ],
    openGraph: {
      title: "About Zevion Labs - Embedded Intelligence Infrastructure",
      description: "Learn about Zevion Labs' store, culture, and expertise in embedded AI. We are driven by mission to decouple AI from the cloud.",
      url: "https://zevionlabs.com/about",
      type: "website",
    },
    twitter: {
      title: "About Zevion Labs - Embedded Intelligence Infrastructure",
      description: "Learn about Zevion Labs' store, culture, and expertise in embedded AI. We are driven by mission to decouple AI from the cloud.",
    },
    alternates: {
      canonical: "https://zevionlabs.com/about",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zevion Labs",
      "description": "Embedded intelligence infrastructure company decoupling AI from the cloud.",
      "url": "https://zevionlabs.com",
      "logo": "https://zevionlabs.com/logo.png",
      "foundingDate": "2024",
      "numberOfEmployees": "10-20",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TW"
      },
      "sameAs": [
        "https://linkedin.com/company/zevion-labs",
        "https://twitter.com/zevionlabs"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Embedded Systems",
        "Edge Computing",
        "Technology Innovation"
      ]
    }
  },
  blog: {
    title: "AI Insights & Research - Zevion Labs Blog",
    description: "Stay updated with the latest trends, research, and insights in embedded intelligence, edge AI, and emerging technologies.",
    keywords: [
      "AI blog",
      "embedded intelligence insights",
      "edge AI research",
      "AI trends",
      "technology insights",
      "AI articles",
      "ML engineering"
    ],
    openGraph: {
      title: "AI Insights & Research - Zevion Labs Blog",
      description: "Stay updated with the latest trends, research, and insights in embedded intelligence, edge AI, and emerging technologies.",
      url: "https://zevionlabs.com/blog",
      type: "website",
    },
    twitter: {
      title: "AI Insights & Research - Zevion Labs Blog",
      description: "Stay updated with the latest trends, research, and insights in embedded intelligence, edge AI, and emerging technologies.",
    },
    alternates: {
      canonical: "https://zevionlabs.com/blog",
    },
  },
  milestones: {
    title: "Strategic Roadmap & Milestones - Zevion Labs",
    description: "Explore the development phases of Zevion Labs. From core model optimization to global fleet scale, track our mission to build the future of embedded AI.",
    keywords: [
      "AI roadmap",
      "technology milestones",
      "edge AI development",
      "hardware scaling",
      "AI deployment phases",
      "Zevion Labs future"
    ],
    openGraph: {
      title: "Strategic Roadmap & Milestones - Zevion Labs",
      description: "Explore the development phases of Zevion Labs. From core model optimization to global fleet scale, track our mission to build the future of embedded AI.",
      url: "https://zevionlabs.com/milestones",
      type: "website",
    },
    twitter: {
      title: "Strategic Roadmap & Milestones - Zevion Labs",
      description: "Explore the development phases of Zevion Labs. From core model optimization to global fleet scale, track our mission to build the future of embedded AI.",
    },
    alternates: {
      canonical: "https://zevionlabs.com/milestones",
    },
  },
};

export function generatePageMetadata(
  page: keyof typeof pageMetadata,
  customMetadata?: Partial<Metadata>
): Metadata {
  const baseMetadata = pageMetadata[page];

  return {
    title: baseMetadata.title,
    description: baseMetadata.description,
    keywords: baseMetadata.keywords,
    openGraph: {
      ...siteConfig.openGraph,
      ...baseMetadata.openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      ...baseMetadata.twitter,
    },
    alternates: baseMetadata.alternates,
    robots: siteConfig.robots,
    verification: siteConfig.verification,
    ...customMetadata,
  };
}


export function generateBlogPostMetadata(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  image?: string
): Metadata {
  const blogUrl = `https://zevionlabs.com/blog/${slug}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: `${title} - Zevion Labs Blog`,
    description,
    keywords: [
      ...siteConfig.keywords,
      "AI blog post",
      "artificial intelligence article",
      "machine learning insights"
    ],
    openGraph: {
      ...siteConfig.openGraph,
      title: `${title} - Zevion Labs Blog`,
      description,
      url: blogUrl,
      type: "article",
      publishedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${title} - Zevion Labs Blog`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: siteConfig.robots,
  };
}


export function generateBlogPostStructuredData(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  author?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedTime,
    dateModified: publishedTime,
    description,
    url: `https://zevionlabs.com/blog/${slug}`,
    author: {
      "@type": "Person",
      name: author || "Zevion Labs Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Zevion Labs",
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://zevionlabs.com/blog/${slug}`,
    },
  };
}


export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: siteConfig.robots,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  verification: siteConfig.verification,
  alternates: siteConfig.alternates,
  category: siteConfig.category,
};
