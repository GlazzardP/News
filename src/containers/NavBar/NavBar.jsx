import React, { useEffect } from "react";
import styles from "./NavBar.module.scss";
// import { navigate } from "../../";
import Title from "../Title";

const NavBar = props => {
  const { signInWithRedirect, signOut, user } = props;

  useEffect(() => {
    if (user) {
      // navigate("");
    }
  }, [user]);

  return (
    <section className={styles.NavBar}>
      <Title />
      <div className={styles.SignInOut}>
        <p onClick={signInWithRedirect}>Login</p>
        <p onClick={signOut}>Sign Out</p>
      </div>
    </section>
  );
};

export default NavBar;
