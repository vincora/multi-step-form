import React from "react";
import style from './Header.module.scss';

const Header = ({title, description}) => {
  return (
    <div className={style.header}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.description}>
       {description}
      </div>
    </div>
  );
};

export default Header;
