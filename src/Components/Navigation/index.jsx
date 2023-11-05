import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { myRoutes } from "../MyRoutes";
import styles from "./style.module.css";
import { FaBars } from "react-icons/fa";

const Navigation = () => {

  const [showMenu,setShowMenu]=useState(false)
  return (
    <header>
      <div className="container">
        <div className={styles.navbar}>
          <div className="logo ">
            <Link to="/">
              <img src="../Logo.svg" alt="" />
            </Link>
          </div>

          <div className={`bars d-block d-md-none ${styles.bars}`} onClick={()=>setShowMenu(!showMenu)}>
            <FaBars />
          </div>
         
          <nav
           className={` ${styles.navMenu} d-none d-md-block`}>
          {myRoutes.map(({ title, id, path }) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navlink} ${styles.active}`
                    : styles.navlink
                }
                key={id}
                to={path}
              >
                {title}
              </NavLink>
            );
          })}
        </nav>




      {
        showMenu && (
          <div
          className={styles.mobileNav} >
         {myRoutes.map(({ title, id, path }) => {
           return (
             <NavLink
               className={({ isActive }) =>
                 isActive
                   ? `${styles.navlink} ${styles.active}`
                   : styles.navlink
               }
               key={id}
               to={path}
             >
               {title}
             </NavLink>
           );
         })}
       </div>
        )
      }
        </div>
      </div>
    </header>
  );
};

export default Navigation;
