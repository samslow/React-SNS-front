import React from 'react'; //원래 Next에서는 없어도 되지만 {useState} 같은 react-hooks 쓰려면 결국 쓰게
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
  return(
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Head>
      <AppLayout>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
};

export default Home;