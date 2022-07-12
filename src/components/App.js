import React from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import {image} from "../data/user.js"
import {username,city} from "../data/user.js"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}
console.log(image)
console.log(city)
console.log(username)

export default App;
