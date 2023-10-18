import React from 'react'
import { FiHeart,FiSearch,FiShoppingCart } from 'react-icons/fi';


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

            <div className={css.searchContainer}>
                <input type="search" />
                <a href=""><FiSearch/> </a>

            </div>
            <a href=""> <FiHeart/> </a>
            <a href=""><FiShoppingCart/></a>
        </div>
    </header>
  )
}

export default SecondHeading