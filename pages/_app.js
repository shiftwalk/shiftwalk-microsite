import { ThemeProvider } from 'next-themes'
import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  )
}