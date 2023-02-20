import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newz from "./components/Newz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  constructor(){
    super()
  }
  state = {progress:0}
  pageSize = 12;

  handleClick  = (progress) => {
    this.setState({progress:progress})
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <LoadingBar
            color="white"
            background="black"
            progress={this.state.progress}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <Newz handleClick = {this.handleClick}
                  key=""
                  pageSize={this.pageSize}
                  country="in"
                  category=""
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <Newz handleClick = {this.handleClick}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <Newz handleClick = {this.handleClick}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <Newz handleClick = {this.handleClick}
                  pageSize={this.pageSize}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <Newz handleClick = {this.handleClick}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <Newz handleClick = {this.handleClick}
                  pageSize={this.pageSize}
                  key="science"
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <Newz handleClick = {this.handleClick}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <Newz handleClick = {this.handleClick}
                  pageSize={this.pageSize}
                  key="technology"
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
