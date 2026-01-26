import Link from "next/link";
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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  strong {
    font-size: 14px;
    letter-spacing: 0.2px;
  }

  span {
    display: none;
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

  strong {
    font-size: 14px;
    letter-spacing: 0.2px;
  }

  span {
    font-size: 12px;
    color: ${(p) => p.theme.colors.muted};
    
    @media (max-width: 768px) {
      display: none;
    }
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

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
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

  &:hover { transform: translateY(-1px); }

  @media (max-width: 768px) {
    flex: 1;
    text-align: center;
    padding: 10px 8px;
    font-size: 12px;
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
  align-items: center;
  gap: 8px;
  font-size: 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
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

  const switchLocale = (nextLocale: "ru" | "en") => {
    const currentPath = router.asPath.replace(`/${locale}`, '');
    router.push(`/${nextLocale}${currentPath === '/' ? '' : currentPath}`);
  };

  const isActive = (href: string) => {
    const currentPath = router.asPath.replace(`/${locale}`, '');
    if (href === "/") return currentPath === "/" || currentPath === "";
    return currentPath === href;
  };

  const scrollToContacts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
              {content.locale === "ru" ? "Контакты" : "Contacts"}
            </NavLink>
          </Nav>

          <Lang>
            <LangBtn onClick={() => switchLocale("ru")} $active={locale === "ru"}>RU</LangBtn>
            <LangBtn onClick={() => switchLocale("en")} $active={locale === "en"}>EN</LangBtn>
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
            {content.contacts.data.phone && (
              <>
                <span>{content.contacts.data.phone}</span>
                <span>|</span>
              </>
            )}
            <a href={content.contacts.data.telegram} target="_blank" rel="noreferrer">Telegram</a>
            <span>|</span>
            <a href={content.contacts.data.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </FooterContacts>
        </FooterInner>
      </Footer>
    </Wrap>
  );
}
