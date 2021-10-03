import Head from 'next/head'
import Image from 'next/image'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Zuglói értéktérkép</title>
      </Head>
      <main>
      <header>
        <Image width={1200/3} height={376/3} src="/hzka_logo.png" />
      </header>
        {children}
      </main>
    </>
  ) 
}

export default Layout
