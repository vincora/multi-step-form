import React from "react";
import style from "./Step1.module.scss";
import { useFormContext } from "react-hook-form";
import cn from "classnames";

const Input = ({ label, placeholder, registerName, filterValue }) => {
  const {
    register,
    formState: { errors, touchedFields },
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
        className={cn(style.input, {
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
      {/* <li className={style.list__item}>
        <label>
          {" "}
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
            {...register("name", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Should have at least 3 symbols",
              },
            })}
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
              [style.input_error]:
                (touchedFields.email || isDirty.email) && errors.email,
            })}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email",
              },
            })}
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
              [style.input_error]:
                (touchedFields.phone || isDirty.phone) && errors.phone,
            })}
            {...register("phone", {
              required: "This field is required",
              validate: {
                digitsOnly: (v) => {
                  if (v.replace(/[^\d]/g, "").length < 9) return "Invalid";
                },
              },
            })}
          />
        </label>
      </li> */}
    </ul>
  );
};

export default Step1;
