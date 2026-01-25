import type { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { Card, Grid2, H2, List, P, Section } from "../components/Section";
import RoutesTable from "../components/RoutesTable";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";
import { getContent } from "../content/getContent";
import { SiteContent } from "../content/types";

type Props = { content: SiteContent };

export default function TransfersPage({ content }: Props) {
  return (
    <Layout content={content}>
      <Seo
        content={content}
        title={content.transfers.title}
        description={content.transfers.subtitle}
        path="/transfers"
      />
      <Container>
        <Hero
          title={content.transfers.title}
          subtitle={content.transfers.subtitle}
          imageSrc="/images/hero-home.jpg"
          imageAlt="Transfers"
        />

        <Section>
          <H2>{content.transfers.routeTitle}</H2>
          <P>{content.transfers.routeHint}</P>
          <RoutesTable content={content} routes={content.transfers.routes} />
          {content.transfers.routeNote && <P style={{ marginTop: 12, fontSize: 13 }}>{content.transfers.routeNote}</P>}
        </Section>

        <Section>
          <Grid2>
            <Card>
              <H2>{content.transfers.conditionsTitle}</H2>
              <List>
                {content.transfers.conditions.map((c, i) => <li key={i}>{c}</li>)}
              </List>
            </Card>
            <Card>
              <H2>{content.transfers.addonsTitle}</H2>
              <List>
                {content.transfers.addons.map((a, i) => <li key={i}>{a}</li>)}
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
