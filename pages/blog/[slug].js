import Head from "next/head";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../data/posts";
export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}
export default function BlogPost({ post }) {
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title} | Blog SEO</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | Blog SEO`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://mi-sitio.com/blog/${post.slug}`} />
      </Head>

      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href="/blog">
          <a>Volver al blog</a>
        </Link>
      </article>
    </>
  );
}
