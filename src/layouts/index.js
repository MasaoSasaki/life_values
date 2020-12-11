import Head from 'next/head'
import styles from './index.module.css'
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'

export const MainLayout = (children) => {
  return(
    <div className={styles.container}>
      <Head>
        <title>Life Values</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <main>{ children.children }</main>
      <Footer />
    </div>
  );
}