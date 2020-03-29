import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = props => {
  const { signInWithRedirect, signOut, user } = props;

  return (
    <>
      <button>Sign In</button>
      <button>Sign Out</button>
    </>
  );
};

export default NavBar;
