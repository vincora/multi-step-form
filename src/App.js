import style from "./App.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Buttons from "./components/buttons/Buttons";
import Step1 from "./components/step1/Step1";
import Step2 from "./components/step2/Step2";
import Step3 from "./components/step3/Step3";
import Step4 from "./components/Step4/Step4";
import arcadeIcon from "./images/icon-arcade.svg";
import advancedIcon from "./images/icon-advanced.svg";
import proIcon from "./images/icon-pro.svg";

function App() {
  const methods = useForm({
    defaultValues:{
      plan: "Arcade",
      plans : [
        { value: "Arcade", priceMonth: 9, priceYear: 90, icon: arcadeIcon },
        { value: "Advanced", priceMonth: 12, priceYear: 120, icon: advancedIcon },
        { value: "Pro" , priceMonth: 15, priceYear: 150, icon: proIcon},
      ],
      yearly: false,
      addons: {
        online_service: {
          isChecked: false,
          price: {
            month: 1,
            year: 10
          }
        },
        storage: {
          isChecked: false,
          price: {
            month: 2,
            year: 20
          }
        },
        customizable_profile: {
          isChecked: false,
          price: {
            month: 2,
            year: 20
          }
        }
      }
    },
    mode: 'all'
  });
  const onSubmit = (data) => console.log(data);

  const [step, setStep] = useState(1);

  const incrementStep = async () => {
    const result = await methods.trigger(["name", "email", "phone"]);
    console.log(methods.getValues());
    if (result) {
      setStep((prev) => prev + 1);
    }
  };
  const decrementStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className={style.layoutWrapper}>
      <div className={style.layout}>
        <div className={style.layout__sidebar}>
          <Sidebar step={step} />
        </div>
        <main className={style.layout__main}>
          <h1 hidden>Multi step form</h1>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
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
                    <Buttons
                      noBackBtn
                      incrementStep={incrementStep}
                      decrementStep={decrementStep}
                    />
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
                    <Buttons
                      incrementStep={incrementStep}
                      decrementStep={decrementStep}
                    />
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
                    <Buttons
                      incrementStep={incrementStep}
                      decrementStep={decrementStep}
                    />
                  </div>
                </div>
              )}
              {step === 4 && (
                <div className={style.main}>
                  <div className={style.main__content}>
                    <div className={style.main__header}>
                      <Header
                        title="Finishing up"
                        description="Double-check everything looks OK before confirming."
                      />
                    </div>
                    <Step4 />
                  </div>
                  <div className={style.main__buttons}>
                    <Buttons
                      incrementStep={incrementStep}
                      decrementStep={decrementStep}
                      confirm
                    />
                  </div>
                </div>
              )}
            </form>
          </FormProvider>
        </main>
      </div>
    </div>
  );
}

export default App;
