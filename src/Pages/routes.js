import { Switch, Route } from "react-router-dom";
import Types from "../Components/Atoms/Types";

const Pages = () => {
  //Importar header aqui;
  return (
    <Switch>
      <Route exact path="/">
        landing page
        <Types text="teste" component="h2" variant="h1" />
      </Route>
      <Route path="/profile">profile</Route>
    </Switch>
  );
};

export default Pages;
