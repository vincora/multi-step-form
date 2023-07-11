import React from "react";
import style from "./Buttons.module.scss";
import cn from "classnames";

const Buttons = ({ noBackBtn, confirm, incrementStep, decrementStep }) => {


  return (
    <div className={style.buttons}>
      <div>
        {!noBackBtn && (
          <button className={style.backButton} onClick={decrementStep}>
            Go Back
          </button>
        )}
      </div>
      {(!confirm && (
        <button
          className={cn(style.button, style.nextButton)}
          onClick={incrementStep}
        >
          Next Step
        </button>
      )) ||
        (confirm && (
          <button className={cn(style.button, style.confirm)} type="submit" onClick={incrementStep}>Confirm</button>
        ))}
    </div>
  );
};

export default Buttons;
