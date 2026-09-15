import React from "react";
import { NavLink, Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <header className="flex gap-2.5">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </header>
      <main>
        <Outlet /> {/* Маркер, куди треба вставляти елементи з масива children у /src/router/router.js */}
      </main>
    </div>
  );
};

export default App;
