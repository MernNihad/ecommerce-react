import React from "react";
import css from "../Header.module.css";
//
function FirstHeading() {
  return (
    <div className={`${css.container} bg-color title-white`}>
      <div className={css.left}>
        <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!

        </p>
      </div>
      <div className={css.right}>
        <select name="" id="">
            <option value="english">English</option>
        </select>
      </div>
    </div>
  );
}

export default FirstHeading;
