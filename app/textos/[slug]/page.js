// Server component — generates real metadata per article (SEO)
import { CONTENT } from '../../../lib/content'
import TextoPage from '../../../components/TextoPage'

export async function generateStaticParams() {
  return CONTENT.es.textos.items.map(item => ({ slug: item.id }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = CONTENT.es.textos.items.find(i => i.id === slug)
  if (!item) return { title: 'Texto no encontrado' }

  return {
    title: item.title,
    description: item.dek + ' ' + item.excerpt.slice(0, 120),
    openGraph: {
      title: item.title + ' — Tesi Gómez Castelli',
      description: item.dek,
      type: 'article',
      publishedTime: new Date(item.date).toISOString?.() || item.date,
      authors: ['Tesi Gómez Castelli'],
    },
    alternates: { canonical: 'https://tesistudio.com/textos/' + slug },
  }
}

export default async function TextoArticlePage({ params }) {
  const { slug } = await params
  return <TextoPage slug={slug}/>
}
