import React from "react";
import classes from "./Music.module.css";
const Music = () => {
  return (
    <div>
      <img className={classes.bakr} src="/music/bakr.jpg" alt="horse" />
      <div className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eaque
        inventore consequuntur consequatur, est voluptatem, excepturi autem non
        optio, odit doloremque explicabo dolor et obcaecati quaerat perferendis
        facilis blanditiis officia.
      </div>
    </div>
  );
};

export default Music;
