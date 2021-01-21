import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import LandingPage from "../Pages/Landing-Page";
import Profile from "../Pages/Profile";
import Header from "../Components/Organisms/Header";
import { MobileStateProvider } from './mobileStateContext'

const Pages = () => {
  const { profile } = useSelector((state) => state);
  const history = useHistory();
  const [auth, setAuth] = useState(1);
  const [display, setDisplay] = useState(undefined)

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!JSON.parse(user)?.token) {
      setAuth(0);
      history.push("/");
    } else {
      if (auth < 2) {
        setAuth(1);
        history.push("/profile");
        console.log(auth);
      }
    }
  }, [profile, history, auth]);

  if (auth === 0) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <MobileStateProvider display = {display} setDisplay = {setDisplay}>
              <Header auth={auth} setAuth={setAuth} />
              <LandingPage />
            </MobileStateProvider>
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
          <MobileStateProvider display = {display} setDisplay = {setDisplay}>
            <Header auth={auth} setAuth={setAuth} />
            <Profile auth={auth} setAuth={setAuth} />
          </MobileStateProvider>
        </Route>
      </Switch>
    </>
  );
};

export default Pages;
