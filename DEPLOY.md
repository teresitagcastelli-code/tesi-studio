# Deploy · tesi-next → tesistudio.com

## Qué hay aquí

Proyecto Next.js 14. Reemplaza el sitio anterior (React + Babel).

**Rutas reales (SEO):**
- `/` → Home
- `/portfolio` → Obra (Miniaturas + Ventana)
- `/about` → Statement + Bio
- `/textos` → Listado de ensayos
- `/textos/[id]` → Artículo individual (indexable por Google)
- `/contacto` → Contacto

**Nuevo design system:**
- Tipografía: Marcellus (serif, headings) + Raleway (sans, body)
- Colores: blanco · crema #f5f0e7 · negro #1e1e1e · gris #888888

---

## Para editar contenido

**Un único archivo:** `lib/content.js`

- Para cambiar textos, bio, taglines → editar en `CONTENT.es` / `CONTENT.en`
- Para agregar una pieza nueva:
  1. Subir la foto a `public/assets/obra/<serie>/<id>.jpg`
  2. Agregar objeto al array `pieces` de la serie en `content.js`
- Para agregar una entrada al blog:
  1. Agregar objeto a `CONTENT.es.textos.items` (y su traducción en `.en`)
  2. Agregar la URL a `public/sitemap.xml`

---

## Primeros pasos para deployar

### Paso 1 — Copiar assets

Copiar la carpeta `assets/` y `fonts/` de la versión anterior:
```
production/assets/ → tesi-next/public/assets/
```
(Las fotos de obra, portrait.jpg, el video del hero van ahí.)

### Paso 2 — Subir a GitHub

Podés reemplazar el repo existente `rodrigo-jetpacks/tesi-studio` o crear uno nuevo.

**Opción A — reemplazar el repo actual:**
```bash
# Dentro de la carpeta tesi-next/:
git init
git remote add origin https://github.com/rodrigo-jetpacks/tesi-studio.git
git add .
git commit -m "feat: migración a Next.js — nuevo design system"
git push --force origin main
```

**Opción B — repo nuevo:**
1. Crear repo en GitHub (ej: `tesi-portfolio`)
2. En Vercel, vincular el nuevo repo al dominio `tesistudio.com`

### Paso 3 — Configurar Vercel

Vercel detecta Next.js automáticamente. Solo necesita:
- **Framework**: Next.js (auto-detectado)
- **Build command**: `next build` (default)
- **Output**: `.next` (default)
- **Root directory**: dejar vacío (o `./`)

No hace falta ninguna variable de entorno.

### Paso 4 — Dominio

En Vercel → Settings → Domains: confirmar que `tesistudio.com` apunta al nuevo deploy.

---

## Cómo agrega entradas al blog en el futuro

1. Abrir `lib/content.js`
2. En `CONTENT.es.textos.items`, agregar al principio del array:
```js
{
  id:       "nombre-del-texto",   // se convierte en URL: /textos/nombre-del-texto
  n:        "07",                 // número siguiente
  category: "Pensamiento",        // o "Proceso" / "Obra"
  date:     "27 May 2026",
  title:    "Título del texto",
  dek:      "Subtítulo breve.",
  excerpt:  "Primera línea visible en el listado.",
  body: [
    "Primer párrafo.",
    "Segundo párrafo.",
  ],
},
```
3. Agregar la URL en `public/sitemap.xml`
4. Hacer push → Vercel deploya automáticamente
