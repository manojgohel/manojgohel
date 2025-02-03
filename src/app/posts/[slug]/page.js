import Image from "next/image";
import Link from "next/link";

// Mock data - In real app, fetch from API/database
const posts = [
  {
    slug: "building-modern-web-apps",
    title: "Building Modern Web Applications with Next.js",
    category: "Development",
    date: "March 15, 2024",
    description:
      "Learn how to build scalable and performant web applications using Next.js, React, and modern web development practices. We'll cover everything from setup to deployment.",
    image: "https://picsum.photos/id/1/1200/600",
    content: `
      <p>Next.js has revolutionized the way we build web applications. In this comprehensive guide, we'll explore the key features that make Next.js a powerful framework for modern web development.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>Next.js provides an excellent developer experience with features like:</p>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>Built-in routing</li>
      </ul>
    `,
  },
];

export default function PostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-10">
        <Link
          href="/"
          className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 hover:bg-white flex items-center gap-2 shadow-lg"
        >
          ← Back
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-sm font-semibold bg-blue-600/90 rounded-full">
                {post.category}
              </span>
              <time className="text-sm opacity-90">{post.date}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
