import { Marcellus, Raleway } from 'next/font/google'
import './globals.css'
import { LangProvider } from '../components/LangProvider'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marcellus',
  display: 'swap',
})

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://tesistudio.com'),
  title: {
    default: 'Tesi Gómez Castelli — Arte textil · Buenos Aires',
    template: '%s — Tesi Gómez Castelli',
  },
  description: 'Arte textil contemporáneo. Miniaturas bordadas en cápsulas de acrílico y obra de pared. Buenos Aires. Encargos de coleccionistas e interioristas.',
  keywords: ['arte textil', 'bordado en miniatura', 'arte argentino', 'Tesi Gómez Castelli', 'acrílico', 'hoja de oro', 'Buenos Aires'],
  openGraph: {
    siteName: 'Tesi Gómez Castelli',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tesistudio.com' },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tesi Gómez Castelli',
  alternateName: 'Teresita Gómez Castelli',
  url: 'https://tesistudio.com',
  jobTitle: 'Artista textil',
  description: 'Artista textil argentina. Crea miniaturas bordadas montadas en hoja de oro dentro de cápsulas de acrílico, y obra de pared. Buenos Aires.',
  image: 'https://tesistudio.com/assets/portrait.jpg',
  sameAs: [
    'https://instagram.com/tesistudio',
    'https://tiktok.com/@iamtesistudio',
    'https://ar.pinterest.com/tgcastelli/',
    'https://youtube.com/@TesiStudio',
    'https://tienda.tesistudio.com',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Buenos Aires',
    addressCountry: 'AR',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${marcellus.variable} ${raleway.variable}`}
          suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <LangProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
