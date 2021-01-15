import { Switch, Route } from "react-router-dom";
import Card from "../Components/Molecules/Project-Card";
const Pages = () => {
  //Importar header aqui;
  return (
    <Switch>
      <Route exact path="/">
        landing page
        <Card />
      </Route>
      <Route path="/profile">profile</Route>
    </Switch>
  );
};

export default Pages;
