import style from "./App.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { useState, useCallback } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Buttons from "./components/buttons/Buttons";
import Step1 from "./components/step1/Step1";
import Step2 from "./components/step2/Step2";
import Step3 from "./components/step3/Step3";
import Step4 from "./components/Step4/Step4";
import StepLayout from "./components/layout/StepLayout";
import arcadeIcon from "./images/icon-arcade.svg";
import advancedIcon from "./images/icon-advanced.svg";
import proIcon from "./images/icon-pro.svg";
import Finish from "./components/finish/Finish";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().nonempty("Name is required").min(3, "3 symbols minimum"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Email format is not valid"),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .refine((v) => v.replace(/[^\d]/g, "").length >= 10, {
      message: "Phone number is invalid",
    }),
});

function App() {
  const methods = useForm({
    defaultValues: {
      selectedPlan: {
        name: "arcade",
        annualy: false,
      },
      plans: {
        arcade: {
          name: "arcade",
          icon: arcadeIcon,
          price: {
            month: 9,
            year: 90,
          },
        },
        advanced: {
          name: "advanced",
          icon: advancedIcon,
          price: {
            month: 12,
            year: 120,
          },
        },
        pro: {
          name: "pro",
          icon: proIcon,
          price: {
            month: 15,
            year: 150,
          },
        },
      },
      addons: {
        onlineService: {
          title: "Online service",
          description: "Access to multiplayer games",
          isChecked: false,
          price: {
            month: 1,
            year: 10,
          },
        },
        storage: {
          title: "Larger storage",
          description: "Extra 1TB of cloud save",
          isChecked: false,
          price: {
            month: 2,
            year: 20,
          },
        },
        customizableProfile: {
          title: "Customizable Profile",
          description: "Custom theme on your profile",
          isChecked: false,
          price: {
            month: 2,
            year: 20,
          },
        },
      },
    },
    mode: "all",
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    setStep(5);
    console.log(data)};

  const [step, setStep] = useState(1);

  const incrementStep = useCallback(async () => {
    const result = await methods.trigger(["name", "email", "phone"]);
    if (result) {
      setStep((prev) => prev + 1);
    }
  }, [methods]);

  const decrementStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);
  const backToSelectPlan = useCallback(() => {
    setStep(2);
  }, []);

  return (
    <div className={style.background}>
      <div className={style.layout}>
        <div className={style.layout__sidebar}>
          <Sidebar step={step} />
        </div>
        <main className={style.layout__main}>
          
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className={style.layout__form}
            >
              {step === 1 && (
                <StepLayout
                  buttons={
                    <Buttons
                      noBackBtn
                      incrementStep={incrementStep}
                      decrementStep={decrementStep}
                    />
                  }
                  title="Personal info"
                  description="Please provide your name, email address, and phone number."
                >
                  <Step1 />
                </StepLayout>
              )}
              {step === 2 && (
                <StepLayout
                  buttons={
                    <Buttons
                      incrementStep={incrementStep}
                      decrementStep={decrementStep}
                    />
                  }
                  title="Select your plan"
                  description="You have the option of monthly or yearly billing."
                >
                  <Step2 />
                </StepLayout>
              )}
              {step === 3 && (
                <StepLayout
                  buttons={
                    <Buttons
                      incrementStep={incrementStep}
                      decrementStep={decrementStep}
                    />
                  }
                  title="Pick add-ons"
                  description="Add-ons help enhance your gaming experience."
                >
                  <Step3 />
                </StepLayout>
              )}
              {step === 4 && (
                <StepLayout
                  buttons={
                    <Buttons
                      incrementStep={incrementStep}
                      decrementStep={decrementStep}
                      confirm
                    />
                  }
                  title="Finishing up"
                  description="Double-check everything looks OK before confirming."
                >
                  <Step4 backToSelectPlan={backToSelectPlan} />
                </StepLayout>
              )}
              {step === 5 && (
                <div className={style.main}>
                  <Finish
                    title="Thank you!"
                    description="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
                  />
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
