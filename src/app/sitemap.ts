import { MetadataRoute } from 'next'

const website = process.env.WEBPATH

type change =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

export default function sitemap(): MetadataRoute.Sitemap {
  const products = [
    { id: 'evento-trascender' },
    { id: 'terapia-expansion' },
    { id: 'spray-aurico-proteccion' },
    { id: 'kit-proteccion-terapia' },
    { id: 'kit-atraccion' },
    { id: 'sal-eterra-de-atraccion' },
    { id: 'vela-intencion-proteccion' },
    { id: 'terapia-sanacion' },
    { id: 'kit-limpieza-terapia' },
    { id: 'vela-intencion-atraccion' },
    { id: 'spray-aurico-atraccion' },
    { id: 'terapia-conexion' },
    { id: 'vela-intencion-limpieza' },
    { id: 'sal-eterra-de-limpieza' },
    { id: 'kit-limpieza' },
    { id: 'sal-eterra-de-proteccion' },
    { id: 'spray-aurico-limpieza' },
    { id: 'kit-proteccion' },
    { id: 'kit-atraccion-terapia' }
  ].map(({ id }) => ({
    url: `${website}/tienda/${id}` as string,
    lastModified: new Date(),
    changeFrequency: 'weekly' as change,
    priority: 1
  }))

  const blogs = [
    {
      id: 'encuentro-frecuencia-fluye-con-la-energia-del-universo'
    },
    {
      id: 'descubre-la-luz-en-la-oscuridad-como-las-velas-pueden-ayudar-en-el-manejo-de-la-ansiedad'
    },
    {
      id: 'desbloqueando-el-poder-de-la-sancion-natural-un-viaje-aromatico'
    },
    { id: 'un-viaje-aromatico-2' },
    {
      id: 'bienvenidos-a-nuestro-santuario-holistico-descubre-el-camino-hacia-el-bienestar-integral'
    },
    {
      id: 'encuentro-de-yoga-y-meditacion-alineacion-de-chakras-con-diapasones'
    },
    {
      id: 'revive-la-magia-de-nuestro-encuentro-de-yoga-y-meditacion-al-aire-libre'
    },
    {
      id: 'florecer-libera-sana-y-eleva-una-transformadora-experiencia-de-sanacion-femenina'
    },
    { id: 'encuentro-de-yoga-y-meditacion-armonia-con-los-elementos' }
  ].map(({ id }) => ({
    url: `${website}/blog/${id}` as string,
    lastModified: new Date(),
    changeFrequency: 'weekly' as change,
    priority: 0.5
  }))

  return [
    {
      url: website as string,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${website}/nuestra-marca`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${website}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5
    },
    {
      url: `${website}/tienda`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...blogs,
    ...products
  ]
}
