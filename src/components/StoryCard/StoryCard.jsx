import React from "react";
import styles from "./StoryCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StoryCard = props => {
  const { updateFavourites, article } = props;

  const [likes, increaseLikes] = useState(0);
  const [dislikes, decreaseLikes] = useState(0);
  const likesJsx = likes;
  const dislikesJsx = dislikes;

  // const insertJsx = news.map(article => (
  return (
    <div className={styles.newsStory} href={article.url}>
      <a href={article.url} target="_blank">
        <img src={article.urlToImage} alt="test" />
        <h3>{article.title}</h3>
      </a>
      {/* <p>{article.description}</p> */}
      {/* <a href={article.url}>Link to article</a> */}
      {/* <p>Link to article: {article.url}</p> */}
      <div className={styles.favIcons}>
        <FontAwesomeIcon
          icon={faTimesCircle}
          className={styles.Awesome}
          onClick={() => decreaseLikes(dislikes + 1)}
        />
        {dislikesJsx}

        <FontAwesomeIcon
          icon={faCheckCircle}
          className={styles.Awesome}
          onClick={() => increaseLikes(likes + 1)}
        />
        {likesJsx}

        <FontAwesomeIcon
          icon={faBookmark}
          onClick={() => updateFavourites(article)}
          className={styles.Awesome}
        />
      </div>

      {/* <span class=" fa fas fa-check"></span>
      <span class=" fa fas fa-times"></span> */}
    </div>
  );
  // ));
  // return <article>{insertJsx}</article>;
};

export default StoryCard;
