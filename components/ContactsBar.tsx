import styled from "styled-components";
import { SiteContent } from "../content/types";

const Bar = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.bg};
`;

const Inner = styled.div`
  max-width: ${(p) => p.theme.maxWidth}px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Hint = styled.div`
  font-size: 12px;
  color: ${(p) => p.theme.colors.muted};
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Btn = styled.a<{ $variant?: "primary" | "secondary" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 14px;
  font-size: 12px;
  border: 1px solid rgba(77,163,255,0.4);
  background: rgba(77,163,255,0.12);
  color: ${(p) => p.theme.colors.text};

  &:hover {
    filter: brightness(0.95);
  }
`;

type Props = { content: SiteContent };

export default function ContactsBar({ content }: Props) {
  const { telegram, whatsapp } = content.contacts.data;

  return (
    <Bar>
      <Inner>
        <Hint>{content.contacts.hint}</Hint>
        <Actions>
          <Btn href={telegram} target="_blank" rel="noreferrer" $variant="primary">
            {content.cta.primary}
          </Btn>
          <Btn href={whatsapp} target="_blank" rel="noreferrer" $variant="secondary">
            {content.cta.secondary}
          </Btn>
        </Actions>
      </Inner>
    </Bar>
  );
}
