import React from "react";
import styles from "./PublicNews.module.scss";
import FavouriteArticles from "../../containers/FavouriteArticles";
import { useState } from "react";
import StoryCard from "../../components/StoryCard";
import { useEffect } from "react";
// import StoryCard from "../../components/StoryCard";

const PublicNews = () => {
  let fetchedNews;

  const [favouriteArticles, addArticleToFavourites] = useState([]);

  const [news, changeNews] = useState([]);

  const updateFavourites = article => {
    const currentFavouritedArticles = [...favouriteArticles];
    const newFavouriteArticles = [...favouriteArticles, article];
    addArticleToFavourites(newFavouriteArticles);
  };

  useEffect(() => {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=908b2971b5d3405fa9fe474ac6576a76"
    )
      .then(result => result.json())
      .then(result => {
        fetchedNews = result;
        // updateNews();
        // console.log(result);
        changeNews(fetchedNews.articles);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <FavouriteArticles favouriteArticles={favouriteArticles} />
      <StoryCard news={news} updateFavourites={updateFavourites} />
    </>
  );
};

export default PublicNews;
