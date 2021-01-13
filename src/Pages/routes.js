import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Types from "../Components/Atoms/Types";
import Comments from "../Components/Molecules/Comments";
=======
>>>>>>> fee7ffda446f82ba3c4d7f7663c96da65f635ff2

const Pages = () => {
  //Importar header aqui;
  return (
    <Switch>
      <Route exact path="/">
        landing page
<<<<<<< HEAD
        <Types text="teste" component="h2" variant="h1" />
        <Comments />
=======
>>>>>>> fee7ffda446f82ba3c4d7f7663c96da65f635ff2
      </Route>
      <Route path="/profile">profile</Route>
    </Switch>
  );
};

export default Pages;
