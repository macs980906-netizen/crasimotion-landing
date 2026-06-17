# CresiMotion — Landing Page

Landing page premium para **CresiMotion**, plataforma de transformación
emocional. Su objetivo es guiar al usuario a instalar **Expo Go** y abrir la
aplicación mediante el botón principal **“Comenzar ahora”**.

## Tecnologías

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Diseño mobile-first y componentes reutilizables

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Descripción                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Servidor de desarrollo        |
| `npm run build` | Compilación de producción     |
| `npm run start` | Servir la build de producción |
| `npm run lint`  | Linter                        |

## Configuración

Los valores ajustables viven en [`lib/config.ts`](./lib/config.ts):

- `EXPO_APP_URL` — enlace profundo que abre la app dentro de Expo Go.
- `EXPO_GO_ANDROID_URL` / `EXPO_GO_IOS_URL` — enlaces de descarga de Expo Go.
- `CONTACT_EMAIL` — correo de contacto.
- `FAQ_ACCOUNT_ANSWER` — respuesta editable del FAQ sobre cuentas.

### Google Analytics 4

Define el ID de medición en una variable de entorno (ver `.env.example`):

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Eventos enviados:

- `click_expo_android`
- `click_expo_ios`
- `click_comenzar`
- `click_aviso_privacidad`

## Identidad visual

| Token            | Color     |
| ---------------- | --------- |
| Verde principal  | `#14B88F` |
| Verde secundario | `#0F8A6B` |
| Azul corporativo | `#0D2E5C` |
| Fondo            | `#F8FAFC` |
| Texto principal  | `#1E293B` |
