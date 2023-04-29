import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState()


  const handleInput = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="hola!" />

        <div>
          Masukan nama anda <input type="text" onChange={handleInput} />

        </div>

        Hello nama saya adalah {name}

      </main>

      <Footer />
    </div>
  )
}
