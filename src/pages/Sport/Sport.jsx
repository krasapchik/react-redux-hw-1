import React from "react";
import classes from "./Sport.module.css";
const Sport = () => {
  return (
    <div>
      <img className={classes.sport} src="/sport/box.jpg" alt="horse" />
      <div className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        fugiat, eius natus dolore numquam rem ad accusamus voluptatem velit quam
        ut nemo vitae provident distinctio, molestiae vero voluptatibus officiis
        fugit.
      </div>
    </div>
  );
};

export default Sport;
