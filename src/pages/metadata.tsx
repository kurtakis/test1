import type { NextPage } from "next";
import Head from "next/head";
import { MetadataView } from "../views";

const Metadata: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Token Metadata | Solana Millions</title>
        <meta
          name="description"
          content="Solana Millions"
        />
      </Head>
      <MetadataView />
    </div>
  );
};

export default Metadata;