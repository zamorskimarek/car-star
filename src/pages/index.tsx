import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Car-Star Warsztat Samochodowy</title>
        <meta
          name="Car-Star Warsztat Samochodowy"
          content="Dobry mechanik Krakow"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>strona w budowie...</p>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/Logo_1.jpg"
            alt="Next.js Logo"
            width={500}
            height={150}
            priority
          />
        </div>
        <div>
          <h1 className={styles.h1}>
            Nowo otwarty warsztat samochodowy{" "}
            <b className={styles.bold}>Car-Star</b> serdecznie zaprasza.
            Oferujemy fachową obsługę, krótki czas napraw oraz konkurencyjne
            ceny. Nasi mechanicy mają wiele lat doświadczenia oraz chętnie
            podejmą się nawet najbardziej skomplikowanych usterek.
          </h1>
          <div className={styles.contact}>
            <h2>KONTAKT</h2>
            <h2>TEL. 790 488 414</h2>
            <h2>EMAIL: info@car-star.pl</h2>
            <h2>ADRES: ul. Alfreda Dauna 23, Kraków</h2>
          </div>
        </div>
      </main>
    </>
  );
}
