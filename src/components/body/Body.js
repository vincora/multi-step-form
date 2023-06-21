import React from "react";
import style from "./Body.module.scss";


import Step1 from "../step1/Step1";

const Body = () => {

  return (
    <div>
      <div className={style.header}>
          <h2 className={style.title}>Personal info</h2>
          <div className={style.description}>
            Please provide your name, email address, and phone number.
          </div>
      </div>
      <div className={style.content}>
        <Step1/>
      </div>
      <div className={style.buttons}>
        <button className={style.previousBtn}>Go Back</button>
        <button className={style.nextBtn}>Next Step</button>
      </div>
    </div>
  );
};

export default Body;
