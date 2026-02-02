import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Страница не найдена — Georgia Transfer</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Страница не найдена. Трансферы и экскурсии по Грузии." />
      </Head>
      <main
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 24, marginBottom: 8 }}>404 — Страница не найдена</h1>
        <p style={{ color: "#666", marginBottom: 24 }}>
          Такой страницы нет. Перейдите на главную или выберите раздел.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/ru/" style={{ color: "#0d6efd", textDecoration: "underline" }}>
            Главная (RU)
          </Link>
          <Link href="/en/" style={{ color: "#0d6efd", textDecoration: "underline" }}>
            Home (EN)
          </Link>
          <Link href="/ge/" style={{ color: "#0d6efd", textDecoration: "underline" }}>
            მთავარი (GE)
          </Link>
        </div>
      </main>
    </>
  );
}
