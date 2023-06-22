import React from "react";
import style from "./Buttons.module.scss";

const Buttons = ({ noBackBtn, setStep}) => {
  const incrementStep = () => {
    setStep((step) => step + 1);
  };
  const decrementStep = () => {
    setStep((step) => step - 1);
  };

  return (
    <div className={style.buttons}>
      <div>
        {!noBackBtn && (
          <button className={style.backBtn} onClick={decrementStep}>
            Go Back
          </button>
        )}
      </div>
      <button className={style.nextBtn} onClick={incrementStep}>
        Next Step
      </button>
    </div>
  );
};

export default Buttons;
