import React from "react";
import { Link, NavLink } from "react-router-dom";
import { myRoutes } from "../MyRoutes";
import styles from "./style.module.css"

const Navigation = () => {
  return (
    <header >
  <div className="container">
    <div className={styles.navbar}>
    <div className="logo ">
      <Link to="/">
      <img src="../Logo.svg" alt="" /></Link>
      </div>
      <nav>
        {myRoutes.map(({ title, id, path }) => {
          return (
            <NavLink className={({isActive})=>
            isActive ?
             `${styles.navlink} ${styles.active}`: styles.navlink}
              key={id} to={path}>
              {title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  </div>
    </header>
  );
};

export default Navigation;
