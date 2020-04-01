import React from "react";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <section className={styles.header}>
      <img src="../images/news-logo.png" alt="" />
      <h1>ApiNews Today</h1>
      <p>Date</p>
    </section>
  );
};

export default Title;
