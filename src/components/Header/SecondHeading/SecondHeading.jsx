import React from 'react'
import css from "../Header.module.css"


function SecondHeading() {
  return (
    <header className={`${css.header} container`}>
        <div className={css.headerLeft}>
            <a>Exclusive</a>
        </div>
        <div className={css.headerMiddle}>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Signup</li>
            </ul>
        </div>
        <div className={css.headerRight}>
            <input type="search" />
            <a href="">HH</a>
            <a href="">HH</a>
            <a href="">HH</a>
        </div>
    </header>
  )
}

export default SecondHeading