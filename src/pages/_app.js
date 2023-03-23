import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Pokemon Book</title>
      </Head>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
      <Component {...pageProps} />
    </>
  );
}
