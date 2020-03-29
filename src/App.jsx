import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.module.scss";
import { useState } from "react";
import StoryCard from "./components/StoryCard";
import Title from "./containers/Title";
import FavouriteArticles from "./containers/FavouriteArticles";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
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
      <Title />
      <div className="Main">
        {/* <FontAwesomeIcon icon="faTimesCircle" /> */}
        <FavouriteArticles favouriteArticles={favouriteArticles} />
        <StoryCard news={news} updateFavourites={updateFavourites} />
      </div>
    </>
  );
}
export default App;
