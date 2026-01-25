import Link from "next/link";
import styled from "styled-components";

const Card = styled.a`
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.card};
  border-radius: 22px;
  padding: 18px;
  display: grid;
  gap: 8px;
  transition: transform 0.12s ease;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);

  &:hover { transform: translateY(-2px); }
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 14px;
`;

const Text = styled.div`
  color: ${(p) => p.theme.colors.muted};
  font-size: 13px;
  line-height: 1.55;
`;

type Props = { href: string; title: string; text: string };

export default function LinkCard({ href, title, text }: Props) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Card>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <div style={{ fontSize: 12, color: "#4DA3FF" }}>
          Open →
        </div>
      </Card>
    </Link>
  );
}
