import Head from "next/head";
import { Fragment } from "react";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <span className="container__title">Inventory</span>
      </div>
    </Fragment>
  );
};

export default Index;