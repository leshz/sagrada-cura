import { ChooseProduct } from '@components/home/choose-product'
import { DoubleBanner } from '@components/home/banner'
import { HightLights } from '@components/home/highlight-product'
import { LastBlogsPost } from '@components/home/last-blogs-post'
import { Testimonial } from '@/components/pages/home/testimonial/testimonials'
import { HomeStructuredData } from '@/components/structured-data/home-schema'

import { Instagram } from '@components/home/instagram'
import { getSingles } from '@/services'

import type { Metadata } from 'next'
import { getImagePath } from '@/utils/helpers'

export const generateMetadata = async (): Promise<Metadata> => {
  const { seo } = await getSingles<any>('general')

  return {
    title: 'Inicio | Sanación Natural',
    description: seo?.metaDescription || 'Descubre productos naturales para tu bienestar y sanación espiritual en Sagrada Cura. Encuentra la armonía que buscas con sanación natural.',
    keywords: seo?.keywords || 'sanación natural, bienestar, productos naturales, espiritualidad, Sagrada Cura, medicina alternativa, terapias naturales',
    alternates: {
      canonical: 'https://sagradacura.com'
    },
    openGraph: {
      title: 'Sagrada Cura - Inicio | Sanación Natural',
      description: seo?.metaDescription || 'Descubre productos naturales para tu bienestar y sanación espiritual en Sagrada Cura. Encuentra la armonía que buscas.',
      url: 'https://sagradacura.com',
      images: getImagePath(seo?.metaImage, 'medium'),
      type: 'website',
      locale: 'es_CO',
      siteName: 'Sagrada Cura'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sagrada Cura - Inicio | Sanación Natural',
      description: seo?.metaDescription || 'Descubre productos naturales para tu bienestar y sanación espiritual en Sagrada Cura.',
      images: getImagePath(seo?.metaImage, 'medium')
    }
  }
}


const Home = async () => {

  const generalRes = await getSingles<any>('general')

  const {
    banners,
    product_categories,
    highlight_products,
    last_blogs,
    testimonial,
    instagram
  } = await getSingles<any>('home')

  return (
    <>
      <HomeStructuredData generalData={generalRes} />
      <main id="main-content">
        <section id="hero-banner" aria-label="Banners principales">
          <DoubleBanner data={banners} />
        </section>

        <section id="product-categories" aria-label="Categorías de productos">
          <h2 className="visually-hidden">Categorías de Productos</h2>
          <ChooseProduct products={product_categories} />
        </section>

        <section id="featured-products" aria-label="Productos destacados">
          <h2 className="visually-hidden">Productos Destacados</h2>
          <HightLights highlights={highlight_products} />
        </section>

        <section id="latest-blogs" aria-label="Últimos artículos del blog">
          <h2 className="visually-hidden">Últimos Artículos</h2>
          <LastBlogsPost blog={last_blogs} />
        </section>

        <section id="testimonials" aria-label="Testimonios de clientes">
          <h2 className="visually-hidden">Lo que dicen nuestros clientes</h2>
          <Testimonial labels={testimonial} />
        </section>

        <section id="instagram-feed" aria-label="Feed de Instagram">
          <h2 className="visually-hidden">Síguenos en Instagram</h2>
          <Instagram feed={instagram} />
        </section>
      </main>
    </>
  )
}

export default Home
