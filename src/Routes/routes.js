import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import LandingPage from "../Pages/Landing-Page";
import Profile from "../Pages/Profile";
import Header from "../Components/Organisms/Header";

const Pages = () => {
  const { profile } = useSelector((state) => state);
  const history = useHistory();
  const [auth, setAuth] = useState(1);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!JSON.parse(user)?.token) {
      setAuth(0);
      history.push("/");
    } else {
      if (auth < 2) {
        setAuth(1);
        history.push("/profile");
      }
    }
  }, [profile, history]);

  if (auth === 0) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Header auth={auth} setAuth={setAuth} />
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
      <Switch>
        <Route path="/profile">
          <Header auth={auth} setAuth={setAuth} />
          <Profile auth={auth} setAuth={setAuth} />
        </Route>
      </Switch>
    </>
  );
};

export default Pages;
