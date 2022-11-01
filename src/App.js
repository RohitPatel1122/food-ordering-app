import Header from "./components/header/Header";

import React from "react";
import Meals from "./components/meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
