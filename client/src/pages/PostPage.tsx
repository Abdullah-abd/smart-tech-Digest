import React, { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import { designPosts } from "../assets/designPosts";
import { posts } from "../assets/posts";
import { techPosts } from "../assets/techPosts";

// Cloudinary imports
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../utils/cloudinary"; // Your configured Cloudinary instance
type Post = (typeof posts)[keyof typeof posts][number];

const PostPage: React.FC = () => {
  const [, params] = useRoute("/posts/:id");
  const postId = params?.id;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const allPosts = [
      ...Object.values(posts).flat(), // flatten all country-specific posts
      ...techPosts,
      ...designPosts,
    ];
    const found = allPosts.find((p) => p.id === postId);
    setPost(found || null);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-lightbg flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-3xl text-watermelon font-bold mb-2">
            Post Not Found
          </h1>
          <p className="text-muted mb-4">
            Sorry, the article you're looking for doesn’t exist.
          </p>
          <Link href="/">
            <a className="bg-watermelon text-white px-5 py-2 rounded-full hover:bg-rose-500 transition text-sm">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lightbg">
      {/* Top Watermelon Section */}
      <section className="bg-watermelon text-white py-10 px-6 md:px-16 rounded-b-3xl shadow">
        <div className="max-w-4xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
          <Link href="/">
            <a className="bg-white text-watermelon px-5 py-2 rounded-full font-medium text-sm hover:bg-mint hover:text-gray-800 transition">
              ← Back to Home
            </a>
          </Link>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 py-10 bg-white mt-6 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image (local or Cloudinary) */}
          <div className="md:w-1/2">
            {post.image && (
              <>
                {post.image.startsWith("/") ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-cover rounded-lg shadow"
                  />
                ) : (
                  <AdvancedImage
                    cldImg={cld.image(post.image).resize(fill().width(600))}
                    className="w-full h-auto object-cover rounded-lg shadow"
                  />
                )}
              </>
            )}
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {post.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed text-base">
              {post.content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPage;
