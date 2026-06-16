import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio SEO</title>
        <meta name="description" content="Contacta con expertos en SEO y mejora tu visibilidad online con una estrategia efectiva." />
        <meta property="og:title" content="Contacto | Mi Sitio SEO" />
        <meta property="og:description" content="Ponte en contacto para recibir asesoría SEO, auditoría técnica y optimización de contenido." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/contacto" />
      </Head>

      <h1>Contacto</h1>
      <p>Escribe si necesitas ayuda con SEO, contenido o rendimiento web.</p>
      <address>
        <strong>Email:</strong> contacto@mi-sitio.com
      </address>
      <p>También puedes llenar el formulario en tu plataforma de preferencia.</p>
    </>
  );
}
