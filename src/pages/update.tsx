import type { NextPage } from "next";
import Head from "next/head";
import { UpdateView } from "../views";

const Update: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Update Metada | Solana Millions</title>
        <meta
          name="description"
          content="Solana Millions"
        />
      </Head>
      <UpdateView />
    </div>
  );
};

export default Update;