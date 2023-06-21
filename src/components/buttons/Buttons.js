import React from "react";
import style from "./Buttons.module.scss";

const Buttons = ({ noBackBtn }) => {
  return (
    <div className={style.buttons}>
      <div>
        {!noBackBtn && <button className={style.backBtn}>Go Back</button>}
      </div>
      <button className={style.nextBtn}>Next Step</button>
    </div>
  );
};

export default Buttons;
