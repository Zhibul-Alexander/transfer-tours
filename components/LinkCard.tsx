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

type Props = { href: string; title: string; text: string; locale?: string };

const TitleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
`;

const OpenLink = styled.div`
  font-size: 12px;
  color: #4DA3FF;
`;

export default function LinkCard({ href, title, text, locale }: Props) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Card>
        <TitleRow>
          <Title>{title}</Title>
          <OpenLink>{locale === "ru" ? "Открыть" : locale === "ge" ? "გახსნა" : "Open"} →</OpenLink>
        </TitleRow>
        {text && <Text>{text}</Text>}
      </Card>
    </Link>
  );
}
