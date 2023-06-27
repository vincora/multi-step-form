import { useState } from "react";
import style from "./Step2.module.scss";
import arcadeIcon from "../../images/icon-arcade.svg";
import advancedIcon from "../../images/icon-advanced.svg";
import proIcon from "../../images/icon-pro.svg";
import cn from "classnames";

const Step2 = () => {
  const [term, setTerm] = useState(false);
  const [plan, setPlan] = useState('arcade');

  return (
    <div>
      <ul className={style.plansList}>
        <li className={cn(style.plan, {[style.plan_active]: plan === 'arcade'})} onClick={() => setPlan('arcade')}>
          <div className={style.plan__img}>
            <img src={arcadeIcon} alt="" />
          </div>
          <div className={style.plan__description}>
            <div className={style.plan__title}>Arcade</div>
            <div className={style.plan__price}>{!term ? '$9/mo' : "$90/yr"}</div>
            <div className={cn(style.plan__discount, {[style.plan__discount_visible]: term})}>2 months free</div>
          </div>
        </li>
        <li className={cn(style.plan, {[style.plan_active]: plan === 'advanced'})} onClick={() => setPlan('advanced')}>
          <div className={style.plan__img}>
            <img src={advancedIcon} alt="" />
          </div>
          <div className={style.plan__description}>
            <div className={style.plan__title}>Advanced</div>
            <div className={style.plan__price}>{!term ? '$12/mo' : "$120/yr"}</div>
            <div className={cn(style.plan__discount, {[style.plan__discount_visible]: term})}>2 months free</div>
          </div>
        </li>
        <li className={cn(style.plan, {[style.plan_active]: plan === 'pro'})} onClick={() => setPlan('pro')}>
          <div className={style.plan__img}>
            <img src={proIcon} alt="" />
          </div>
          <div className={style.plan__description}>
            <div className={style.plan__title}>Pro</div>
            <div className={style.plan__price}>{!term ? '$15/mo' : "$150/yr"}</div>
            <div className={cn(style.plan__discount, {[style.plan__discount_visible]: term})}>2 months free</div>
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
            onChange={() => setTerm(term => !term)}
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
