import React from 'react'
import {Link} from 'react-router-dom'
import classes from './HeaderControl.module.css'
const HeaderControl = () => {
  return (
  <header>
    <nav className={classes.app}>
      <h1>
        <Link to="/" style={{marginRight: "400px"}}>Here is logo</Link>
      </h1>
      <ul className={classes.str}>
        <div className={classes.pp}>
          <Link to="/music">Music</Link>
        </div>
        <div className={classes.pp}>
          <Link to="/news">News</Link>
        </div>
        <div className={classes.pp}>
          <Link to ="/politic">Politic</Link>
        </div>
        <div className={classes.pp}>
          <Link to= "/sport">Sport</Link>
        </div>
      </ul>
    </nav>
  </header>
  )
}

export default HeaderControl