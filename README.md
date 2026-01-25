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

## Деплой на Cloudflare Pages

Проект настроен для **статического экспорта** (Static HTML Export) с папкой `out`.

### Настройка в интерфейсе Cloudflare Pages:

1. **Framework preset**: Выбери **Next.js Static HTML Export**
2. **Build command**: `npm run build`
3. **Build output directory**: `out` (важно указать именно `out`)
4. **Root directory**: `/` (по умолчанию)
5. **Node version**: `20` или выше
   - Перейди в **Settings** → **Environment variables**
   - Добавь переменную: `NODE_VERSION` = `20` (или выше)
6. **Production branch**: `main` (или твоя основная ветка)

### Переменные окружения:

В разделе **Settings** → **Environment variables** добавь:
- **Variable name**: `SITE_URL`
- **Value**: `https://your-domain.com` (твой домен для генерации sitemap)

### Важно:

- Проект использует статический экспорт (`output: 'export'` в `next.config.js`)
- После `npm run build` все файлы генерируются в папку `out/`
- Все страницы статические HTML файлы, не требуется Node.js сервер
- i18n реализован через динамические роуты: `/ru`, `/en`, `/ru/transfers`, `/en/transfers` и т.д.
- Корневой путь `/` автоматически редиректит на `/ru`

### Структура страниц после сборки:

- `/ru` и `/en` (главная)
- `/ru/transfers` и `/en/transfers`
- `/ru/tours` и `/en/tours`

## SEO
- `components/Seo.tsx` – title/description/canonical/OG/Twitter + JSON-LD.
- Sitemap и robots генерятся пакетом `next-sitemap` (после `next build` автоматически).
