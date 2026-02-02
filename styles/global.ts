import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { padding: 0; margin: 0; }
  html {
    background: #F8FAFC;
  }
  body {
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif;
    background: radial-gradient(1200px 600px at 20% 0%, rgba(77,163,255,0.08), transparent 60%),
                radial-gradient(900px 500px at 90% 10%, rgba(124,92,255,0.06), transparent 55%),
                #F8FAFC;
    color: #1E293B;
  }
  a { color: inherit; text-decoration: none; }
  a:visited { color: inherit; }
  img { max-width: 100%; display: block; }
  ::selection { background: rgba(77,163,255,0.2); }

  @keyframes contactsHighlight {
    0% { box-shadow: 0 0 0 0 rgba(77, 163, 255, 0.4); }
    50% { box-shadow: 0 0 0 12px rgba(77, 163, 255, 0.15); }
    100% { box-shadow: 0 0 0 0 rgba(77, 163, 255, 0); }
  }

  #contacts-block.contacts-highlight {
    animation: contactsHighlight 1s ease-out 2;
  }
`;
