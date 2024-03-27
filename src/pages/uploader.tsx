import type { NextPage } from "next";
import Head from "next/head";
import { UploaderView } from "../views";

const Uploader: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Upload Metada | Solana Millions</title>
        <meta
          name="description"
          content="Solana Millions"
        />
      </Head>
      <UploaderView />
    </div>
  );
};

export default Uploader;