import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
  loading: () => <p>Cargando contenido optimizado...</p>,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio SEO</title>
        <meta
          name="description"
          content="Bienvenido a Mi Sitio SEO: guía práctica de Next.js y optimización web."
        />
        <meta property="og:title" content="Inicio | Mi Sitio SEO" />
        <meta
          property="og:description"
          content="Guía SEO y rendimiento en Next.js para mejorar tu posicionamiento en Google."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/" />
      </Head>

      <h1>Bienvenido</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
      <DynamicComponent />
    </>
  );
}
