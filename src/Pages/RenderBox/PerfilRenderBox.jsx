import { api } from "../../axios-globalConfig/axios-global";

import { Switch, Route } from "react-router-dom";

import ProjectCard from "../../Components/Molecules/Project-Card";
import EditUser from "../../Components/Organisms/ProfileForm";
import ProductCard from "../../Components/Molecules/Project-Card-Add-New";
import Filters from "../../Components/Molecules/Filters";
import UserSearchProfile from "../../Components/Organisms/User-Search-Profile";
import Favorites from "../../Components/Organisms/Favorites";

import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RenderBox } from "./style";

const useStyles = makeStyles((theme) => ({
  RenderBox: {
    width: "100%",
    height: "95%",
  },
}));
const PerfilRenderBox = ({ setAuth }) => {
  const { projects, filteredProjects, profile } = useSelector((state) => state);
  const [projectOwner, setProjectOwner] = useState([]);
  const classes = useStyles();

  const allProjects =
    projects?.map((e, index) => (
      <ProjectCard
        key={index}
        titulo={e.title}
        tipo={e.type}
        userId={e.userId}
        descricao={e.description}
        stack={e.qualifications}
        projectFavorite={e}
        alreadyFavorite={
          profile.favorites.findIndex((favorite) => favorite.id === e.id) < 0 ? false : true
        }
      />
    ));
    const h3OfFiltereds = "Encontramos esse(s) projeto(s) aqui..."
    const filtereds = 
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
        projectFavorite={e}
      />
      ))}
    </>

  useEffect(() => {
    setAuth(2);
  }, [setAuth]);

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
          <Favorites />
        </Route>
        <Route exact path="/profile/editarPerfil">
          <EditUser />
        </Route>
        <Route exact path="/profile/novoProjeto">
          <ProductCard />
        </Route>
        <Route path="/profile/:user">
          <UserSearchProfile />
        </Route>
      </Switch>
    </RenderBox>
  );
};

export default PerfilRenderBox;
