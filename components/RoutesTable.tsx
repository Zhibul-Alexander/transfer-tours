import styled from "styled-components";
import { RoutePrice, SiteContent } from "../content/types";

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
`;

const Badge = styled.span<{ $variant?: "car" | "minivan" }>`
  display: inline-flex;
  padding: 5px 9px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid ${(p) => (p.$variant === "minivan" ? "rgba(124,92,255,0.4)" : "rgba(77,163,255,0.4)")};
  background: ${(p) => (p.$variant === "minivan" ? "rgba(124,92,255,0.12)" : "rgba(77,163,255,0.12)")};
`;

type Props = {
  content: SiteContent;
  routes: RoutePrice[];
};

export default function RoutesTable({ content, routes }: Props) {
  return (
    <TableWrap>
      <Table>
        <thead>
          <tr>
            <th>{content.locale === "ru" ? "Откуда" : "From"}</th>
            <th>{content.locale === "ru" ? "Куда" : "To"}</th>
            <th>{content.locale === "ru" ? "Транспорт" : "Vehicle"}</th>
            <th>{content.locale === "ru" ? "Цена от" : "Price from"}</th>
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
  );
}
