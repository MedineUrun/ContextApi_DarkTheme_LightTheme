import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";



function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
      <ThemeContextProvider>
        <AuthContextProvider>
        <Navbar />
        <TodoList />
        </AuthContextProvider>   
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
