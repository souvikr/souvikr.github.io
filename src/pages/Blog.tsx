import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const posts = [
  {
    id: "getting-started-with-react",
    title: "Getting Started with React in 2024",
    excerpt: "A comprehensive guide to starting your React journey with the latest best practices and tools.",
    date: "December 15, 2024",
    readTime: "5 min read",
  },
  {
    id: "typescript-tips",
    title: "10 TypeScript Tips for Better Code",
    excerpt: "Improve your TypeScript skills with these practical tips that will make your code more robust.",
    date: "November 28, 2024",
    readTime: "8 min read",
  },
  {
    id: "building-scalable-apis",
    title: "Building Scalable APIs with Node.js",
    excerpt: "Learn how to design and implement APIs that can handle millions of requests.",
    date: "November 10, 2024",
    readTime: "12 min read",
  },
];

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-4 text-3xl font-bold text-foreground">Blog</h1>
        <p className="mb-12 text-muted-foreground">
          Thoughts on software development, technology, and more.
        </p>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="group border-b border-border pb-8 last:border-0"
            >
              <div className="mb-2 text-sm text-muted-foreground">
                {post.date} · {post.readTime}
              </div>
              <h2 className="mb-2 text-xl font-semibold text-foreground">
                <Link 
                  to={`/blog/${post.id}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
