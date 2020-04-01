import React from "react";
import styles from "./FavouriteArticles.module.scss";

const FavouriteArticles = props => {
  const { favouriteArticles } = props;

  return (
    <>
      <section className={styles.favArticles}>
      <h2>Saved Articles</h2>

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
