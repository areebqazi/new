import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
           <Home />
        </Route>
        <Route path="/login">
           <Login />
        </Route>
        <Route path="/register">
           <Register />
        </Route> 
        <Route path="/profile/:username">
           <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
