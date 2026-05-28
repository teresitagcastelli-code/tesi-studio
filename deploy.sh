#!/bin/bash
# ============================================================
# deploy.sh — Tesi Studio · Subir a GitHub → Vercel deploya
# ============================================================
# Ejecutar desde Terminal:
#   cd "/ruta/a/tesi-next"
#   bash deploy.sh

set -e

REPO="https://github.com/teresitagcastelli-code/tesi-studio.git"

echo ""
echo "🚀 Iniciando deploy de tesi-next a GitHub..."
echo ""

# 1. Borrar .git corrupto si existe
if [ -d ".git" ]; then
  echo "→ Limpiando repo git anterior..."
  rm -rf .git
fi

# 2. Inicializar git limpio
git init
git branch -m main

# 3. Configurar autor
git config user.email "teresitagcastelli@gmail.com"
git config user.name "Tesi Gómez Castelli"

# 4. Agregar todos los archivos (excepto node_modules, .next, etc.)
git add -A

# 5. Commit
git commit -m "feat: migración a Next.js 14 — nuevo design system

- App Router: rutas reales /, /portfolio, /about, /textos, /contacto
- /textos/[slug] indexable por Google (generateStaticParams + generateMetadata)
- Tipografía Marcellus + Raleway, paleta blanco/crema/negro
- Schema.org JSON-LD Person
- robots.txt con GPTBot/ClaudeBot/PerplexityBot
- sitemap.xml con 12 URLs"

# 6. Conectar con GitHub y hacer push
git remote add origin "$REPO"
git push --force origin main

echo ""
echo "✅ ¡Listo! El código está en GitHub."
echo "   Vercel va a detectar el push y deployar automáticamente."
echo "   Mirá el progreso en: https://vercel.com/teresitagcastelli-3136s-projects/portfolio"
echo ""
