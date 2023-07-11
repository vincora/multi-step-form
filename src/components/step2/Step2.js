import style from "./Step2.module.scss";
import cn from "classnames";
import { useFormContext, useWatch } from "react-hook-form";

const Plan = ({ icon, priceMonth, priceYear, plan}) => {
  const { getValues, register, control } = useFormContext();
  useWatch({
    control,
    name: ['selectedPlan.name', "selectedPlan.annualy"]
  });
  const annualy = getValues("selectedPlan.annualy");


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
          {annualy ? `$${priceYear}/yr` : `$${priceMonth}/mo`}
        </div>
        <div
          className={cn(style.plan__discount, {
            [style.plan__discount_visible]: annualy,
          })}
        >
          2 months free
        </div>
      </div>
    </label>
  );
};

const Step2 = () => {
  const { register, getValues } = useFormContext();
  const values = getValues();
  const plans = Object.values(values.plans);

  return (
    <div>
      <ul className={style.plansList}>
        {plans.map(({ name, price, icon }) => {
          return (
            <li className={style.plan__wrapper} key={name}>
              <Plan
                icon={icon}
                priceMonth={price.month}
                priceYear={price.year}
                plan={name}
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
