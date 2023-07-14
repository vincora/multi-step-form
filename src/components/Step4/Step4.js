import React from "react";
import style from "./Step4.module.scss";
import { useFormContext } from "react-hook-form";
import cn from "classnames"; // TODO replace wigh https://www.npmjs.com/package/clsx

const Step4 = ({ backToSelectPlan }) => {
  const { getValues } = useFormContext();

  const values = getValues();
  const currentPlan = values.selectedPlan.name;
  const annualy = values.selectedPlan.annualy;
  const addons = Object.values(values.addons).filter((item) => item.isChecked);
  const term = annualy ? "year" : "month";
  const termLabel = "/" + (annualy ? "yr" : "mo");
  const planTerm = annualy ? "Yearly" : "Monthly";
  const totalPrice =
    values.plans[currentPlan].price[term] +
    addons.reduce((a, b) => a + b.price[term], 0);

  const handleChange = (e) => {
    e.preventDefault();
    backToSelectPlan();
  };
  
  return (
    <div className={style.checkout}>
      <div className={style.checkout__body}>
        <div
          className={cn(style.checkout__main, {
            [style.checkout__main_border]: addons.length,
          })}
        >
          <div>
            <div
              className={style.checkout__plan}
            >{currentPlan}({planTerm})</div>
            <a
              href="/"
              className={style.checkout__changeBtn}
              onClick={handleChange}
            >
              Change
            </a>
          </div>
          <div>{`$${values.plans[currentPlan].price[term] + termLabel}`}</div>
        </div>
        {addons.length > 0 && (
          <div className={style.checkout__addons}>
            <div className={style.addons}>
              {addons.map((addon) => {
                return (
                  <div key={addon.title} className={style.addons__item} > 
                    <div className={style.addons__title}>{addon.title}</div>
                    <div>${addon.price[term]}{termLabel}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className={style.checkout__total}>
        <div className={style.total}>
          <div>Total (per {term})</div>
          <div
            className={style.total__price}
          >${totalPrice}{termLabel}</div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
