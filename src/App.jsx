import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.module.scss";
import { useState } from "react";

function App() {
  const [news, updateNews] = useState([]);
  const articleArr = [];

  const fetchNews = () => {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=908b2971b5d3405fa9fe474ac6576a76"
    )
      .then(result => result.json())
      .then(result => updateNews(result.articles))
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => fetchNews(), []);

  const cardCreator = story => {
    console.log(articleArr);
    articleArr.push(
      <>
        <h3>{story.title}</h3>
        <h3>{story.description}</h3>
        <img src={story.urlToImage} alt="test" />
      </>
    );
  };

  return <div className="App">{articleArr}</div>;
}

// const cardCreator = person => {
//   console.log(person.homeworld);
//   document.getElementById("output").innerHTML += `<div>
//         <h3>${person.name}</h3>
//         <div class="img"></div>
//         <p>${person.height}</p>
//         <p>${person.mass}</p>
//         <p>${person.gender}</p>
//         <p>${person.birth_year}</p>
//         <button onclick="getHomeWorld(${person.homeworld})">Home world</button>
//     </div>`;
// };

// fetch("https://swapi.co/api/people")
//   .then(result => result.json())
//   .then(result => result.results.forEach(person => cardCreator(person)))
//   .catch(error => {
//     console.log(error);
//   });

export default App;
