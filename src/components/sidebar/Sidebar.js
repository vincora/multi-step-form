import React from "react";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  const titles = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    <aside className={style.sidebar}>
      <ul>
        {titles.map((item, number) => {
          return (
            <li className={style.item} key={item}>
              <div className={style.item__number}>{number+1}</div>
              <div className={style.item__info}>
                <div className={style.item__subtitle}>Step {number+1}</div>
                <div className={style.item__title}>{item}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
