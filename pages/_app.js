import { ThemeProvider } from 'next-themes'
import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import SEO from '../helpers/seo.config'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />

      <ThemeProvider attribute="class">
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}