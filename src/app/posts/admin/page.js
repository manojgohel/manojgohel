"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Calendar, Clock, Heart, MessageSquare, User, Bookmark, Share2 } from "lucide-react";
import PageTitle from "@/components/common/PageTitle";
import CommonDialog from "@/components/common/CommonDialog";
import CommonConfirm from "@/components/common/CommonConfirm";

export default function PostsPage() {
    const [posts, setPosts] = useState([
        {
            id: 1,
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

    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostContent, setNewPostContent] = useState("");
    const [editPostTitle, setEditPostTitle] = useState("");
    const [editPostContent, setEditPostContent] = useState("");

    const handleAddPost = () => {
        if (!newPostTitle.trim()) return;
        const newPost = {
            id: Math.max(0, ...posts.map(p => p.id)) + 1,
            title: newPostTitle,
            author: "You",
            date: new Date().toISOString().split('T')[0],
            readTime: `${Math.ceil(newPostContent.length / 1000)} min read`,
            content: newPostContent,
            likes: 0,
            comments: 0,
            isBookmarked: false
        };
        setPosts([...posts, newPost]);
        setNewPostTitle("");
        setNewPostContent("");
    };

    const handleEditPost = (postId) => {
        if (!editPostTitle.trim()) return;
        setPosts(posts.map(post =>
            post.id === postId
                ? {
                    ...post,
                    title: editPostTitle,
                    content: editPostContent
                }
                : post
        ));
        setEditPostTitle("");
        setEditPostContent("");
    };

    const handleDeletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    const toggleBookmark = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId
                ? { ...post, isBookmarked: !post.isBookmarked }
                : post
        ));
    };

    return (
        <div className="min-h-screen p-4 max-w-4xl mx-auto">
            <PageTitle title="Latest Posts" subTitle="Browse and manage your posts">
                <div className="flex justify-end mb-4">
                    <CommonDialog
                        actionButtonText="Create Post"
                        title="Create New Post"
                    >
                        <div className="space-y-4">
                            <Input
                                value={newPostTitle}
                                onChange={(e) => setNewPostTitle(e.target.value)}
                                placeholder="Post title"
                            />
                            <textarea
                                value={newPostContent}
                                onChange={(e) => setNewPostContent(e.target.value)}
                                placeholder="Write your post content here..."
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                rows={5}
                            />
                            <Button onClick={handleAddPost}>Publish</Button>
                        </div>
                    </CommonDialog>
                </div>
            </PageTitle>

            <div className="space-y-6">
                {posts.map((post) => (
                    <div key={post.id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="font-bold text-2xl mb-2">{post.title}</h2>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
                                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => toggleBookmark(post.id)}
                                >
                                    <Bookmark className={`h-5 w-5 ${post.isBookmarked ? 'fill-current' : ''}`} />
                                </Button>
                                <CommonDialog
                                    actionButtonText={``}
                                    buttonIcon={Edit}
                                    title="Edit Post"
                                    variant="ghost"
                                >
                                    <div className="space-y-4">
                                        <Input
                                            value={editPostTitle}
                                            onChange={(e) => setEditPostTitle(e.target.value)}
                                            placeholder={post.title}
                                        />
                                        <textarea
                                            value={editPostContent}
                                            onChange={(e) => setEditPostContent(e.target.value)}
                                            placeholder={post.content}
                                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            rows={5}
                                        />
                                        <Button onClick={() => handleEditPost(post.id)}>Update</Button>
                                    </div>
                                </CommonDialog>
                                <CommonConfirm
                                    title="Delete Post"
                                    description={`Are you sure you want to delete "${post.title}"?`}
                                    actionButtonText="Delete"
                                    actionButtonFn={() => handleDeletePost(post.id)}
                                    variant="ghost"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-6 pt-4 border-t">
                            <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm" className="gap-1">
                                    <Heart className="h-4 w-4" />
                                    <span>{post.likes}</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-1">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>{post.comments}</span>
                                </Button>
                            </div>
                            <Button variant="ghost" size="sm" className="gap-1">
                                <Share2 className="h-4 w-4" />
                                <span>Share</span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}