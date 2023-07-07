import React from "react";
import style from "./Step4.module.scss";
import { useFormContext } from "react-hook-form";

const Step4 = () => {
  const { getValues } = useFormContext();

  const currentPlan = getValues("selectedPlan.name");
  const annualy = getValues("selectedPlan.annualy");
  const addons = getValues("addons");
  const addonsArray = Object.values(addons);

  return (
    <div className={style.checkout}>
      <div className={style.checkout__body}>
        <div className={style.checkout__main}>
          <div className={style.checkout__plan}>
            {`${currentPlan} (${annualy ? "Yearly" : "Monthly"})`}
          </div>
          <div className={style.checkout__price}>
            {`$${
              annualy
                ? getValues(`plansPrices.${currentPlan}.year`) + "/yr"
                : getValues(`plansPrices.${currentPlan}.month`) + '/mo'
            }`}
          </div>
        </div>
        <div className={style.checkout__addons}>
          {addonsArray.map((addon) => {
            if (addon.isChecked) {
              return (
                <div className="" key={addon.title}>
                  <div>{addon.title}</div>
                  <div className="">{`+$${
                    annualy
                      ? addon.price.year + "/yr"
                      : addon.price.month + "/mo"
                  }`}</div>
                </div>
              );
            }
            return undefined;
          })}
        </div>
      </div>
      <div className={style.checkout__total}></div>
    </div>
  );
};

export default Step4;
