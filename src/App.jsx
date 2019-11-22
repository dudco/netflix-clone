import React from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Tv from "./pages/Tv";
import Banner from "./components/Banner";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
body{
  background-color:black;
}

a {
  text-decoration: none;
  color: white;
}

`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/tv" exact>
          <Tv />
        </Route>
      </Router>
    </>
  );
};

export default App;
