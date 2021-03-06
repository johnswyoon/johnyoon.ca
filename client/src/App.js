import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// Pages and Components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import About from "./pages/About";
import ImageGrid from "./components/ImageGrid";
//Blog
import Blog from "./pages/Blog";
import Post from "./components/Post";
import PostEditor from "./pages/PostEditor";
//Admin
// import Login from "./pages/Login";
// Styles and Animations
import "./styles/app.scss";
import { AnimatePresence } from "framer-motion";

function App() {
  // Menu
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <Nav isToggled={isToggled} toggleHandler={toggleHandler} />
      {!isToggled && ( // when mobile menu is toggled, do not show any page
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photography" component={Photography} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:slug" component={Post} />
            <Route exact path="/blog-editor" component={PostEditor} />
            <Route exact path="/about" component={About} />
            <Route path="/photography/:genre" component={ImageGrid} />
            {/* <Route path="/login" component={Login} /> */}
          </Switch>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
