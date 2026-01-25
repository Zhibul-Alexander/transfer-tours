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
    
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: ${(p) => p.theme.colors.muted};
  }
`;

type Props = { data: C; content: SiteContent };

export default function Contacts({ data, content }: Props) {
  const labels = content.contacts.labels || {};
  
  return (
    <Card>
      <Grid>
        {/* Колонка 1: Телефон | Telegram | WhatsApp, Отзывы, Можно выбрать машину, Программы экскурсий */}
        <Column>
          <ContactRow>
            {data.phone && (
              <>
                <span>{data.phone}</span>
                <span>|</span>
              </>
            )}
            <a href={data.telegram} target="_blank" rel="noreferrer">Telegram</a>
            <span>|</span>
            <a href={data.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </ContactRow>
          {data.telegramReviews && (
            <RowLink>
              <a href={data.telegramReviews} target="_blank" rel="noreferrer">
                {labels.reviews || (content.locale === "ru" ? "Отзывы" : "Reviews")}
              </a>
            </RowLink>
          )}
          {data.telegramChooseCar && (
            <RowLink>
              <a href={data.telegramChooseCar} target="_blank" rel="noreferrer">
                {labels.chooseCar || (content.locale === "ru" ? "Можно выбрать машину" : "Choose a car")}
              </a>
            </RowLink>
          )}
          {data.telegramTours && (
            <RowLink>
              <a href={data.telegramTours} target="_blank" rel="noreferrer">
                {labels.tours || (content.locale === "ru" ? "Программы экскурсий" : "Tour programs")}
              </a>
            </RowLink>
          )}
        </Column>

        {/* Колонка 2: Instagram, Facebook, VK, Email */}
        <Column>
          {data.instagram && (
            <RowLink>
              <a href={data.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </RowLink>
          )}
          {data.facebook && (
            <RowLink>
              <a href={data.facebook} target="_blank" rel="noreferrer">Facebook</a>
            </RowLink>
          )}
          {data.vk && (
            <RowLink>
              <a href={data.vk} target="_blank" rel="noreferrer">VK</a>
            </RowLink>
          )}
          {data.email && (
            <RowLink>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </RowLink>
          )}
        </Column>
      </Grid>
    </Card>
  );
}
