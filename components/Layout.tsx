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
  background: rgba(248, 250, 252, 0.85);
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

const HeaderInner = styled.div`
  max-width: ${(p) => p.theme.maxWidth}px;
  margin: 0 auto;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Brand = styled.a`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    font-size: 14px;
    letter-spacing: 0.2px;
  }

  span {
    font-size: 12px;
    color: ${(p) => p.theme.colors.muted};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const NavLink = styled.a<{ $active?: boolean }>`
  font-size: 13px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid ${(p) => (p.$active ? "rgba(77,163,255,0.4)" : p.theme.colors.border)};
  background: ${(p) => (p.$active ? "rgba(77,163,255,0.12)" : "transparent")};
  color: ${(p) => (p.$active ? p.theme.colors.text : "rgba(30,41,59,0.85)")};
  transition: transform 0.1s ease;

  &:hover { transform: translateY(-1px); }
`;

const Lang = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
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
`;

const FooterContacts = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  flex-wrap: wrap;

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
};

export default function Layout({ content, children }: Props) {
  const router = useRouter();

  const switchLocale = async (nextLocale: "ru" | "en") => {
    await router.push(router.asPath, router.asPath, { locale: nextLocale });
  };

  const isActive = (href: string) => {
    const p = router.pathname;
    if (href === "/") return p === "/";
    return p === href;
  };

  return (
    <Wrap>
      <Header>
        <HeaderInner>
          <Link href="/" passHref legacyBehavior>
            <Brand>
              <strong>{content.brand.name}</strong>
              <span>{content.brand.tagline}</span>
            </Brand>
          </Link>

          <Nav>
            <Link href="/" passHref legacyBehavior>
              <NavLink $active={isActive("/")}>{content.nav.home}</NavLink>
            </Link>
            <Link href="/transfers" passHref legacyBehavior>
              <NavLink $active={isActive("/transfers")}>{content.nav.transfers}</NavLink>
            </Link>
            <Link href="/tours" passHref legacyBehavior>
              <NavLink $active={isActive("/tours")}>{content.nav.tours}</NavLink>
            </Link>
          </Nav>

          <Lang>
            <LangBtn onClick={() => switchLocale("ru")} $active={(router.locale || "ru") === "ru"}>RU</LangBtn>
            <LangBtn onClick={() => switchLocale("en")} $active={(router.locale || "ru") === "en"}>EN</LangBtn>
          </Lang>
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
