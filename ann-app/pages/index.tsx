import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Contract } from "ethers";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ConnectWallet />
      <section className={styles.info}>
        <img className={styles.eyeLogo} src="./logo.png" alt="logo" />
        <h1>ANNIHILATION APE YACHT CLUB</h1>
        <p>
          Welcome to our minting page.
        </p>
        <Web3Button contractAddress="0x29dFaca53e5F401F9B61De199502fA0E060330cf" action={(Contract)=>{Contract.erc721.claim(1)}}>
          Claim ANN
        </Web3Button>
      </section>
    </div>
  );
};

export default Home;
