import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    // Редирект на дефолтную локаль
    window.location.href = "/ru";
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/ru" />
      </Head>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <p>Redirecting to <a href="/ru">/ru</a>...</p>
      </div>
    </>
  );
}
