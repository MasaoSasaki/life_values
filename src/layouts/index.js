import Head from 'next/head'
import styles from './index.module.scss'
import { Footer } from '../components/footer/index'
import { Header } from '../components/header/index'

export const MainLayout = (children) => {
  return(
    <div className={styles.container}>
      <Head>
        <title>Life Values</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
      </Head>
      <Header />
        <main>{ children.children }</main>
      <Footer />
    </div>
  );
}