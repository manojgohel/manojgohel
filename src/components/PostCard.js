import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-4 md:mb-8">
      <div className="w-full md:w-1/3 relative aspect-[16/9] md:aspect-[4/3]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between p-4 md:p-6 md:w-2/3">
        <div>
          <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
            <span className="px-2 md:px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full">
              {post.category}
            </span>
            <time className="text-xs md:text-sm text-gray-500">
              {post.date}
            </time>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 hover:text-blue-600">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="text-sm md:text-base text-gray-600 line-clamp-2 md:line-clamp-3">
            {post.description}
          </p>
        </div>
        <div className="mt-3 md:mt-4">
          <Link
            href={`/posts/${post.slug}`}
            className="text-sm md:text-base text-blue-600 font-semibold hover:text-blue-700"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
