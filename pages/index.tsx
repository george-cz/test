import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Timeline from "../components/Timeline";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Timeline />
    </div>
  );
};

export default Home;
