import style from "./App.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Buttons from "./components/buttons/Buttons";
import Step1 from "./components/step1/Step1";
import Step2 from "./components/step2/Step2";
import Step3 from "./components/step3/Step3";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [step, setStep] = useState(3);

  return (
    <div className={style.layoutWrapper}>
      <div className={style.layout}>
        <div className={style.layout__sidebar}>
          <Sidebar step={step}/>
        </div>
        <main className={style.layout__main}>
          <h1 hidden>Multi step form</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={style.layout__form}
          >
            {step === 1 && (
              <div className={style.main}>
                <div className={style.main__content}>
                  <div className={style.main__header}>
                    <Header
                      title="Personal info"
                      description="Please provide your name, email address, and phone number."
                    />
                  </div>
                  <Step1 />
                </div>
                <div className={style.main__buttons}>
                  <Buttons noBackBtn setStep={setStep} step={step} />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className={style.main}>
                <div className={style.main__content}>
                  <div className={style.main__header}>
                    <Header
                      title="Select your plan"
                      description="You have the option of monthly or yearly billing."
                    />
                  </div>
                  <Step2 />
                </div>
                <div className={style.main__buttons}>
                  <Buttons setStep={setStep} />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className={style.main}>
              <div className={style.main__content}>
                <div className={style.main__header}>
                  <Header
                    title="Pick add-ons"
                    description="Add-ons help enhance your gaming experience."
                  />
                </div>
                <Step3 />
              </div>
              <div className={style.main__buttons}>
                <Buttons setStep={setStep} />
              </div>
            </div>
            )}
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
