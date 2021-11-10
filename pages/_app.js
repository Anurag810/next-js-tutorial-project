import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useState } from "react"

function MyApp({ Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
