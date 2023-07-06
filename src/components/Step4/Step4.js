import React from 'react';
import style from './Step4.module.scss';
import { useFormContext } from 'react-hook-form';

const Step4 = () => {
  const {getValues} = useFormContext();

  return (
    <div className={style.checkout}>
        <div className={style.checkout__body}>
            <div className={style.checkout__main}>
              <div className={style.checkout__plan}>{getValues('selectedPlan.name')}</div>
              <div className={style.checkout__price}></div>
            </div>
            <div className={style.checkout__addons}>
            </div>
        </div>
        <div className={style.checkout__total}></div>
    </div>
  )
}

export default Step4