import React from "react";
import styles from "./Title.module.scss";

const Title = () => {

var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

if (day < 10) {
  day = '0' + day
}
if (month < 10) {
  month = '0' + month
}

var out = document.getElementById("output");

  return (
    <section className={styles.header}>
      <h1>ApiNews Today</h1>
      {day}/{month}/{year}
    </section>
  );
};

export default Title;
