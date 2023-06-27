import { useState } from "react";
import style from "./Step2.module.scss";
import arcadeIcon from "../../images/icon-arcade.svg";
import advancedIcon from "../../images/icon-advanced.svg";
import proIcon from "../../images/icon-pro.svg";
import cn from "classnames";

const Plan = ({
  plan,
  term,
  planText,
  icon,
  priceMonth,
  priceYear,
  onClick,
}) => {
  return (
    <li
      className={cn(style.plan, { [style.plan_active]: plan === planText })}
      onClick={onClick}
    >
      <div className={style.plan__img}>
        <img src={icon} alt="" />
      </div>
      <div className={style.plan__description}>
        <div className={style.plan__title}>{planText}</div>
        <div className={style.plan__price}>
          {!term ? `$${priceMonth}/mo` : `$${priceYear}/yr`}
        </div>
        <div
          className={cn(style.plan__discount, {
            [style.plan__discount_visible]: term,
          })}
        >
          2 months free
        </div>
      </div>
    </li>
  );
};

const Step2 = () => {
  const [term, setTerm] = useState(false);
  const [plan, setPlan] = useState("Arcade");

  return (
    <div>
      <ul className={style.plansList}>
        <Plan
          plan={plan}
          term={term}
          planText="Arcade"
          icon={arcadeIcon}
          priceMonth={9}
          priceYear={90}
          onClick={() => setPlan("Arcade")}
        />
        <Plan
          plan={plan}
          term={term}
          planText="Advanced"
          icon={advancedIcon}
          priceMonth={12}
          priceYear={120}
          onClick={() => setPlan("Advanced")}
        />
        <Plan
          plan={plan}
          term={term}
          planText="Pro"
          icon={proIcon}
          priceMonth={15}
          priceYear={150}
          onClick={() => setPlan("Pro")}
        />
      </ul>
      <div className={style.term}>
        <div>Monthly</div>
        <label className={style.term__switch}>
          <input
            type="checkbox"
            className={style.term__checkbox}
            onChange={() => setTerm((term) => !term)}
          />
          <span className={style.term__slider}></span>
        </label>
        <div>Yearly</div>
      </div>
    </div>
  );
};

export default Step2;
