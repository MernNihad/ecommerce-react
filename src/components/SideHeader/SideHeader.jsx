import React from 'react'
import css  from "./SideHeader.module.css";

function SideHeader() {
  return (
    <div className={`${css.container}`}>
        <div className={`${css.left}` }>
            <div className={css.nav}>
                <a href="">Woman’s Fashion</a>
            </div>
            <div className={css.nav}>
                <a href="">Men’s Fashion</a>
            </div>
            <div className={css.nav}>
                <a href="">Electronics</a>
            </div>
            <div className={css.nav}>
                <a href="">Home & Lifestyle</a>
            </div>
            <div className={css.nav}>
                <a href="">Medicine</a>
            </div>
            <div className={css.nav}>
                <a href="">Sports & Outdoor</a>
            </div>
            <div className={css.nav}>
                <a href="">Baby’s & Toys</a>
            </div>
            <div className={css.nav}>
                <a href="">Health & Beauty</a>
            </div>
        </div>
        <div className={css.right}>
            <img src="/Frame 560.svg" alt="loading" />
        </div>

    </div>
  )
}

export default SideHeader