import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// Pages and Components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import About from "./pages/About";
import Contact from "./pages/Contact";
// Styles and Animations
import "./styles/app.scss";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <Nav isToggled={isToggled} toggleHandler={toggleHandler} />
      {!isToggled && ( // when mobile menu is toggled, do not show any page
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/photography" component={Photography} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      )}
    </div>
  );
}

export default App;
