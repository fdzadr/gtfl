import Head from 'next/head';
import Navbar from '/components/navbar';
import Footer from '/components/footer';
import Searchbox from 'components/homepage/searchbox';
import Portal from '/components/homepage/getrich_portal';
import styles from '@/styles/homepage/homepage.module.css';
import Image from 'next/image';

export default function Home() {
    return (
        <>
        <Head>
        <title>GetFull</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>

        <main>
        <div className="container">
            {/* Search box */}
            <Searchbox/>

            {/* GetRich Portal */}
            <Portal/>

            {/* Carousel */}
            
        </div>
        </main>

        <Footer/>
        </>
    )
}