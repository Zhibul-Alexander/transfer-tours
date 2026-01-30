import styled from "styled-components";
import type { RoutePrice, SiteContent } from "../content/types";

const TableWrap = styled.div`
  overflow-x: auto;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 18px;
  background: ${(p) => p.theme.colors.card};
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  th, td {
    text-align: left;
    padding: 12px 14px;
    border-bottom: 1px solid ${(p) => p.theme.colors.border};
    font-size: 13px;
  }

  th { color: ${(p) => p.theme.colors.muted}; font-weight: 600; }
  tr:last-child td { border-bottom: none; }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Badge = styled.span<{ $variant?: "car" | "minivan" }>`
  display: inline-flex;
  padding: 5px 9px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid ${(p) => (p.$variant === "minivan" ? "rgba(124,92,255,0.4)" : "rgba(77,163,255,0.4)")};
  background: ${(p) => (p.$variant === "minivan" ? "rgba(124,92,255,0.12)" : "rgba(77,163,255,0.12)")};
`;

const CardsContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: grid;
    gap: 12px;
  }
`;

const RouteCard = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 16px;
  padding: 16px;
  background: ${(p) => p.theme.colors.card};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RouteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
`;

const RoutePath = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

const RouteFrom = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: ${(p) => p.theme.colors.text};
`;

const RouteArrow = styled.span`
  color: ${(p) => p.theme.colors.muted};
  font-size: 14px;
  flex-shrink: 0;
`;

const RouteTo = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: ${(p) => p.theme.colors.text};
`;

const RoutePriceText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${(p) => p.theme.colors.text};
`;

const RouteFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
`;

const RouteLabel = styled.span`
  font-size: 12px;
  color: ${(p) => p.theme.colors.muted};
`;

type Props = {
  content: SiteContent;
  routes: RoutePrice[];
};

export default function RoutesTable({ content, routes }: Props) {
  return (
    <>
      <TableWrap>
        <Table>
          <thead>
            <tr>
              <th>{content.locale === "ru" ? "Откуда" : content.locale === "ge" ? "საიდან" : "From"}</th>
              <th>{content.locale === "ru" ? "Куда" : content.locale === "ge" ? "სად" : "To"}</th>
              <th>{content.locale === "ru" ? "Транспорт" : content.locale === "ge" ? "ტრანსპორტი" : "Vehicle"}</th>
              <th>{content.locale === "ru" ? "Цена от" : content.locale === "ge" ? "ფასი დან" : "Price from"}</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((r, idx) => (
              <tr key={idx}>
                <td>{r.from}</td>
                <td>{r.to}</td>
                <td>
                  <Badge $variant={r.transport}>
                    {r.transport === "car" ? content.transfers.transportTitles.car : content.transfers.transportTitles.minivan}
                  </Badge>
                </td>
                <td><strong>{r.priceFrom}</strong></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>

      <CardsContainer>
        {routes.map((r, idx) => (
          <RouteCard key={idx}>
            <RouteHeader>
              <RoutePath>
                <RouteFrom>{r.from}</RouteFrom>
                <RouteArrow>→</RouteArrow>
                <RouteTo>{r.to}</RouteTo>
              </RoutePath>
              <RoutePriceText>{r.priceFrom}</RoutePriceText>
            </RouteHeader>
            <RouteFooter>
              <RouteLabel>{content.locale === "ru" ? "Транспорт" : content.locale === "ge" ? "ტრანსპორტი" : "Vehicle"}</RouteLabel>
              <Badge $variant={r.transport}>
                {r.transport === "car" ? content.transfers.transportTitles.car : content.transfers.transportTitles.minivan}
              </Badge>
            </RouteFooter>
          </RouteCard>
        ))}
      </CardsContainer>
    </>
  );
}
