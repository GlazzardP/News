import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { useState } from "react";
import PublicNews from "./containers/PublicNews/PublicNews";
import NavBar from "./containers/NavBar";
import FavouriteArticles from "./containers/FavouriteArticles";
import firebase, { provider } from "./firebase";

function App() {
  const [favouriteArticles, addArticleToFavourites] = useState([]);

  const [user, setUser] = useState(null);

  const signInWithRedirect = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        // redirectTo("/landing-page");
        setUser(null);
      }
    });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        alert("You have signed out");
      })
      .catch(error => {
        alert("Oh no an error :(");
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
         <NavBar
          signInWithRedirect={signInWithRedirect}
          signOut={signOut}
          user={user}/>
      {/* <Title /> */}
      {/* <div className="Main"> */}
      {/* <FontAwesomeIcon icon="faTimesCircle" /> */}
      {/* <FavouriteArticles favouriteArticles={favouriteArticles} />
        <StoryCard news={news} updateFavourites={updateFavourites} /> */}
      {/* </div> */}
      <div className={styles.MainContent}>
        <PublicNews addArticleToFavourites={addArticleToFavourites} favouriteArticles={favouriteArticles} />
        <FavouriteArticles favouriteArticles={favouriteArticles} />
      </div>
    </>
  );
}
export default App;
