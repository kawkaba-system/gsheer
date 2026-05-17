import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import LoginForm from '@/components/Auth/LoginForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gsheer ID - Master Authentication Gateway</title>
        <meta name="description" content="Enterprise-grade authentication & security gateway" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </Layout>
    </>
  );
}
