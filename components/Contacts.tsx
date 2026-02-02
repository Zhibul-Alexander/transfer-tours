import styled from "styled-components";
import { Contacts as C, SiteContent } from "../content/types";

const Card = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.card};
  border-radius: 22px;
  padding: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Column = styled.div`
  display: grid;
  gap: 10px;
`;

const RowLink = styled.div`
  font-size: 13px;
  
  a { 
    color: #4DA3FF; 
    text-decoration: none;
    
    &:visited { color: #4DA3FF; }
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  flex-wrap: wrap;

  a { 
    color: #4DA3FF; 
    text-decoration: none;
    
    &:visited { color: #4DA3FF; }
    
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: ${(p) => p.theme.colors.muted};
  }
`;

type Props = { data: C; content: SiteContent };

export default function Contacts({ data }: Props) {
  return (
    <Card id="contacts-block">
      <Grid>
        <Column>
          <ContactRow>
            <span>+995 574 408 533</span>
            <span>|</span>
            <a href={data.telegram} target="_blank" rel="noreferrer">Telegram</a>
          </ContactRow>
          <ContactRow>
            <span>+995 577 368 489</span>
            <span>|</span>
            <a href={data.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </ContactRow>
          {data.facebook && (
            <ContactRow>
              <a href={data.facebook} target="_blank" rel="noreferrer">Facebook</a>
            </ContactRow>
          )}
        </Column>
      </Grid>
    </Card>
  );
}
