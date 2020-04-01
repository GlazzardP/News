import React from "react";
import styles from "./FavouriteArticles.module.scss";

const FavouriteArticles = props => {
  const { favouriteArticles } = props;

  return (
    <>
      <h2>Saved Articles</h2>
      <section className={styles.favArticles}>
        {favouriteArticles.map(article => (
          <div>
            <p>{article.title}</p>
            <a href={article.url} target="_blank">
              Go to article
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default FavouriteArticles;
