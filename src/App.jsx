import { Component, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newz from "./components/Newz";
import {BrowserRouter,Routes,Route} from 'react-dom'

export default class App extends Component {
  render() {
    return (
      <div >
        <Navbar></Navbar>
        <Newz pageSize={12} country="in" category=''/>
        
      </div>
    );
  }
}
