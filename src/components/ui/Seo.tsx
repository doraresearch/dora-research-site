import { Head } from 'vite-react-ssg'

type SeoProps = {
  title: string
  description: string
  path: '/' | '/research' | '/zora'
  image: 'og-lab.png' | 'og-zora.png'
  imageAlt: string
}

const ORIGIN = 'https://www.dorareason.com'

export default function Seo({ title, description, path, image, imageAlt }: SeoProps) {
  const url = path === '/' ? `${ORIGIN}/` : `${ORIGIN}${path}`
  const img = `${ORIGIN}/${image}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DORA Research" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Head>
  )
}
