import { useState } from "react";
import style from "./Step2.module.scss";
import arcadeIcon from "../../images/icon-arcade.svg";
import advancedIcon from "../../images/icon-advanced.svg";
import proIcon from "../../images/icon-pro.svg";

const Step2 = () => {
  const [term, setTerm] = useState("monthly");

  return (
    <div>
      <ul className={style.plansList}>
        <li className={style.plan}>
          <div className={style.plan__img}>
            <img src={arcadeIcon} alt="" />
          </div>
          <div className={style.plan__description}>
            <div className={style.plan__title}>Arcade</div>
            <div className={style.plan__price}>$9/mo</div>
            <div className={style.plan__discount}>2 months free</div>
          </div>
        </li>
        <li className={style.plan}>
          <div className={style.plan__img}>
            <img src={advancedIcon} alt="" />
          </div>
          <div className={style.plan__description}>
            <div className={style.plan__title}>Advanced</div>
            <div className={style.plan__price}>$12/mo</div>
            <div className={style.plan__discount}>2 months free</div>
          </div>
        </li>
        <li className={style.plan}>
          <div className={style.plan__img}>
            <img src={proIcon} alt="" />
          </div>
          <div className={style.plan__description}>
            <div className={style.plan__title}>Pro</div>
            <div className={style.plan__price}>$15/mo</div>
            <div className={style.plan__discount}>2 months free</div>
          </div>
        </li>
      </ul>
      <div className={style.term}>
        <div>
          Monthly
        </div>
        <label className={style.term__switch}>
          <input
            type="checkbox"
            className={style.term__checkbox}
          />
          <span className={style.term__slider}></span>
        </label>
        <div>
          Yearly
        </div>
      </div>
    </div>
  );
};

export default Step2;
