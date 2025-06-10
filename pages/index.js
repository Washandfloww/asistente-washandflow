
import Head from 'next/head';
import AsistenteWashAndFlow from '../components/AsistenteWashAndFlow';

export default function Home() {
  return (
    <>
      <Head>
        <title>Asistente Wash and Flow</title>
        <meta name="description" content="Tu guía para elegir la mejor franquicia de lavandería autoservicio." />
      </Head>
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <AsistenteWashAndFlow />
      </main>
    </>
  );
}
