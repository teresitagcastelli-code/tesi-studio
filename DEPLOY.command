#!/bin/bash
# ============================================================
# DEPLOY.command — tesi-next → GitHub → Vercel
# ============================================================

cd "$(dirname "$0")"

echo ""
echo "========================================"
echo "  DEPLOY tesi-next → GitHub → Vercel"
echo "========================================"
echo ""

# Borrar .git con sudo si hace falta
echo "→ Limpiando repo anterior..."
rm -rf .git 2>/dev/null || sudo rm -rf .git 2>/dev/null || true

# Verificar que se borró
if [ -d ".git" ]; then
  echo "⚠️  No se pudo borrar .git — intentando igual..."
fi

# Inicializar git limpio
echo "→ Inicializando git..."
git init -b main
git config user.email "teresitagcastelli@gmail.com"
git config user.name "Tesi Gómez Castelli"

# Agregar archivos (excluye node_modules por .gitignore)
echo "→ Agregando archivos..."
git add -A
echo "   Archivos a commitear:"
git status --short | head -30

# Commit
echo ""
echo "→ Haciendo commit..."
git commit -m "feat: migración a Next.js 14 — nuevo design system

- App Router: rutas reales /, /portfolio, /about, /textos, /contacto
- /textos/[slug] indexable por Google
- Tipografía Marcellus + Raleway, paleta blanco/crema/negro
- Schema.org JSON-LD Person
- robots.txt con GPTBot/ClaudeBot/PerplexityBot
- sitemap.xml con 12 URLs"

if [ $? -ne 0 ]; then
  echo "❌ Error en el commit. Revisá arriba."
  read
  exit 1
fi

# Push a GitHub
echo ""
echo "→ Pusheando a GitHub..."
echo "   (si pide credenciales: usuario = teresitagcastelli-code, contraseña = tu token ghp_...)"
echo ""

git remote add origin https://github.com/teresitagcastelli-code/tesi-studio.git 2>/dev/null || git remote set-url origin https://github.com/teresitagcastelli-code/tesi-studio.git

git push --force origin main

PUSH_RESULT=$?

echo ""
if [ $PUSH_RESULT -eq 0 ]; then
  echo "========================================"
  echo "  ✅ ¡PUSH EXITOSO!"
  echo "  Vercel va a deployar en ~3 minutos."
  echo "  Mirá: vercel.com/teresitagcastelli-3136s-projects/portfolio"
  echo "========================================"
else
  echo "========================================"
  echo "  ❌ Error en el push (código $PUSH_RESULT)"
  echo "  Copiá todo el texto de arriba y mandámelo."
  echo "========================================"
fi

echo ""
echo "Presioná Enter para cerrar..."
read
