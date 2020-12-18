import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Profile from "./Profile";
import Compose from "./Compose";
import Home from "./Home";
import Register from "./Register"

const React = require("react");

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/profile/:username" component={Profile} />
          <Route path="/compose" exact component={() => <Compose />} />
          <Route path="/register" exact component={() => <Register />} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
