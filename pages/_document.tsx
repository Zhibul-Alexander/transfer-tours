import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const pathname = ctx.pathname ?? "";
      return {
        ...initialProps,
        pathname,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      } as DocumentInitialProps & { pathname: string };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const pathname = (this.props as { pathname?: string }).pathname ?? "";
    const locale = pathname.split("/")[1];
    const lang = locale === "ge" ? "ka" : locale === "en" || locale === "ru" ? locale : "ru";

    return (
      <Html lang={lang}>
        <Head>
          <meta name="theme-color" content="#F8FAFC" />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
