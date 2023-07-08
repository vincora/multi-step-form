import React from "react";
import style from "./Step4.module.scss";
import { useFormContext } from "react-hook-form";

const Step4 = () => {
  const { getValues } = useFormContext();

  const values = getValues();
  const currentPlan = values.selectedPlan.name;
  const annualy = values.selectedPlan.annualy;
  const addons = Object.values(values.addons).filter((item) => item.isChecked);
  const totalPrice = annualy
    ? values.plansPrices[currentPlan].year +
      addons.reduce((a, b) => a.price.year + b.price.year)
    : values.plansPrices[currentPlan].month +
      addons.reduce((a, b) => a.price.month + b.price.month);

  return (
    <div className={style.checkout}>
      <div className={style.checkout__body}>
        <div className={style.checkout__main}>
          <div className={style.checkout__plan}>
            {`${currentPlan} (${annualy ? "Yearly" : "Monthly"})`}
          </div>
          <div>
            {`$${
              annualy
                ? values.plansPrices[currentPlan].year + "/yr"
                : values.plansPrices[currentPlan].month + "/mo"
            }`}
          </div>
        </div>
        <div className={style.checkout__addons}>
          <div className={style.addons}>
            {addons.map((addon) => {
              return (
                <div className={style.addons__item} key={addon.title}>
                  <div className={style.addons__title}>{addon.title}</div>
                  <div>{`+$${
                    annualy
                      ? addon.price.year + "/yr"
                      : addon.price.month + "/mo"
                  }`}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.checkout__total}>
        <div className={style.total}>
          <div>Total (per {annualy ? "year" : "month"})</div>
          <div className={style.total__price}>{`$${totalPrice}${
            annualy ? "/yr" : "/mo"
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
