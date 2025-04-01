import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Clock, User, Bookmark, Share2, Heart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const getPostData = async (slug) => {
    // In a real app, this would fetch from your CMS/API
    const posts = [
        {
            id: 1,
            slug: 'the-future-of-web-development',
            title: "The Future of Web Development",
            author: "Jane Smith",
            date: "2023-05-15",
            readTime: "5 min read",
            content: `
        <h2>Introduction</h2>
        <p>The web development landscape is evolving rapidly. In this post, we'll explore the latest trends shaping our industry.</p>

        <h2>Modern Frameworks</h2>
        <p>React, Vue, and Svelte continue to dominate the frontend space, while Next.js and Remix are redefining full-stack development.</p>

        <h2>Emerging Technologies</h2>
        <p>WebAssembly, Web Components, and Edge Computing are opening new possibilities for web applications.</p>
      `,
            likes: 42,
            comments: 8,
            isBookmarked: false,
            image: "https://placehold.co/800x400",
            tags: ["Web Development", "Trends", "2023"]
        }
    ];

    const post = posts.find(post => post.slug === slug);
    if (!post) return notFound();
    return post;
};

export default async function PostPage({ params }) {
    const post = await getPostData(params.slug);

    return (
        <div className="min-h-screen">
            {/* Hero Section - Made full width */}
            <div className="relative h-[50vh] w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end pb-3">
                    <div className="w-full px-4"> {/* Changed to full width container */}
                        <div className="flex gap-2 mb-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2">{post.title}</h1>
                        <div className="flex items-center gap-4 text-white/80">
                            <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section - Made full width */}
            <div className="w-full px-4 py-12"> {/* Changed to full width */}
                <div className="mx-auto w-full max-w-[1800px]"> {/* Added max width constraint */}
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none w-full"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center mt-12 pt-8 border-t">
                        <div className="flex gap-4">
                            <Button variant="outline" className="gap-2">
                                <Heart className="h-4 w-4" />
                                <span>{post.likes}</span>
                            </Button>
                            <Button variant="outline" className="gap-2">
                                <MessageSquare className="h-4 w-4" />
                                <span>{post.comments} Comments</span>
                            </Button>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon">
                                <Bookmark className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                <Image
                                    src="https://placehold.co/200x200"
                                    alt={post.author}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold">{post.author}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Web developer and tech enthusiast. Passionate about creating beautiful, performant web experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}