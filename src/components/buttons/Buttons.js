import React from "react";
import style from './Buttons.module.scss';

const Buttons = () => {
  return (
    <div className={style.buttons}>
      <button className={style.previousBtn}>Go Back</button>
      <button className={style.nextBtn}>Next Step</button>
    </div>
  );
};

export default Buttons;
