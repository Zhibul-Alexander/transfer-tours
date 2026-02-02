import styled from "styled-components";
import { Review } from "../content/types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.a`
  display: block;
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.card};
  border-radius: 22px;
  padding: 16px;
  transition: transform 0.12s ease;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);

  &:hover { transform: translateY(-2px); }
`;

const Name = styled.div`
  font-weight: 700;
  margin-bottom: 8px;
  font-size: 13px;
`;

const Text = styled.div`
  color: ${(p) => p.theme.colors.muted};
  line-height: 1.6;
  font-size: 13px;
`;

type Props = { items: Review[] };

export default function Reviews({ items }: Props) {
  const reviewsChannelLink = "https://t.me/+995574408533";
  
  return (
    <Grid>
      {items.map((r, idx) => (
        <Card key={idx} href={reviewsChannelLink} target="_blank" rel="noreferrer">
          <Name>{r.name}</Name>
          <Text>{r.text}</Text>
          <div style={{ marginTop: 10, fontSize: 12, color: "#4DA3FF" }}>
            Telegram →
          </div>
        </Card>
      ))}
    </Grid>
  );
}
