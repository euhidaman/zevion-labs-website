
import BlogList from "@/components/blog-list";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "AI Insights & Research - Zevion Labs Blog",
  description:
    "Explore the latest research, insights, and trends in AI, machine learning, and embedded intelligence from the Zevion Labs team.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Sort posts by date descending
  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  return <BlogList posts={sortedPosts} />;
}
