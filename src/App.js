import style from "./App.module.scss";
import { useForm } from "react-hook-form";

function App() {

  const {register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <aside>
        <ul>
          <li>
            <div>Step 1</div>
            <div>Your info</div>
          </li>
          <li>
            <div>Step 2</div>
            <div>Select plan</div>
          </li>
          <li>
            <div>Step 3</div>
            <div>Add-ons</div>
          </li>
          <li>
            <div>Step 4</div>
            <div>Summary</div>
          </li>
        </ul>
      </aside>
      <main>
        <h1 hidden>Multi step form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Personal info</h2>
          <div>Please provide your name, email address, and phone number.</div>
          <label htmlFor="">
            Name
            <input type="text" {...register('name', {required: 'This field is required'})} placeholder="e.g. Stephen King"/>
          </label>
          <label htmlFor="">
            Email Address
            <input type="text" {...register('email', {required: 'This field is required'})} placeholder="e.g. stephenking@lorem.com"/>
          </label>
          <label htmlFor="">
            Phone Number
            <input type="text" {...register('phone', {required: 'This field is required'})} placeholder="e.g. +1 234 567 890"/>
          </label>
          <button>Next Step</button>
        </form>
      </main>
    </div>
  );
}

export default App;
