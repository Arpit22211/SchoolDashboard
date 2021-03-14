import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import Attendence from "./Attendence";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <SideBar />
            <HomePage />
          </Route>
          <Route exact path="/attendence">
            <SideBar />
            <Attendence />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
