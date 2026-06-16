import { getAllPosts } from "../../data/posts";

const BASE_URL = "https://proyecto-seo.netlify.app";

export default async function handler(req, res) {
  const staticUrls = ["/", "/blog", "/contacto"];
  const posts = getAllPosts();
  const allUrls = [
    ...staticUrls,
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `<url><loc>${BASE_URL}${url}</loc><lastmod>${new Date()
        .toISOString()
        .split("T")[0]}</lastmod></url>`
    )
    .join("\n  ")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
