# GENESIS Core Audit - Guía de Despliegue

Este documento proporciona instrucciones para desplegar el sitio web de auditoría de GENESIS Core en diferentes plataformas.

## Estructura del Proyecto

```
genesis-audit-site/
├── public/
│   ├── data/
│   │   ├── GENESIS_Audit_summary.json
│   │   └── GENESIS_Audit_inventory.csv
│   ├── downloads/
│   │   ├── GENESIS_Core_Complete_2025-10_v4.zip
│   │   ├── GENESIS_Core_Complete_2025-10_v2_fix.zip
│   │   ├── GENESIS_Core_Complete_2025-10_v2_fix_SHA256.txt
│   │   ├── GENESIS_Core_FullPackage_2025-10_v1.zip
│   │   └── GENESIS_Core_CartaAutenticidad_2025-10_v3.pdf
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .nojekyll
├── src/
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Inventory.jsx
│   │   ├── Downloads.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   └── main.jsx
├── vercel.json
├── netlify.toml
└── README_DEPLOY.md
```

## Despliegue en Vercel

1. Instala Vercel CLI (si no lo tienes):
   ```bash
   npm install -g vercel
   ```

2. Desde el directorio del proyecto:
   ```bash
   vercel
   ```

3. Sigue las instrucciones en pantalla para vincular el proyecto a tu cuenta de Vercel.

4. Para despliegues posteriores:
   ```bash
   vercel --prod
   ```

## Despliegue en Netlify

1. Instala Netlify CLI (si no lo tienes):
   ```bash
   npm install -g netlify-cli
   ```

2. Desde el directorio del proyecto:
   ```bash
   netlify deploy
   ```

3. Para despliegue en producción:
   ```bash
   netlify deploy --prod
   ```

## Despliegue en GitHub Pages

1. Instala gh-pages:
   ```bash
   pnpm add -D gh-pages
   ```

2. Agrega estos scripts a `package.json`:
   ```json
   "scripts": {
     "predeploy": "pnpm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Despliega:
   ```bash
   pnpm run deploy
   ```

4. Configura GitHub Pages en Settings → Pages → Source: gh-pages branch

## Actualización de Contenido

Para publicar una nueva auditoría:

1. Sustituye los archivos en `/public/data/`:
   - `GENESIS_Audit_summary.json`
   - `GENESIS_Audit_inventory.csv`

2. (Opcional) Actualiza los archivos en `/public/downloads/`

3. Re-despliega usando el comando correspondiente a tu plataforma

## Desarrollo Local

Para ejecutar el sitio localmente:

```bash
cd genesis-audit-site
pnpm install
pnpm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Características Implementadas

- ✅ Dashboard con resumen y gráficos
- ✅ Inventario con tabla filtrable
- ✅ Descargas con guía de verificación
- ✅ Página Acerca/Legal
- ✅ Tema claro/oscuro con persistencia
- ✅ Internacionalización ES/EN
- ✅ SEO (Open Graph, Twitter Cards)
- ✅ Favicon y metadatos
- ✅ Pie legal en todas las páginas
- ✅ Configuraciones de despliegue (Vercel, Netlify, GitHub Pages)

## Soporte

Para preguntas o problemas, contacta a Emanuel Pérez Lau.

---

© 2025 Emanuel Pérez Lau — Marca: GENESIS — Concebido por Emanuel con asistencia de IA

