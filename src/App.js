import React, { useState } from "react";
import "./App.css";
import { Login } from "./LoginPage/Login";
import { Register } from "./LoginPage/Register";

function App() {
  const [currnerForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <div className="App">
      {currnerForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
