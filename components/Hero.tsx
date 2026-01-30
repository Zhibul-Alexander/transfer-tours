import styled from "styled-components";

const Wrap = styled.section`
  padding: 42px 0 18px;
`;

const Card = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.card};
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  width: 100%;
`;

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: 34px;
  line-height: 1.15;

  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

const Sub = styled.p`
  margin: 0;
  color: ${(p) => p.theme.colors.muted};
  font-size: 14px;
  line-height: 1.6;
`;

type Props = {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Hero({ title, subtitle }: Props) {
  return (
    <Wrap>
      <Card>
        <Title>{title}</Title>
        <Sub>{subtitle}</Sub>
      </Card>
    </Wrap>
  );
}
