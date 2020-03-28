import React from "react";
import styles from "./StoryCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const StoryCard = props => {
  const { news } = props;

  const insertJsx = news.map(article => (
    <div className={styles.newsStory}>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <img src={article.urlToImage} alt="test" />
      <FontAwesomeIcon icon="faTimesCircle" className={styles.Awesome} />
      {/* <span class=" fa fas fa-check"></span>
      <span class=" fa fas fa-times"></span> */}
    </div>
  ));
  return <article>{insertJsx}</article>;
};

export default StoryCard;
