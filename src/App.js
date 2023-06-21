import style from "./App.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Step1 from "./components/step1/Step1";
import Header from "./components/header/Header";
import Buttons from "./components/buttons/Buttons";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [step, setStep] = useState(1);

  return (
    <div className={style.layoutWrapper}>
      <div className={style.layout}>
        <div className={style.layout__sidebar}>
          <Sidebar />
        </div>
        <main className={style.layout__main}>
          <h1 hidden>Multi step form</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={style.layout__form}
          >
            {step === 1 && (
              <>
                <div className={style.header}>
                  <Header
                    title="Personal info"
                    description=" Please provide your name, email address, and phone number."
                  />
                </div>
                <div className={style.content}>
                  <Step1 />
                </div>
                <div className={style.buttons}>
                  <Buttons forward />
                </div>
              </>
            )}
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
