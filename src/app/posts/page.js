"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Calendar, Clock, Heart, MessageSquare, User, Bookmark, Share2 } from "lucide-react";
import PageTitle from "@/components/common/PageTitle";
import Image from "next/image";
import Link from 'next/link';

export default function PostsPage() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            slug: 'the-future-of-web-development',
            title: "The Future of Web Development",
            author: "Jane Smith",
            date: "2023-05-15",
            readTime: "5 min read",
            content: "Exploring the latest trends in web development frameworks and tools...",
            likes: 42,
            comments: 8,
            isBookmarked: false
        },
        {
            id: 2,
            title: "Mastering React Hooks",
            author: "John Doe",
            date: "2023-06-20",
            readTime: "8 min read",
            content: "A deep dive into React hooks and how to use them effectively...",
            likes: 89,
            comments: 15,
            isBookmarked: true
        },
    ]);

    const toggleBookmark = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId
                ? { ...post, isBookmarked: !post.isBookmarked }
                : post
        ));
    };

    return (
        <div className="min-h-screen p-4">
            <PageTitle title="Latest Posts" subTitle="Browse our collection of articles" />

            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex gap-4 w-full"> {/* Added w-full */}
                        {/* Image placeholder */}
                        <div className="w-24 h-20 relative shrink-0">
                            <img
                                src="https://placehold.co/600x400"
                                alt={post.title}
                                className="rounded-md object-cover w-full h-full"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="mb-2"> {/* Reduced margin */}
                                <h2 className="font-bold text-lg mb-1 hover:text-primary transition-colors">
                                    <Link href={`/posts/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2> {/* Smaller text */}
                                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2"> {/* Smaller text and gap */}
                                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">{post.content}</p> {/* Smaller text and line clamp */}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}