import React from "react";
import classes from "./Politic.module.css"
const Politic = () => {
  return (
    <div>
      <img className={classes.poli} src="/politic/putin.jpg" alt="horse" />
      <div className={classes.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima omnis,
        aut in quae enim iusto, doloribus ab delectus reiciendis fugiat animi.
        Odio eveniet ab repellendus repellat ut voluptatibus vitae quod!
      </div>
    </div>
  );
};

export default Politic;
