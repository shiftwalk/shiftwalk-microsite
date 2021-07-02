import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}