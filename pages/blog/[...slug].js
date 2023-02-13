import { useRouter } from "next/router";

// catch-all route
function BlogPostsPage() {
  const router = useRouter();
  console.log({ query: router.query });

  return (
    <div>
      <h1>Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
