import React from "react";
import style from "./Step1.module.scss";
import { useFormContext } from "react-hook-form";
import cn from "classnames";

const Step1 = () => {
  const {
    register,
    formState: { errors, touchedFields, isDirty },
  } = useFormContext();
  return (
    <ul className={style.list}>
      <li className={style.list__item}>
        <label>
          <div className={style.input__label}>
            <p>Name</p>
            <p className={style.input__errorMessage}>{errors.name?.message}</p>
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            className={cn(style.input, {
              [style.input_error]: touchedFields.name && errors.name,
            })}
            {...register("name", { required: "This field is required",
            minLength: {
              value: 3,
              message: 'Should have at least 3 symbols'
            } })}
          />
        </label>
      </li>
      <li className={style.list__item}>
        <label>
          <div className={style.input__label}>
            <p>Email Address</p>
            <p className={style.input__errorMessage}>{errors.email?.message}</p>
          </div>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            className={cn(style.input, {
              [style.input_error]: (touchedFields.email || isDirty.email) && errors.email,
            })}
            {...register("email", { required: "This field is required", pattern : {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Invalid email'
            } })}
          />
        </label>
      </li>
      <li className={style.list__item}>
        <label>
          <div className={style.input__label}>
            <p>Phone Number</p>
            <p className={style.input__errorMessage}>{errors.phone?.message}</p>
          </div>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            className={cn(style.input, {
              [style.input_error]: (touchedFields.phone || isDirty.phone)  && errors.phone,
            })}
            {...register("phone", {
              required: "This field is required",
              validate: {
                digitsOnly: v => {
                  if(v.replace(/[^\d]/g, '').length < 9)
                  return 'Invalid'
                } 
              },
            })}
          />
        </label>
      </li>
    </ul>
  );
};

export default Step1;
