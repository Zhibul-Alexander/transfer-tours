import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { SiteContent } from "../content/types";
import ContactsBar from "./ContactsBar";

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);
  background: rgba(248, 250, 252, 1);
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  padding-top: env(safe-area-inset-top);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: env(safe-area-inset-top);
    background: rgba(248, 250, 252, 1);
    z-index: -1;
  }
`;

const HeaderInner = styled.div`
  max-width: ${(p) => p.theme.maxWidth}px;
  margin: 0 auto;
  padding: 14px 16px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

const HeaderRow = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    justify-content: space-between;
    order: 1;
  }
`;

const MobileBrand = styled.a`
  display: none;
  color: inherit;
  text-decoration: none;

  &:visited { color: inherit; text-decoration: none; }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  strong {
    font-size: 14px;
    letter-spacing: 0.2px;
  }
`;

const MobileLang = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

const Brand = styled.a`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
  color: inherit;
  text-decoration: none;

  &:visited { color: inherit; text-decoration: none; }

  strong {
    font-size: 14px;
    letter-spacing: 0.2px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 8px;
    order: 2;
  }
`;

const NavLink = styled.a<{ $active?: boolean }>`
  font-size: 13px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid ${(p) => (p.$active ? "rgba(77,163,255,0.4)" : p.theme.colors.border)};
  background: ${(p) => (p.$active ? "rgba(77,163,255,0.12)" : "transparent")};
  color: ${(p) => (p.$active ? p.theme.colors.text : "rgba(30,41,59,0.85)")};
  transition: transform 0.1s ease;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover { transform: translateY(-1px); }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    text-align: center;
    padding: 6px 8px;
    font-size: 11px;
  }
`;

const Lang = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LangBtn = styled.button<{ $active?: boolean }>`
  cursor: pointer;
  border: 1px solid ${(p) => (p.$active ? "rgba(77,163,255,0.4)" : p.theme.colors.border)};
  background: ${(p) => (p.$active ? "rgba(77,163,255,0.12)" : "transparent")};
  color: ${(p) => (p.$active ? p.theme.colors.text : "rgba(30,41,59,0.7)")};
  padding: 8px 10px;
  border-radius: 12px;
  font-size: 12px;
  transition: transform 0.1s ease;

  &:hover { transform: translateY(-1px); }
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  border-top: 1px solid ${(p) => p.theme.colors.border};
  padding: 22px 16px;
  color: ${(p) => p.theme.colors.muted};
`;

const FooterInner = styled.div`
  max-width: ${(p) => p.theme.maxWidth}px;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-size: 12px;

  a, a:visited { color: inherit; text-decoration: none; }

  @media (max-width: 768px) {
    align-items: center;
  }

  a {
    color: ${(p) => p.theme.colors.muted};
    text-decoration: none;

    &:hover {
      color: #4DA3FF;
      text-decoration: underline;
    }
  }

  span {
    color: ${(p) => p.theme.colors.muted};
  }
`;

type Props = {
  content: SiteContent;
  children: React.ReactNode;
  locale: string;
};

export default function Layout({ content, children, locale }: Props) {
  const router = useRouter();
  const contactsHighlightingRef = useRef(false);

  const switchLocale = (nextLocale: "ru" | "en" | "ge") => {
    const currentPath = router.asPath.replace(`/${locale}`, '');
    router.push(`/${nextLocale}${currentPath === '/' ? '' : currentPath}`);
  };

  const isActive = (href: string) => {
    // Используем route для определения активного маршрута (содержит шаблон пути)
    // route будет содержать /[locale], /[locale]/transfers, /[locale]/tours и т.д.
    const route = router.route;
    
    // Определяем текущий путь на основе route
    let currentPath = '/';
    if (route === '/[locale]') {
      currentPath = '/';
    } else if (route === '/[locale]/transfers') {
      currentPath = '/transfers';
    } else if (route === '/[locale]/tours') {
      currentPath = '/tours';
    }
    
    // Также проверяем asPath для надежности (убираем query и hash)
    const asPathClean = router.asPath.split('?')[0].split('#')[0];
    // Убираем locale из пути (сначала /locale/, потом /locale в конце)
    let asPathWithoutLocale = asPathClean.replace(`/${locale}/`, '/').replace(`/${locale}`, '') || '/';
    
    // Нормализуем asPath: убираем trailing slash (кроме корня)
    const normalizedAsPath = asPathWithoutLocale !== '/' && asPathWithoutLocale.endsWith('/') 
      ? asPathWithoutLocale.slice(0, -1) 
      : asPathWithoutLocale;
    
    if (href === "/") {
      return currentPath === "/" || normalizedAsPath === "/" || normalizedAsPath === "";
    }
    return currentPath === href || normalizedAsPath === href;
  };

  const scrollToContacts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactsSection = document.getElementById("contacts");
    const contactsBlock = document.getElementById("contacts-block");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      if (contactsBlock && !contactsHighlightingRef.current) {
        contactsHighlightingRef.current = true;
        contactsBlock.classList.remove("contacts-highlight");
        const startHighlight = () => {
          contactsBlock.classList.add("contacts-highlight");
          setTimeout(() => {
            contactsBlock.classList.remove("contacts-highlight");
            contactsHighlightingRef.current = false;
          }, 2500);
        };
        setTimeout(startHighlight, 400);
      }
    }
  };

  return (
    <Wrap>
      <Header>
        <HeaderInner>
          <Link href={`/${locale}`} passHref legacyBehavior>
            <Brand>
              <strong>{content.brand.name}</strong>
            </Brand>
          </Link>

          <Nav>
            <Link href={`/${locale}`} passHref legacyBehavior>
              <NavLink $active={isActive("/")}>{content.nav.home}</NavLink>
            </Link>
            <Link href={`/${locale}/transfers`} passHref legacyBehavior>
              <NavLink $active={isActive("/transfers")}>{content.nav.transfers}</NavLink>
            </Link>
            <Link href={`/${locale}/tours`} passHref legacyBehavior>
              <NavLink $active={isActive("/tours")}>{content.nav.tours}</NavLink>
            </Link>
            <NavLink href="#contacts" onClick={scrollToContacts}>
              {content.nav.contacts || (content.locale === "ru" ? "Контакты" : content.locale === "ge" ? "კონტაქტები" : "Contacts")}
            </NavLink>
          </Nav>

          <Lang>
            <LangBtn onClick={() => switchLocale("ru")} $active={locale === "ru"}>RU</LangBtn>
            <LangBtn onClick={() => switchLocale("en")} $active={locale === "en"}>EN</LangBtn>
            <LangBtn onClick={() => switchLocale("ge")} $active={locale === "ge"}>GE</LangBtn>
          </Lang>

          <HeaderRow>
            <Link href={`/${locale}`} passHref legacyBehavior>
              <MobileBrand>
                <strong>{content.brand.name}</strong>
              </MobileBrand>
            </Link>

            <MobileLang>
              <LangBtn onClick={() => switchLocale("ru")} $active={locale === "ru"}>RU</LangBtn>
              <LangBtn onClick={() => switchLocale("en")} $active={locale === "en"}>EN</LangBtn>
              <LangBtn onClick={() => switchLocale("ge")} $active={locale === "ge"}>GE</LangBtn>
            </MobileLang>
          </HeaderRow>
        </HeaderInner>
      </Header>

      <ContactsBar content={content} />

      <Main>{children}</Main>

      <Footer>
        <FooterInner>
          <div>© {new Date().getFullYear()} {content.seo.siteName}</div>
          <FooterContacts>
            <div><span>+995 574 408 533</span> <span>|</span> <a href={content.contacts.data.telegram} target="_blank" rel="noreferrer">Telegram</a></div>
            <div><span>+995 577 368 489</span> <span>|</span> <a href={content.contacts.data.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
          </FooterContacts>
        </FooterInner>
      </Footer>
    </Wrap>
  );
}
