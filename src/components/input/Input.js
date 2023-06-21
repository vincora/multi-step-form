import React from "react";
import style from './Input.module.scss';

const Input = ({label, placeholder}) => {
  return (
    <label className={style.label}>
      {label}
      <input
        type="text"
        placeholder={placeholder}
        className={style.input}
      />
    </label>
  );
};

export default Input;
