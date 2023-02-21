import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newz from "./components/Newz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {

  const apiKey = import.meta.env.VITE_NEWS_API;
  
  const [state, setState] = useState({ progress: 0 });
  const pageSize = 12;

  const handleClick = (progress) => {
     setState({ progress: progress });
  };

  
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <LoadingBar
            color="white"
            background="black"
            progress={ state.progress}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <Newz
                  apiKey={ apiKey}
                  handleClick={ handleClick}
                  key=""
                  pageSize={ pageSize}
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
                  apiKey={ apiKey}
                  handleClick={ handleClick}
                  key="general"
                  pageSize={ pageSize}
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
                  apiKey={ apiKey}
                  handleClick={ handleClick}
                  key="business"
                  pageSize={ pageSize}
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
                  apiKey={ apiKey}
                  handleClick={ handleClick}
                  pageSize={ pageSize}
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
                  apiKey={ apiKey}
                  handleClick={ handleClick}
                  key="health"
                  pageSize={ pageSize}
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
                  apiKey={ apiKey}
                  handleClick={ handleClick}
                  pageSize={ pageSize}
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
                  apiKey={ apiKey}
                  handleClick={ handleClick}
                  key="sports"
                  pageSize={ pageSize}
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
                  apiKey={ apiKey}
                  handleClick={ handleClick}
                  pageSize={ pageSize}
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


export default App