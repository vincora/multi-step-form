import React from "react";
import style from "./Step1.module.scss";

const Step1 = () => {
  return (
    <ul className={style.list}>
      <li className={style.list__item}>
        <label>
          Name
          <input
            type="text"
            placeholder="e.g. Stephen King"
            className={style.input}
          />
        </label>
      </li>
      <li className={style.list__item}>
        <label>
          Email Address
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            className={style.input}
          />
        </label>
      </li>
      <li className={style.list__item}>
        <label>
          Phone Number
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            className={style.input}
          />
        </label>
      </li>
    </ul>
  );
};

export default Step1;
