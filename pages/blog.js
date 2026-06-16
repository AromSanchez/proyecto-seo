import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../data/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Head>
        <title>Blog SEO | Mi Sitio Optimizado</title>
        <meta name="description" content="Lee consejos y guías SEO para mejorar el tráfico de tu sitio web." />
        <meta property="og:title" content="Blog SEO | Mi Sitio Optimizado" />
        <meta property="og:description" content="Encuentra estrategias SEO prácticas y ejemplos reales para posicionar mejor tu sitio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/blog" />
      </Head>

      <h1>Blog de SEO</h1>
      <p>Publicaciones diseñadas para ayudarte a optimizar tu web y atraer más visitas.</p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
