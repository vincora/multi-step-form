import React from 'react';
import style from './Step2.module.scss';

const Step2 = () => {
  return (
    <ul className={style.plansList}>
        <li className={style.plan}>
            <div className={style.plan__img}></div>
            <div className={style.plan__description}>
                <div className={style.plan__title}>Arcade</div>
                <div className={style.plan__price}>$9/mo</div>
                <div className={style.plan__discount}>2 months free</div>
            </div>
        </li>
        <li className={style.plan}>
            <div className={style.plan__img}></div>
            <div className={style.plan__description}>
                <div className={style.plan__title}>Advanced</div>
                <div className={style.plan__price}>$12/mo</div>
                <div className={style.plan__discount}>2 months free</div>
            </div>
        </li>
        <li className={style.plan}>
            <div className={style.plan__img}></div>
            <div className={style.plan__description}>
                <div className={style.plan__title}>Pro</div>
                <div className={style.plan__price}>$15/mo</div>
                <div className={style.plan__discount}>2 months free</div>
            </div>
        </li>
    </ul>
  )
}

export default Step2