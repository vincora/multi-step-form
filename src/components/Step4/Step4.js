import React from 'react';
import style from './Step4.module.scss';

const Step4 = () => {
  return (
    <div className={style.checkout}>
        <div className={style.checkout__body}>
            <div className={style.checkout__plan}></div>
            <div className={style.checkout__addons}></div>
        </div>
        <div className={style.checkout__total}></div>
    </div>
  )
}

export default Step4