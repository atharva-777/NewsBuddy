import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newz from "./components/Newz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Newz
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
                <Newz
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
                <Newz
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
                <Newz
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
                <Newz
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
                <Newz
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
                <Newz
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
                <Newz
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
