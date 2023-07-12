import React from "react";
import style from "./Step4.module.scss";
import { useFormContext } from "react-hook-form";

const Step4 = () => {
  const { getValues } = useFormContext();

  const values = getValues();
  const currentPlan = values.selectedPlan.name;
  const annualy = values.selectedPlan.annualy;
  const addons = Object.values(values.addons).filter((item) => item.isChecked);
  const term = annualy ? "year" : "month";
  const termLabel = annualy ? "/yr" : "/mo";
  const planTerm = annualy ? "Yearly" : "Monthly"
  const totalPrice =
    values.plans[currentPlan].price[term] +
    addons.reduce((a, b) => a + b.price[term], 0);

  return (
    <div className={style.checkout}>
      <div className={style.checkout__body}>
        <div className={style.checkout__main}>
          <div className={style.checkout__plan}>
            {`${currentPlan} (${planTerm})`}
          </div>
          <div>{`$${values.plans[currentPlan].price[term] + termLabel}`}</div>
        </div>
        <div className={style.checkout__addons}>
          <div className={style.addons}>
            {addons.map((addon) => {
              return (
                <div className={style.addons__item} key={addon.title}>
                  <div className={style.addons__title}>{addon.title}</div>
                  <div>{`+$${addon.price[term] + termLabel}`}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.checkout__total}>
        <div className={style.total}>
          <div>Total (per {term})</div>
          <div
            className={style.total__price}
          >{`$${totalPrice}${termLabel}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
