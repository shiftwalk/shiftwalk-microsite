import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import SEO from '../helpers/seo.config'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <DefaultSeo {...SEO} />

      <ThemeProvider attribute="class">
        <AnimatePresence>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}