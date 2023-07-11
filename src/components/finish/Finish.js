import style from './Finish.module.scss';
import finishIcon from '../../images/icon-thank-you.svg';

const Finish = ({title, description}) => {
  return (
    <div className={style.finish}>
        <div className={style.finish__body}>
            <div className={style.finish__icon}><img src={finishIcon} alt="Thank you!" /></div>
            <div className={style.finish__title}>{title}</div>
            <div className={style.finish__description}>{description}</div>
        </div>
    </div>
  )
}

export default Finish