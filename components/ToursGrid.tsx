import styled from "styled-components";
import Image from "next/image";
import { FeaturedTour } from "../content/types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.card};
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
`;

const Img = styled.div`
  height: 180px;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

const Body = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 6px;
  font-size: 16px;
`;

const Meta = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  color: ${(p) => p.theme.colors.muted};
  margin-bottom: 8px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.muted};
`;

type Props = { items: FeaturedTour[] };

export default function ToursGrid({ items }: Props) {
  return (
    <Grid>
      {items.map((t) => (
        <Card key={t.id}>
          <Img>
            <Image
              src={t.image}
              alt={t.title}
              width={720}
              height={360}
              unoptimized
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Img>
          <Body>
            <Title>{t.title}</Title>
            <Meta>
              <span>⏱ {t.duration}</span>
              <span>•</span>
              <span>⭐ {t.highlight}</span>
            </Meta>
            <Text>{t.highlight}</Text>
          </Body>
        </Card>
      ))}
    </Grid>
  );
}
