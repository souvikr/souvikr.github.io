import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const postsData: Record<string, {
  title: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  "getting-started-with-react": {
    title: "Getting Started with React in 2024",
    date: "December 15, 2024",
    readTime: "5 min read",
    content: `React continues to be one of the most popular frontend libraries in 2024. Whether you're just starting out or coming from another framework, this guide will help you get up to speed.

## Why React?

React's component-based architecture makes it easy to build and maintain complex user interfaces. With features like hooks and the virtual DOM, React provides a great developer experience while maintaining excellent performance.

## Setting Up Your Environment

To get started with React, you'll need Node.js installed on your machine. We recommend using the latest LTS version for stability.

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

## Understanding Components

Components are the building blocks of React applications. They can be as simple as a button or as complex as an entire page.

## Next Steps

Once you're comfortable with the basics, explore state management solutions like Redux or Zustand, and consider using TypeScript for better type safety.`,
  },
  "typescript-tips": {
    title: "10 TypeScript Tips for Better Code",
    date: "November 28, 2024",
    readTime: "8 min read",
    content: `TypeScript has become an essential tool for modern web development. Here are ten tips that will help you write better, more maintainable code.

## 1. Use Strict Mode

Enable strict mode in your tsconfig.json for maximum type safety.

## 2. Prefer Interfaces Over Types

Interfaces are generally more performant and provide better error messages.

## 3. Leverage Utility Types

TypeScript provides built-in utility types like Partial, Pick, and Omit that can save you time.

## 4. Use Const Assertions

Const assertions help you create more precise types from literal values.

## 5. Embrace Generics

Generics allow you to write reusable, type-safe code.

These tips will help you level up your TypeScript skills and write more robust applications.`,
  },
  "building-scalable-apis": {
    title: "Building Scalable APIs with Node.js",
    date: "November 10, 2024",
    readTime: "12 min read",
    content: `Building APIs that can handle millions of requests requires careful planning and the right architecture. Let's explore the key principles.

## Architecture Patterns

Consider using microservices for large-scale applications. This allows you to scale individual services independently.

## Caching Strategies

Implement caching at multiple levels: application, database, and CDN.

## Database Optimization

Use connection pooling, proper indexing, and consider read replicas for heavy read workloads.

## Monitoring and Observability

Implement comprehensive logging, metrics, and tracing to understand your system's behavior.

## Load Testing

Always load test your APIs before deploying to production. Tools like k6 and Artillery can help.

With these principles in mind, you'll be well on your way to building APIs that scale.`,
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? postsData[id] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
          <Link to="/blog" className="mt-4 inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container mx-auto max-w-4xl px-4 py-16">
        <Link 
          to="/blog" 
          className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
        
        <header className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-foreground">{post.title}</h1>
          <div className="text-sm text-muted-foreground">
            {post.date} · {post.readTime}
          </div>
        </header>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="mt-8 mb-4 text-xl font-semibold text-foreground">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('```')) {
              return (
                <pre key={index} className="my-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                  <code>{paragraph.replace(/```\w*\n?/g, '')}</code>
                </pre>
              );
            }
            return (
              <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
