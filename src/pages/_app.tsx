import "@/styles/globals.css";
import "@/styles/bootstrap-grid.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"]
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <html lang="en" className={poppins.className}>
            <Head>
                <meta charSet="utf-8" />

                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="author" content="luke@glitch.je" />
                <meta name="description" content="Luke's Portfolio Site" />
                <meta name="keywords" content="portfolio" />
                <meta name="robots" content="index,follow" />

                <title>Luke's Portfolio</title>
            </Head>
            <Component {...pageProps} />
        </html>
    );
}
