import React, { useEffect } from "react";
import "./App.module.scss";
import { useState } from "react";
// import StoryCard from "./components/StoryCard";
import Title from "./containers/Title";
// import FavouriteArticles from "./containers/FavouriteArticles";
import PublicNews from "./containers/PublicNews/PublicNews";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./containers/NavBar";
// import firebase, { provider } from "./firebase";

// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  // let fetchedNews;

  // const [favouriteArticles, addArticleToFavourites] = useState([]);

  // const [news, changeNews] = useState([]);

  // const updateFavourites = article => {
  //   const currentFavouritedArticles = [...favouriteArticles];
  //   const newFavouriteArticles = [...favouriteArticles, article];
  //   addArticleToFavourites(newFavouriteArticles);
  // };

  // // useEffect(() => {
  //   fetch(
  //     "http://newsapi.org/v2/top-headlines?country=us&apiKey=908b2971b5d3405fa9fe474ac6576a76"
  //   )
  //     .then(result => result.json())
  //     .then(result => {
  //       fetchedNews = result;
  //       // updateNews();
  //       // console.log(result);
  //       changeNews(fetchedNews.articles);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  // Below is for authentication
  // const [user, setUser] = useState(null);
  // const [isOpen, toggleSettings] = useState(false);

  // const signInWithRedirect = () => {
  //   firebase.auth().signInWithRedirect(provider);
  // };

  // const getUser = () => {
  //   firebase
  //     .auth()
  //     .getRedirectResult()
  //     .then(result => {
  //       if (result.credential) {
  //         // This gives you a Google Access Token. You can use it to access the Google API.
  //         const token = result.credential.accessToken;
  //       }
  //       // The signed-in user info.
  //       console.log(result);
  //       const user = result.user;
  //       setUser(user);
  //     })
  //     .catch(error => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The firebase.auth.AuthCredential type that was used.
  //       const credential = error.credential;
  //       // ...
  //     });
  // };

  // const signOut = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       setUser(null);
  //       alert("You have signed out");
  //     })
  //     .catch(error => {
  //       alert("Oh no an error :(");
  //     });
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <>
      {/* <NavBar
        toggleSettings={() => toggleSettings(!isOpen)}
        signInWithRedirect={signInWithRedirect}
        signOut={signOut}
        user={user}
      /> */}
      <Title />
      {/* <div className="Main"> */}
      {/* <FontAwesomeIcon icon="faTimesCircle" /> */}
      {/* <FavouriteArticles favouriteArticles={favouriteArticles} />
        <StoryCard news={news} updateFavourites={updateFavourites} /> */}
      {/* </div> */}
      <PublicNews />
    </>
  );
}
export default App;
