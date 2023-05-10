import React, { FC } from "react";
import { HomeData } from "@component/src/data/home";
import classes from "./home.module.css";
const HomePage: FC = ({}) => {
  return (
    <>
      <header className={classes.header_container}>
        <div className={classes.img_header_container}>
          <div className={classes.typewriter}>
            <h1>{HomeData.title}</h1>
          </div>
        </div>
        <div className={classes.inner_container}>
          <div className={classes.subtitle}>
            <q className={classes.quote}>{HomeData.subtitle.quote}</q>
            <h3 className={classes.author}>{HomeData.subtitle.author}</h3>
            <div className={classes.history_paragraph}>
              <p>{HomeData.history.text}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomePage;
