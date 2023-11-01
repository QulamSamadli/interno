import React from "react";
import styles from "./style.module.css";
import Button from "../Button";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-xl-5">
            <h2 className={styles.title}>Let Your Home Be Unique</h2>
            <p className={styles.description}>
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </p>
            <Button title="Get Started" arrow bg={"dark"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
