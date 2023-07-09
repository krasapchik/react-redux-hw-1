import React from "react";
import classes from "./News.module.css";
const News = () => {
  return (
    <div>
      <img className={classes.news} src="/news/zelenskii.jpg" alt="horse" />
      <div className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        dignissimos tempora aspernatur. Sunt laboriosam quos quaerat? Quidem cum
        molestiae maiores soluta officia! Vero sint voluptate minima aspernatur
        voluptatum fugit odio?
      </div>
    </div>
  );
};

export default News;
