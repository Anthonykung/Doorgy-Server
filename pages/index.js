import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Doorgy</title>
        <meta name="description" content="Doorgy - Smart Pet Door" />
        <meta name="keywords" content="Doorgy" />
        <link rel="icon" href="/Doorgy-512.png" />
        <meta name="generator" content="Doorgy by Anthony Kung" />
        <meta name="creator" content="Anthony Kung (anth.dev)" />
        <meta name="designer" content="Anthony Kung (anth.dev)" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.anth.dev/Doorgy">Doorgy!</a>
        </h1>

        <p className={styles.description}>
          Get started by downloading Doorgy App on Google Play!
          <br />
          <a href="https://github.anth.dev/Doorgy-App">
            <img src="/google-play-badge.png" alt="Google Play Badge" className="logo" width="250px" />
          </a>
          <br />
          Need Doorgy Service?{' '}
          <code className={styles.code}>npm install doorgy</code>
        </p>

        <hr
          style={{
              color: '#eaeaea',
              backgroundColor: '#eaeaea',
              height: 5,
              width: '80%',
              border: 'none'
          }}
        />

        <p className={styles.description}>
          Doorgy Project includes the following 3 parts:
        </p>

        <div className={styles.grid}>
          <a href="https://github.anth.dev/Doorgy" className={styles.card}>
            <h2>Doorgy &rarr;</h2>
            <p>The Doorgy device which includes the physical Doorgy Door and the Doorgy Service that rans on Raspberry Pi</p>
          </a>

          <a href="https://github.anth.dev/Doorgy-Server" className={styles.card}>
            <h2>Doorgy Server &rarr;</h2>
            <p>The communication meadium for Doorgy and Doorgy App.</p>
          </a>

          <a
            href="https://github.anth.dev/Doorgy-App" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>The mobile application used to control Doorgy operations.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://anth.dev"
          target="_blank"
        >
          Created with {'<3'} by Anthony Kung
        </a>
      </footer>
    </div>
  )
}
