# Toolkit, Postman

## Запуск

```bash
npm install
npm run dev:local
```

Дополнительно:

```bash
npm run dev:dev
npm run dev:prod
npm run node:vk
npm run node:geoip
```

## Сборки

```bash
npm run build:local
npm run build:dev
npm run build:prod
```

Env-файлы:

- `.env.local`
- `.env.dev`
- `.env.prod`

Для `build:local` используется Vite mode `lab-local`, потому что mode `local` зарезервирован Vite.

## Что сделано

- `task1` - PixiJS: вращение прямоугольника.
- `task2` - Axios GET к `https://vk.com` в браузере и Node.js.
- `task3` - Axios GET к `https://json.geoiplookup.io/` в браузере и Node.js.
- `postman_collection.json` - запросы для Postman: VK, GeoIP, ReqRes users/register/login.

Кратко по результатам: VK в браузере обычно блокируется CORS, в Node.js и Postman CORS не применяется. GeoIP API возвращает JSON и обычно доступен из браузера. В Postman можно смотреть реальные заголовки ответа, включая `Content-Type` и CORS-заголовки.
