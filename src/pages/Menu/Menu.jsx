import React from 'react'
import classes from "./Menu.module.css"
const Menu = () => {
  return (
    <div className={classes.photo}>
        <div className={classes.round}>
            <div className={classes.php}>
            <img  className={classes.img} src= "/music/bakr.jpg" alt='horse'/>
            </div>
         <div className={classes.str}>
            <p>lololo</p>
         </div>
        </div>
      
        <div className={classes.round}>
            <div className={classes.php}>
            <img  className={classes.img1} src= "/politic/putin.jpg" alt='horse'/>
            </div>
         <div className={classes.str}>
            <p>lololo</p>
         </div>
        </div>
        <div className={classes.round}>
            <div className={classes.php}>
            <img  className={classes.img} src= "/sport/box.jpg" alt='horse'/>
            </div>
         <div className={classes.str}>
            <p>lololo</p>
         </div>
        </div>
    </div>
  )
}

export default Menu