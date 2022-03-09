# [Challenge Skydropx](challenge-skydropx.netlify.app/)

---

Este es un proyecto [Next.js](https://nextjs.org/) construido con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Empezar

#### 1. clonar el repositorio:

```bash
git clone https://github.com/mar-js/challenge-skydropx.git
```

#### 2. instalar las dependencias:

```bash
npm i
# or
yarn install
```

#### 3. debes poner tu API_KEY en un archivo llamado `/.env.local` para no tener problemas con las peticiones al servidor:

![Code API_KEY](/src/assets/images/code-api_key.png "Code API_KEY")

_Para saber más sobre las env en next usadas en el navegador entra a: [Next env](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)_

#### 4. levanta un servidor local para el desarrollo:

```bash
npm run dev
# or
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) con tú navegador para ver el resultado.

Puede comenzar a editar la página modificando `pages/index.tsx`. La página se actualiza automáticamente a medida que edita el archivo.

### Nota:

- La app tiene integrado [Eslint](https://eslint.org/) y ya tiene unas reglas configuradas, para cambiarlas tines que ir a `/.eslintrc.json` ahí podes agregar, eliminar o cambiar reglas.

## Aprende más

Para obtener más información sobre Next.js, eche un vistazo a los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - aprende sobre Next.js: características y API.
- [Learn Next.js](https://nextjs.org/learn) - un tutorial interactivo.

Puedes revisar [the Next.js GitHub repository](https://github.com/vercel/next.js/) - ¡Sus comentarios y contribuciones son bienvenidos!

## Deploy en Netlify

La app está subida en Netlify que con tan solo decirle y darle permiso al repositorio se encargará de hacer deploy, automáticamente le instalará dependencias para que la app pueda correr sin ningún inconveniente y al hacer cambios en el repositorio de la app, Netlify hará de vuelta el deploy para tener las ultimas actualizaciones.

- [Netfliy](https://www.netlify.com/) - entra a su pagina para conocer más.
