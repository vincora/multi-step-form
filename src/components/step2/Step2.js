import style from "./Step2.module.scss";
import { clsx } from 'clsx';
import { useFormContext, useWatch } from "react-hook-form";

const selectedPlan = 'selectedPlan.name';
const selectedTerm = 'selectedPlan.annualy';

const Plan = ({ icon, priceMonth, priceYear, plan}) => {
  const { getValues, register, control } = useFormContext();
  useWatch({
    control,
    name: [selectedPlan, selectedTerm]
  });
  const annualy = getValues(selectedTerm);

  return (
    <label
      className={clsx(style.plan, {
        [style.plan_active]: getValues(selectedPlan) === plan,
      })}
    >
      <input
        {...register(selectedPlan)}
        type="radio"
        value={plan}
      />
      <div className={style.plan__img}>
        <img src={icon} alt={plan} />
      </div>
      <div className={style.plan__description}>
        <div className={style.plan__title}>{plan}</div>
        <div className={style.plan__price}>
          {`$${annualy ? priceYear + "/yr" : priceMonth + "/mo"}`}

        </div>
        <div
          className={clsx(style.plan__discount, {
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
  useWatch({
    name: [selectedTerm]
  });
  const values = getValues();
  const plans = Object.values(values.plans);
  const annualy = getValues(selectedTerm);

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
        <div className={clsx(style.term__label, {[style.term__label_active]: !annualy})}>Monthly</div>
        <label className={style.term__switch}>
          <input
            {...register(selectedTerm)}
            type="checkbox"
            className={style.term__checkbox}
          />
          <span className={style.term__slider}></span>
        </label>
        <div className={clsx(style.term__label, {[style.term__label_active]: annualy})}>Yearly</div>
      </div>
    </div>
  );
};

export default Step2;
