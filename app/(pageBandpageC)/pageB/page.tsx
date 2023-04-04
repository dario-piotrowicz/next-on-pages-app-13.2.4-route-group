import { Inter } from 'next/font/google'
import styles from '../../page.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const config = { runtime: "edge" };

export default function PageB() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Page B</h1>
        {/* <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      <div className={styles.grid}>
        <Link
          href="/"
          className={styles.card}
        >
          <h2 className={inter.className}>
            Home
          </h2>
          <p className={inter.className}>
            back to home
          </p>
        </Link>
      </div>
    </main>
  )
}
