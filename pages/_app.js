import Head from "next/head";
import Layout from "../components/layout/layout";
import Notification from "../components/notification/notification";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <Notification />
    </Layout>
  );
}

export default MyApp;
