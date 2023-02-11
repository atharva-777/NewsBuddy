import { Component, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newz from "./components/Newz";

export default class App extends Component {
  render() {
    return (
      <div >
        <Navbar></Navbar>
        <Newz pageSize={12}/>
        
      </div>
    );
  }
}
