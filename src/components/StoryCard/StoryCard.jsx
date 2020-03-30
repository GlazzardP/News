import React from "react";
import styles from "./StoryCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";

const StoryCard = props => {
  const { news, updateFavourites } = props;

  const insertJsx = news.map(article => (
    <div className={styles.newsStory} href={article.url}>
      <img src={article.urlToImage} alt="test" />

      <h3>{article.title}</h3>
      {/* <p>{article.description}</p> */}
      {/* <a href={article.url}>Link to article</a> */}
      {/* <p>Link to article: {article.url}</p> */}
      <div className={styles.favIcons}>
        <FontAwesomeIcon icon={faTimesCircle} className={styles.Awesome} />
        <FontAwesomeIcon icon={faCheckCircle} className={styles.Awesome} />
        <FontAwesomeIcon
          icon={faBookmark}
          onClick={() => updateFavourites(article)}
          className={styles.Awesome}
        />
      </div>

      {/* <span class=" fa fas fa-check"></span>
      <span class=" fa fas fa-times"></span> */}
    </div>
  ));
  return <article>{insertJsx}</article>;
};

export default StoryCard;
