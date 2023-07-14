import React from "react";
import style from "./Sidebar.module.scss";
import { clsx } from 'clsx';

const Sidebar = ({ step }) => {
  const titles = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    <aside className={style.sidebar}>
      <ul>
        {titles.map((item, index) => {
          return (
            <li className={style.item} key={item}>
              <div
                className={clsx(style.item__number, {
                  [style.item__number_active]: step === index + 1,
                })}
              >
                {index + 1}
              </div>
              <div className={style.item__info}>
                <div className={style.item__subtitle}>Step {index + 1}</div>
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
