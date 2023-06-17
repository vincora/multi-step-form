import style from "./App.module.scss";

function App() {
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
        <h1>Multi step form</h1>
        <form action="">
          <h2>Personal info</h2>
          <div>Please provide your name, email address, and phone number.</div>
          <label htmlFor="">
            Name
            <input type="text" />
          </label>
          <label htmlFor="">
            Email Address
            <input type="text" />
          </label>
          <label htmlFor="">
            Phone Number
            <input type="text" />
          </label>
          <button>Next Step</button>
        </form>
      </main>
    </div>
  );
}

export default App;
