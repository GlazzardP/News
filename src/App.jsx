import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.module.scss";
import { useState } from "react";
import StoryCard from "./components/StoryCard";
import Title from "./containers/Title";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  let fetchedNews;

  const [news, changeNews] = useState([]);

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
    <div>
      <FontAwesomeIcon icon="faTimesCircle" />
      <Title />
      <StoryCard news={news} />
    </div>
  );
}
export default App;
