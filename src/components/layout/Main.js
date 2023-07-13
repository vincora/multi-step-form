import React from "react";
import style from "./Main.module.scss";
import Header from "../header/Header";

const Main = ({ children, buttons, title, description }) => {
  return (
    <div className={style.main}>
      <div className={style.main__content}>
        <div className={style.main__header}>
          <Header
            title={title}
            description={description}
          />
        </div>
        {children}
      </div>
      <div className={style.main__buttons}>
        {buttons}
      </div>
    </div>
  );
};

export default Main;
