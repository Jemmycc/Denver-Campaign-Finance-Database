import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Donor from "./pages/Donor";
import Contributed from "./pages/Contributed";
import YearlyContributed from "./pages/YearlyContributed";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import CardTitle from './components/CardTitle';
import Footer from "./components/Footer";

const todoBackground = {
  width: "80%",
  height: "auto",
  margin: "auto",
  backgroundColor: "#fff",
  boxSizing: "border-box",
  boxShadow: "5px 10px 8px #888888",
}


function App() {
  return (
    <Router>
      {/* <div style={{ backgroundColor: "rgb(230, 230, 230)" }}> */}
      <div style={todoBackground}>
        <CardTitle />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/donor" component={Donor} />
          <Route exact path="/contributed" component={Contributed} />
          <Route exact path="/yearlycontributed" component={YearlyContributed} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
