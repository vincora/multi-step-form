import style from "./Step3.module.scss";
import checkmark from "./images/icon-checkmark.svg";
import { useFormContext, useWatch } from "react-hook-form";
import { clsx } from 'clsx';


const Addon = ({ registerName }) => {
  const { register, getValues } = useFormContext();
  useWatch({
    name: [
      registerName
    ],
  });
  const addon = getValues(`${registerName}`);
  const annualy = getValues("selectedPlan.annualy");

  return (
    <label
      className={clsx(style.addon, {
        [style.addon_checked]: addon.isChecked,
      })}
    >
      <div className={style.addon__start}>
        <div className={style.addon__checkbox}>
          <input type="checkbox" {...register(`${registerName}.isChecked`)} />
          <img src={checkmark} alt={addon.title} />
        </div>
        <div>
          <div className={style.addon__title}>{addon.title}</div>
          <div className={style.addon__description}>{addon.description}</div>
        </div>
      </div>
      <div className={style.addon__price}>
        {annualy ? `+$${addon.price.year}/yr` : `+$${addon.price.month}/mo`}
      </div>
    </label>
  );
};

const Step3 = () => {
  return (
    <ul className={style.list}>
      <li className={style.list__item}>
        <Addon registerName="addons.onlineService" />
      </li>
      <li className={style.list__item}>
        <Addon registerName="addons.storage" />
      </li>
      <li className={style.list__item}>
        <Addon registerName="addons.customizableProfile" />
      </li>
    </ul>
  );
};

export default Step3;
