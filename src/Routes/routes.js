import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/Landing-Page";

const Pages = () => {
  //Importar header aqui;
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/profile">profile</Route>
    </Switch>
  );
};

export default Pages;
