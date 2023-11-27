// import React, { useState } from "react";
// import "./App.css";
// import { Login } from "./LoginPage/Login";
// import { Register } from "./LoginPage/Register";

// function App() {
//   const [currnerForm, setCurrentForm] = useState("login");

//   const toggleForm = (forName) => {
//     setCurrentForm(forName);
//   };

//   return (
//     <div className="App">
//       {currnerForm === "login" ? (
//         <Login onFormSwitch={toggleForm} />
//       ) : (
//         <Register onFormSwitch={toggleForm} />
//       )}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MyForm from "./MyExamCode/MyForm";
// import TodoList from "./pages/ToDoList";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MyForm />} />
//         <Route path="/todo" element={<TodoList />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import Clock from "./Clock/Clock";

// const App = () => {
//   return (
//     <>
//       <Clock />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import "./App.css"; 
// import Calculater from "./MyCalculater/Calculater";

// const App = () => {
//   return (
//     <>
//       <Calculater />
//     </>
//   );
// };

// export default App;


import React from "react";
import "./App.css";
import Game from "./Game/Game";


const App = () => {
  return (
    <>
      <Game />
    </>
  );
};

export default App;