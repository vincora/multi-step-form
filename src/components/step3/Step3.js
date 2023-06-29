import { useState } from "react";
import style from "./Step3.module.scss";
import cn from "classnames";
import checkmark from "../../images/checkmark.svg";

const Addon = ({ title, description, price }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <li className={style.list__item}>
      <label  className={cn(style.addon, {
              [style.addon_checked]: isChecked,
            })}
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}>
        <div className={style.addon__start}>
          <div className={style.addon__checkbox}
          >
            <input type="checkbox" />
            <img src={checkmark} alt="" />
          </div>
          <div>
            <div className={style.addon__title}>{title}</div>
            <div className={style.addon__description}>{description}</div>
          </div>
        </div>
        <div className={style.addon__price}>{price}</div>
      </label>
    </li>
  );
};

const Step3 = () => {
  return (
    <ul className={style.list}>
      <Addon
        title="Online service"
        description="Access to multiplayer games"
        price="+$1/mo"
      />
      <Addon
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price="+$2/mo"
      />
      <Addon
        title="Customizable Profile"
        description="Custom theme on your profile"
        price="+$2/mo"
      />
    </ul>
  );
};

export default Step3;
