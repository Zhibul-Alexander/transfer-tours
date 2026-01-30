import type { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";
import { Card, H2, List, P, Section } from "../../components/Section";
import ToursGrid from "../../components/ToursGrid";
import Reviews from "../../components/Reviews";
import Contacts from "../../components/Contacts";
import { getContent } from "../../content/getContent";
import { SiteContent } from "../../content/types";

type Props = { content: SiteContent; locale: string };

export default function ToursPage({ content, locale }: Props) {
  return (
    <Layout content={content} locale={locale}>
      <Seo
        content={content}
        title={content.tours.title}
        description={content.tours.subtitle}
        path={`/${locale}/tours`}
      />
      <Container>
        <Hero
          title={content.tours.title}
          subtitle={content.tours.subtitle}
          imageSrc="/images/hero-home.jpg"
          imageAlt="Tours"
        />

        <Section>
          <H2>{content.tours.featuredTitle}</H2>
          <ToursGrid items={content.tours.featured} />
        </Section>

        <Section>
          <Card>
            <H2>{content.tours.allTitle}</H2>
            <P>{content.tours.allDirectionsSubtitle}</P>
            <div style={{ marginTop: "2rem" }}>
              <List>
                {content.tours.allRoutes.map((route, index) => (
                  <li key={index} style={{ marginBottom: "0.75rem" }}>
                    <strong>{route.name}</strong>
                    <br />
                    <span style={{ color: "var(--text-secondary, #666)" }}>{route.description}</span>
                  </li>
                ))}
              </List>
            </div>
          </Card>
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { locale: 'ru' } },
      { params: { locale: 'en' } },
      { params: { locale: 'ge' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const locale = params?.locale as string || 'ru';
  return {
    props: {
      content: getContent(locale),
      locale,
    },
  };
};
