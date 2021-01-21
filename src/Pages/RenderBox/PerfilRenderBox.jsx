import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { api } from "../../axios-globalConfig/axios-global";
import { RenderBox } from "./style";

import ProjectCard from "../../Components/Molecules/Project-Card";
import EditUser from "../../Components/Organisms/ProfileForm";
import ProductCard from "../../Components/Molecules/Project-Card-Add-New";
import Filters from "../../Components/Molecules/Filters";
import UserSearchProfile from "../../Components/Organisms/User-Search-Profile";
import Favorites from "../../Components/Organisms/Favorites/";
import Button from "../../Components/Atoms/Button";

const PerfilRenderBox = ({ setAuth }) => {
  const { projects, filteredProjects, profile, filteredUsers } = useSelector(
    (state) => state
  );
  const [projectOwner, setProjectOwner] = useState([]);
  const history = useHistory();
  const allProjects = projects?.map((e, index) => (
    <ProjectCard
      key={index}
      titulo={e.title}
      tipo={e.type}
      userId={e.userId}
      descricao={e.description}
      stack={e.qualifications}
      time={`Tempo estimado: ${e.time}`}
      projectFavorite={e}
      alreadyFavorite={
        profile.favorites.findIndex((favorite) => favorite.id === e.id) < 0
          ? false
          : true
      }
    />
  ));
  const h3OfFiltereds = "Encontramos esse(s) projeto(s) aqui...";
  const filtereds = (
    <>
      <h3>{h3OfFiltereds}</h3>
      {filteredProjects?.map((e, index) => (
        <ProjectCard
          key={index}
          titulo={e.title}
          tipo={e.type}
          userId={e.userId}
          descricao={e.description}
          stack={e.qualifications}
          time={`Tempo estimado: ${e.time}`}
          projectFavorite={e}
        />
      ))}
    </>
  );

  useEffect(() => {
    projects[projectOwner.length] &&
      api
        .get(`/users/${projects[projectOwner.length].userId}`)
        .then((res) =>
          projectOwner.length > 0
            ? setProjectOwner([...projectOwner, res.data.user])
            : setProjectOwner([res.data.user])
        );
  }, [projects, projectOwner]);

  return (
    <RenderBox>
      <Switch>
        <Route exact path="/profile">
          <Filters projects={projects} />
          {filteredProjects.length > 0 ? filtereds : allProjects}
        </Route>
        <Route exact path="/profile/favoritos">
          <Filters />
          <Favorites setAuth={setAuth} />
        </Route>
        <Route exact path="/profile/editarPerfil">
          <EditUser setAuth={setAuth} />
        </Route>
        <Route exact path="/profile/novoProjeto">
          <ProductCard setAuth={setAuth} />
        </Route>
        <Route path="/profile/search">
          <Button
            text="Voltar para o profile"
            onClick={() => history.push("/profile")}
          />
          {filteredUsers.length > 0 ? (
            filteredUsers.map((e, i) => (
              <UserSearchProfile key={i} profile={e} />
            ))
          ) : (
            <div>Nenhum usuario encontrado</div>
          )}
        </Route>
      </Switch>
    </RenderBox>
  );
};

export default PerfilRenderBox;
