import styled from "styled-components";
import Image from "next/image";

const Wrap = styled.section`
  padding: 42px 0 18px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.card};
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
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

const ImgWrap = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.bg};
  border-radius: 22px;
  overflow: hidden;
  min-height: 220px;
`;

type Props = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
};

export default function Hero({ title, subtitle, imageSrc, imageAlt }: Props) {
  return (
    <Wrap>
      <Grid>
        <Card>
          <Title>{title}</Title>
          <Sub>{subtitle}</Sub>
        </Card>
        <ImgWrap>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={180}
            height={130}
            priority
            unoptimized
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ImgWrap>
      </Grid>
    </Wrap>
  );
}
