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

// import React from "react";
// import "./App.css";
// import Game from "./Game/Game";

// const App = () => {
//   return (
//     <>
//       <Game />
//     </>
//   );
// };

// export default App;

//todo

// import React, { useState } from "react";
// import "./App.css";
// import ToDoForm from "./ToDoList/ToDoForm";
// import TodoList from "./ToDoList/TodoList";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTask = (userInput) => {
//     if (userInput) {
//       const newItem = {
//         id: Math.random().toString(36).substr(2, 9),
//         task: userInput,
//         complete: false,
//       };
//       setTodos([...todos, newItem]);
//     }
//   };

//   const removeTask = (id) => {
//     setTodos([...todos.filter((todo) => todo.id !== id)]);
//   };

//   const handleToggle = (id) => {
//     setTodos([
//       ...todos.map((task) =>
//         task.id === id ? { ...task, complete: !task.complete } : { ...task }
//       ),
//     ]);
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Список задач: {todos.length}</h1>
//       </header>
//       <ToDoForm addTask={addTask} />
//       {todos.map((todo) => {
//         return (
//           <TodoList
//             todo={todo}
//             key={todo.id}
//             toggleTask={handleToggle}
//             removeTask={removeTask}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Game from "./components/Gamee";

// function App() {
//   return (
//     <div>
//       <Game />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// import TodoApp from "./ListTodo/TodoApp";
// import List from "./ListTodo/List";

// function App() {
//   return (
//     <div className="todo-app">
//       <TodoApp />
//       <List />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";
// import Basket from "./componentss/basket/Basket";
// import Header from "./componentss/header/Header";
// import Meals from "./componentss/meals/Meals";
// import Summary from "./componentss/summary/Summary";
// import { BasketProvider } from "./store/BasketContext";
// function App() {
//   const [isModal, setIsModal] = useState(false);
//   const isModalHandler = () => {
//     setIsModal((prevState) => !prevState);
//   };
//   return (
//     <BasketProvider>
//       <div className="App">
//         <Header isModalHandler={isModalHandler} />
//         <Summary />
//         <Meals />
//         {isModal && <Basket isModalHandler={isModalHandler} />}
//       </div>
//     </BasketProvider>
//   );
// }

// export default App;

// import React from "react";
// import Saat from "./MyApp/Saat";

// function App() {
//   return (
//     <div>
//       <Saat />
//     </div>
//   );
// }

// export default App;



import React from "react";
import Top from "./top/Top";

function App() {
  return (
    <div>
      <Top />
    </div>
  );
}

export default App;
