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
              <div className={style.itemNumber}>{number+1}</div>
              <div className={style.itemInfo}>
                <div className={style.itemSubTitle}>Step {number+1}</div>
                <div className={style.itemTitle}>{item}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
