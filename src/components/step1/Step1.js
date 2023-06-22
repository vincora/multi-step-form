import React from "react";
import style from "./Step1.module.scss";

const Step1 = () => {
  const inputs = [
    { label: "Name", placeholder: "e.g. Stephen King" },
    { label: "Email Address", placeholder: "e.g. stephenking@lorem.com" },
    { label: "Phone Number", placeholder: "e.g. +1 234 567 890" },
  ];
  const Input = ({ label, placeholder }) => {
    return (
      <label>
        {label}
        <input type="text" placeholder={placeholder} className={style.input} />
      </label>
    );
  };
  return (
    <ul className={style.list}>
      {inputs.map(({ label, placeholder }) => {
        return (
          <li className={style.list__item} key={label}>
            <Input label={label} placeholder={placeholder} />
          </li>
        );
      })}
    </ul>
  );
};

export default Step1;
