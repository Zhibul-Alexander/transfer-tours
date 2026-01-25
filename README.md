# Transfer & Tours – Next.js (SSG) сайт (RU/EN)

## Быстрый старт
1) Установи зависимости:
```bash
npm i
# или
yarn
```

2) Запусти dev:
```bash
npm run dev
```

Открой: http://localhost:3000

## Прод
Перед генерацией sitemap укажи домен:
- Linux/Mac:
```bash
export SITE_URL="https://your-domain.com"
npm run build
npm run start
```
- Windows (PowerShell):
```powershell
$env:SITE_URL="https://your-domain.com"
npm run build
npm run start
```

## Где менять контент
- `content/ru.ts` и `content/en.ts` – весь текст, цены, маршруты, экскурсии, отзывы, контакты.
- Иконки/картинки: `public/images/*` (сейчас placeholders).

## SEO
- `components/Seo.tsx` – title/description/canonical/OG/Twitter + JSON-LD.
- Sitemap и robots генерятся пакетом `next-sitemap` (после `next build` автоматически).
