import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'
import Image from 'next/image';


export default function Home() {
  const [name, setName] = useState()

  const handleInput = (e) => {
    setName(e.target.value)
  }
  const [kata, setKata] = useState()


  const handleInputkata = (e) => {
    setKata(e.target.value)
  }

  return (
    <div>
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
          <div style={{ marginBottom: "50px" }}>
            Masukan kata kata <input type="text" onChange={handleInputkata} />
          </div>


          <div>Hello nama saya adalah <b>{name}</b></div>
      <div>kata anda <b>{kata}</b></div>

        </main>
      </div>
<img src="https://media.tenor.com/N_LkR7zVT74AAAAC/wtf.gif" alt="My GIF" width={400} height={300} />
   


    </div>
  )
}
