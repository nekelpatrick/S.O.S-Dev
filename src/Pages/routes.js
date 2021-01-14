import { Switch, Route } from "react-router-dom";
import Projects from "../Components/Molecules/Projects";

const Pages = () => {
  //Importar header aqui;
  return (
    <Switch>
      <Route exact path="/">
        landing page
        <Projects />
      </Route>
      <Route path="/profile">profile</Route>
    </Switch>
  );
};

export default Pages;
