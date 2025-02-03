import Image from "next/image";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";

const posts = [
  {
    slug: "building-modern-web-apps",
    title: "Building Modern Web Applications with Next.js",
    category: "Development",
    date: "March 15, 2024",
    description:
      "Learn how to build scalable and performant web applications using Next.js, React, and modern web development practices. We`ll cover everything from setup to deployment.",
    image: "https://picsum.photos/id/1/200/300",
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript for Frontend Development",
    category: "TypeScript",
    date: "March 12, 2024",
    description:
      "Discover how TypeScript can improve your development workflow, catch errors early, and make your code more maintainable with static typing.",
    image: "https://picsum.photos/id/1/200/300",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16 md:pt-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900">
          Latest Posts
        </h1>
        <div className="space-y-4 md:space-y-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
