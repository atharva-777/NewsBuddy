import { Component, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newz from "./components/Newz";

// function App() {
//   const [count, setCount] = useState(0)

//   return (

//   );
// }

// export default App

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Newz/>
        
      </div>
    );
  }
}
