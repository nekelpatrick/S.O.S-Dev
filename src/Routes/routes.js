import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LandingPage from "../Pages/Landing-Page";
import Profile from "../Pages/Profile";
import Header from "../Components/Organisms/Header";

const Pages = () => {
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [auth, setAuth] = useState(true);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!JSON.parse(user)?.token) {
      return setAuth(false);
    } else {
      setAuth(true);
      history.push("/profile");
    }
  }, [profile, history, dispatch]);

  if (auth === false) {
    history.push("/");
    return (
      <>
        <Header auth={auth} setAuth={setAuth} />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </>
    );
  }
  if (auth === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header auth={auth} setAuth={setAuth} />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </>
  );
};

export default Pages;
