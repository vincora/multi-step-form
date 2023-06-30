
import style from "./Step2.module.scss";
import arcadeIcon from "../../images/icon-arcade.svg";
import advancedIcon from "../../images/icon-advanced.svg";
import proIcon from "../../images/icon-pro.svg";
import cn from "classnames";
import { useFormContext, useWatch } from "react-hook-form";

const Plan = ({ yearly, icon, priceMonth, priceYear, value, name }) => {
  const { getValues, register, control } = useFormContext();
  useWatch({
    control,
    name: name
  });

  return (
    <label
      className={cn(style.plan, {
        [style.plan_active]: getValues(name) === value,
      })}
    >
      <input {...register(name)} type="radio" name={name} value={value} />
      <div className={style.plan__img}>
        <img src={icon} alt="" />
      </div>
      <div className={style.plan__description}>
        <div className={style.plan__title}>{value}</div>
        <div className={style.plan__price}>
          {yearly ? `$${priceYear}/yr` : `$${priceMonth}/mo`}
        </div>
        <div
          className={cn(style.plan__discount, {
            [style.plan__discount_visible]: yearly,
          })}
        >
          2 months free
        </div>
      </div>
    </label>
  );
};

const plans = [
  { icon: arcadeIcon, priceMonth: 9, priceYear: 90, value: "Arcade" },
  { icon: advancedIcon, priceMonth: 12, priceYear: 120, value: "Advanced" },
  { icon: proIcon, priceMonth: 15, priceYear: 150, value: "Pro" },
];

const Step2 = () => {
  const { register, getValues } = useFormContext();
  useWatch({
    name: 'yearly'
  })

  return (
    <div>
      <ul className={style.plansList}>
        {plans.map(({ icon, priceMonth, priceYear, value, yearly }) => {
          return (
            <li className={style.plan__wrapper} key={value}>
              <Plan
                icon={icon}
                priceMonth={priceMonth}
                priceYear={priceYear}
                value={value}
                name="plan"
                yearly={getValues("yearly")}
              />
            </li>
          );
        })}
      </ul>
      <div className={style.term}>
        <div>Monthly</div>
        <label className={style.term__switch}>
          <input
            type="checkbox"
            className={style.term__checkbox}
            {...register("yearly")}
          />
          <span className={style.term__slider}></span>
        </label>
        <div>Yearly</div>
      </div>
    </div>
  );
};

export default Step2;
