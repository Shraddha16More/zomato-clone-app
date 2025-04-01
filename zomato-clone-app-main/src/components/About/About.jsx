import React from "react";
import styles from "./about.module.css";
import { Link } from "react-router-dom";

export default function About() {
  const styleImg = {
    width: "300px",
    borderRadius: "50%",
  };

  return (
    <div className="py-40">
      <div className={`${styles.about} `}>
        <div className={styles.imgDiv}>
          <Link to="/">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              style={{ width: "350px" }}
              alt="zomato logo"
              className={styles.logo}
            />
            Clone
          </Link>
        </div>
        <div className={styles.info}>
          <h3></h3>
          <h3 style={{ fontStyle: "italic" }}>
            " your ultimate guide to discovering and savoring the diverse
            flavors of Pune and Bangalore! Designed exclusively for food
            enthusiasts in these vibrant cities, our app is your go-to platform
            for exploring a rich tapestry of Asian cuisine—from authentic street
            food to exquisite dining experiences. "
          </h3>
          <p>Frontend : html, css, javascript, react.js</p>
          <p>
            React and UI features/libraries: context-apis, react-router-dom,
            custom components, shimmer UI, lottie animation
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Created By</h1>
      </div>
      <div className={styles.about}>
        <div className={styles.info}>
          <h1>👋I'm Shraddha More</h1>
          <p>
            I'm Information Technology graduate from india. I have strong problem
            solving skills using java and javascript programming languages. I am
            self-motivated individual with a passion for software development
            and innovations in the field. Finding creative solutions to problems
            is something I have always enjoyed.{" "}
          </p>
        </div>
        <div className={styles.imgDiv}>
          <img
            style={styleImg}
            src="shraddha-more.png"
            alt="Shraddha More"
          />
          <p>Software Engineer</p>
        </div>
      </div>
    </div>
  );
}
