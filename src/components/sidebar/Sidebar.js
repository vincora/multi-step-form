import React from "react";
import style from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <ul>
        <li className={style.item}>
          <div className={style.itemNumber}>1</div>
          <div className={style.itemInfo}>
              <div className={style.itemSubTitle}>Step 1</div>
              <div className={style.itemTitle}>Your info</div>
          </div>
        </li>
        <li className={style.item}>
          <div className={style.itemNumber}>2</div>
          <div className={style.itemInfo}>
              <div className={style.itemSubTitle}>Step 2</div>
              <div className={style.itemTitle}>Select plan</div>
          </div>
        </li>
        <li className={style.item}>
          <div className={style.itemNumber}>3</div>
          <div className={style.itemInfo}>
              <div className={style.itemSubTitle}>Step 3</div>
              <div className={style.itemTitle}>Add-ons</div>
          </div>
        </li>
        <li className={style.item}>
          <div className={style.itemNumber}>4</div>
          <div className={style.itemInfo}>
              <div className={style.itemSubTitle}>Step 4</div>
              <div className={style.itemTitle}>Summary</div>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
