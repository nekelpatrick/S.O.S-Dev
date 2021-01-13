import { Switch, Route } from "react-router-dom";

const Pages = () => {
  //Importar header aqui;
  return (
    <Switch>
      <Route exact path="/">
        landing page
      </Route>
      <Route path="/profile">profile</Route>
    </Switch>
  );
};

export default Pages;
