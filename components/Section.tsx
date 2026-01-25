import styled from "styled-components";

export const Section = styled.section`
  padding: 16px 0;
`;

export const H2 = styled.h2`
  margin: 0 0 12px;
  font-size: 20px;
`;

export const P = styled.p`
  margin: 0 0 10px;
  color: ${(p) => p.theme.colors.muted};
  line-height: 1.6;
  font-size: 14px;
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.card};
  border-radius: 22px;
  padding: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: ${(p) => p.theme.colors.muted};
  line-height: 1.65;
  font-size: 14px;

  li { margin: 6px 0; }
`;
