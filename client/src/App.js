import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuthUser } from "./js/action/authAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);
  const { isLoading } = useSelector((state) => state.authReducer);
  if (isLoading) {
    return <h1>......Loading.......</h1>;
  }
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
