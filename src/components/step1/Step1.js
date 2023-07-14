import React from "react";
import style from "./Step1.module.scss";
import { useFormContext } from "react-hook-form";
import { clsx } from 'clsx';

const Input = ({ label, placeholder, registerName, filterValue }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { onChange, ...rest } = register(registerName);

  const handleChange = (e) => {
    if (typeof filterValue === "function") {
      e.target.value = filterValue(e.target.value);
    }
    onChange.call(this, e);
  };

  return (
    <label>
      <div className={style.input__label}>
        <p>{label}</p>
        <p className={style.input__errorMessage}>
          {errors[registerName]?.message}
        </p>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={clsx(style.input, {
          [style.input_error]: errors[registerName],
        })}
        {...rest}
        onChange={handleChange}
      />
    </label>
  );
};

const Step1 = () => {
  return (
    <ul className={style.list}>
      <li className={style.list__item}>
        <Input
          label="Name"
          placeholder="e.g. Stephen King"
          registerName="username"
        />
      </li>
      <li className={style.list__item}>
        <Input
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          registerName="email"
        />
      </li>
      <li className={style.list__item}>
        <Input
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          registerName="phone"
          filterValue={(value) => value.replace(/[^\d\s+()]/g, "")}
        />
      </li>
    </ul>
  );
};

export default Step1;
