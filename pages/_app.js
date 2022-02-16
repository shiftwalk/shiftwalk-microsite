import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import SEO from '../helpers/seo.config'
import { IntroContext } from '@/context/intro'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [introContext, setIntroContext] = useState(false);
  return (
    <>
      <DefaultSeo {...SEO} />
      
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <ThemeProvider attribute="class">
          <AnimatePresence>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </ThemeProvider>
      </IntroContext.Provider>
    </>
  )
}