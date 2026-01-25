import type { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { Card, Grid2, H2, List, P, Section } from "../components/Section";
import ToursGrid from "../components/ToursGrid";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";
import { getContent } from "../content/getContent";
import { SiteContent } from "../content/types";

type Props = { content: SiteContent };

export default function ToursPage({ content }: Props) {
  return (
    <Layout content={content}>
      <Seo
        content={content}
        title={content.tours.title}
        description={content.tours.subtitle}
        path="/tours"
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
          <Grid2>
            <Card>
              <H2>{content.tours.allTitle}</H2>
              <P>{content.locale === "ru"
                ? "Если вы не нашли нужное направление — напишите, сделаем индивидуальный маршрут."
                : "If you don’t see your direction — message us and we’ll tailor a custom route."}</P>
            </Card>
            <Card>
              <H2>{content.locale === "ru" ? "Список направлений" : "Directions list"}</H2>
              <List>
                {content.tours.allDirections.map((d, i) => <li key={i}>{d}</li>)}
              </List>
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
