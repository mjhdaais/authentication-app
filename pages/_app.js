import "../styles/globals.css";

/*function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;*/

import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

// HOW TO INSTALL NEXTJS-12
// npx create-next-app@12 <app-name> && cd <app-name> && npm i next@12
