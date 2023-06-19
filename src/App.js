import style from "./App.module.scss";
import { useForm } from "react-hook-form";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={style.layoutWrapper}>
      <div className={style.layout}>
        <div className={style.layout__sidebar}>
          <Sidebar />
        </div>
        <main className={style.layout__main}>
          <h1 hidden>Multi step form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={style.title}>Personal info</h2>
            <div className={style.subtitle}>
              Please provide your name, email address, and phone number.
            </div>
            <ul className={style.list}>
              <li className={style.listItem}>
                <label htmlFor="">
                  Name
                </label>
                <input
                    type="text"
                    {...register("name", {
                      required: "This field is required",
                    })}
                    placeholder="e.g. Stephen King"
                  />
              </li>
              <li>
                <label htmlFor="">
                  Email Address
                </label>
                <input
                    type="text"
                    {...register("email", {
                      required: "This field is required",
                    })}
                    placeholder="e.g. stephenking@lorem.com"
                  />
              </li>
              <li>
                <label htmlFor="">
                  Phone Number
                </label>
                <input
                    type="text"
                    {...register("phone", {
                      required: "This field is required",
                    })}
                    placeholder="e.g. +1 234 567 890"
                  />
              </li>
            </ul>

            <button>Next Step</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
