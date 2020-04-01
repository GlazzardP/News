import React, { useEffect } from "react";
import styles from "./NavBar.module.scss";
// import { navigate } from "../../";
import Title from "../Title";
import logo from "../../images/newsLogo.png"


const NavBar = props => {
  const { signInWithRedirect, signOut, user } = props;

  useEffect(() => {
    if (user) {
      // navigate("");
    }
  }, [user]);

  return (

    <section className={styles.NavBar}>
    <img src={logo} alt=""/>

      <Title />
      <div className={styles.SignInOut}>
        <p onClick={signInWithRedirect}>Login</p>
        <p onClick={signOut}>Sign Out</p>
      </div>
    </section>
  );
};

export default NavBar;
