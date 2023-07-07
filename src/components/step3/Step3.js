import style from "./Step3.module.scss";
import cn from "classnames";
import checkmark from "../../images/checkmark.svg";
import { useFormContext, useWatch } from "react-hook-form";

const Addon = ({ title, description, registerName }) => {
  const { register, getValues } = useFormContext();
  useWatch({
    name: [
      "addons.online_service.isChecked",
      "addons.storage.isChecked",
      "addons.customizable_profile.isChecked",
    ],
  });

  return (
    <label
      className={cn(style.addon, {
        [style.addon_checked]: getValues(`${registerName}.isChecked`),
      })}
    >
      <div className={style.addon__start}>
        <div className={style.addon__checkbox}>
          <input type="checkbox" {...register(`${registerName}.isChecked`)} />
          <img src={checkmark} alt={title} />
        </div>
        <div>
          <div className={style.addon__title}>{getValues(`${registerName}.title`)}</div>
          <div className={style.addon__description}>{getValues(`${registerName}.description`)}</div>
        </div>
      </div>
      <div className={style.addon__price}>
        {getValues("selectedPlan.annualy")
          ? `+$${getValues(`${registerName}.price.year`)}/yr`
          : `+$${getValues(`${registerName}.price.month`)}/mo`}
      </div>
    </label>
  );
};

const Step3 = () => {
  return (
    <ul className={style.list}>
      <li className={style.list__item}>
        <Addon
          registerName="addons.online_service"
        />
      </li>
      <li className={style.list__item}>
        <Addon
          registerName="addons.storage"
        />
      </li>
      <li className={style.list__item}>
        <Addon
          registerName="addons.customizable_profile"
        />
      </li>
    </ul>
  );
};

export default Step3;
