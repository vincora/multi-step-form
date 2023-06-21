import style from "./App.module.scss";
import { useForm } from "react-hook-form";
import Sidebar from "./components/sidebar/Sidebar";
import Body from "./components/body/Body";

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
          <form onSubmit={handleSubmit(onSubmit)} className={style.layout__form}>
            <Body />
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
