import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/Landing-Page";
import Profile from "../Pages/Profile";

const Pages = () => {
  //Importar header aqui;
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Pages;
