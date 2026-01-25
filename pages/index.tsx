import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { Card, Grid2, H2, List, P, Section } from "../components/Section";
import LinkCard from "../components/LinkCard";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";
import { getContent } from "../content/getContent";
import { SiteContent } from "../content/types";

type Props = { content: SiteContent };

export default function Home({ content }: Props) {
  const router = useRouter();
  const path = router.pathname === "/" ? "/" : router.pathname;

  return (
    <Layout content={content}>
      <Seo content={content} path={path} />
      <Container>
        <Hero
          title={content.home.title}
          subtitle={content.home.subtitle}
          imageSrc="/images/hero-home.jpg"
          imageAlt="Transfers and tours"
        />

        <Section>
          <Grid2>
            <Card>
              <H2>{content.locale === "ru" ? "Почему удобно" : "Why it’s easy"}</H2>
              <List>
                {content.home.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </List>
            </Card>
            <Card>
              <H2>{content.locale === "ru" ? "Быстрые ссылки" : "Quick links"}</H2>
              <P>{content.locale === "ru"
                ? "Открой нужный раздел — цены/маршруты или экскурсии."
                : "Open what you need — routes/prices or tours."}</P>
              <div style={{ display: "grid", gap: 12 }}>
                {content.home.cards.map((c) => (
                  <LinkCard key={c.href} href={c.href} title={c.title} text={c.text} />
                ))}
              </div>
            </Card>
          </Grid2>
        </Section>

        <Section>
          <H2>{content.reviews.title}</H2>
          <Reviews items={content.reviews.items} />
        </Section>

        <Section id="contacts">
          <H2>{content.contacts.title}</H2>
          <P>{content.contacts.hint}</P>
          <Contacts data={content.contacts.data} content={content} />
        </Section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  return {
    props: {
      content: getContent(locale),
    },
  };
};
