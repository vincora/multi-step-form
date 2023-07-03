import { useState } from "react";
import style from "./Step3.module.scss";
import cn from "classnames";
import checkmark from "../../images/checkmark.svg";
import { useFormContext } from "react-hook-form";

const Addon = ({ title, description, price, registerName }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { register } = useFormContext();

  return (
    <label
      className={cn(style.addon, {
        [style.addon_checked]: isChecked,
      })}
      checked={isChecked}
      onChange={() => setIsChecked((prev) => !prev)}
    >
      <div className={style.addon__start}>
        <div className={style.addon__checkbox}>
          <input type="checkbox" {...register(registerName)} />
          <img src={checkmark} alt="" />
        </div>
        <div>
          <div className={style.addon__title}>{title}</div>
          <div className={style.addon__description}>{description}</div>
        </div>
      </div>
      <div className={style.addon__price}>{price}</div>
    </label>
  );
};

const Step3 = () => {

  return (
    <ul className={style.list}>
      <li className={style.list__item}>
        <Addon
          title="Online service"
          description="Access to multiplayer games"
          price="+$1/mo"
          registerName="addons.online_service"
        />
      </li>
      <li className={style.list__item}>
        <Addon
          title="Larger storage"
          description="Extra 1TB of cloud save"
          price="+$2/mo"
          registerName="addons.storage"
        />
      </li>
      <li className={style.list__item}>
        <Addon
          title="Customizable Profile"
          description="Custom theme on your profile"
          price="+$2/mo"
          registerName="addons.customizable_profile"
        />
      </li>
    </ul>
  );
};

export default Step3;
