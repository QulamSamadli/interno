import React from 'react'
import styles from "./style.module.css";
import { Link } from 'react-router-dom';

const PageBanner = ({src,page}) => {
  return (
    <div className={styles.bannerContainer}>
        <img src={src} className={styles.bannerImage} />
        <div className={styles.bannerInfo}>
            <h2>Services</h2>
            <p> <Link to="/">Home</Link> / {page}</p>
        </div>
        </div>

  )
}

export default PageBanner;