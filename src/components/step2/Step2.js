import style from "./Step2.module.scss";
import cn from "classnames";
import { useFormContext, useWatch } from "react-hook-form";
import arcadeIcon from "../../images/icon-arcade.svg";
import advancedIcon from "../../images/icon-advanced.svg";
import proIcon from "../../images/icon-pro.svg";

const plans = [
  { plan: "Arcade", priceMonth: 9, priceYear: 90, icon: arcadeIcon },
  {
    plan: "Advanced",
    priceMonth: 12,
    priceYear: 120,
    icon: advancedIcon,
  },
  { plan: "Pro", priceMonth: 15, priceYear: 150, icon: proIcon },
];

const Plan = ({ icon, priceMonth, priceYear, plan}) => {
  const { getValues, register, control } = useFormContext();
  useWatch({
    control,
    name: ['selectedPlan.name', "selectedPlan.annualy"]
  });

  return (
    <label
      className={cn(style.plan, {
        [style.plan_active]: getValues('selectedPlan.name') === plan,
      })}
    >
      <input
        {...register('selectedPlan.name')}
        type="radio"
        value={plan}
      />
      <div className={style.plan__img}>
        <img src={icon} alt={plan} />
      </div>
      <div className={style.plan__description}>
        <div className={style.plan__title}>{plan}</div>
        <div className={style.plan__price}>
          {getValues("selectedPlan.annualy") ? `$${priceYear}/yr` : `$${priceMonth}/mo`}
        </div>
        <div
          className={cn(style.plan__discount, {
            [style.plan__discount_visible]: getValues("selectedPlan.annualy"),
          })}
        >
          2 months free
        </div>
      </div>
    </label>
  );
};

const Step2 = () => {
  const { register } = useFormContext();

  return (
    <div>
      <ul className={style.plansList}>
        {plans.map(({ plan, priceMonth, priceYear, icon }) => {
          return (
            <li className={style.plan__wrapper} key={plan}>
              <Plan
                icon={icon}
                priceMonth={priceMonth}
                priceYear={priceYear}
                plan={plan}
                registerName="selectedPlan.name"
              />
            </li>
          );
        })}
      </ul>
      <div className={style.term}>
        <div>Monthly</div>
        <label className={style.term__switch}>
          <input
            {...register("selectedPlan.annualy")}
            type="checkbox"
            className={style.term__checkbox}
          />
          <span className={style.term__slider}></span>
        </label>
        <div>Yearly</div>
      </div>
    </div>
  );
};

export default Step2;
