import React from "react";

import { api } from "../../axios-globalConfig/axios-global";

import { Switch, Route } from "react-router-dom";

import ProjectCard from "../../Components/Molecules/Project-Card";
import EditUser from "../../Components/Organisms/ProfileForm";
import ProductCard from "../../Components/Molecules/Project-Card-Add-New";
import Filters from "../../Components/Molecules/Filters";
import UserSearchProfile from "../../Components/Organisms/User-Search-Profile";
import Favorites from "../../Components/Organisms/Favorites"

import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  RenderBox: {
    width: "100%",
    height: "95%",
  },
}));
const PerfilRenderBox = () => {
  const { projects } = useSelector((state) => state);
  const [projectOwner, setProjectOwner] = useState([]);
  const classes = useStyles();

  console.log(projects);

  // useEffect(() => {
  //   projects[projectOwner.length] &&
  //     api
  //       .get(`/users/${projects[projectOwner.length].userId}`)
  //       .then((res) =>
  //         projectOwner.length > 0
  //           ? setProjectOwner([...projectOwner, res.data.user])
  //           : setProjectOwner([res.data.user])
  //       );
  // }, [projects, projectOwner]);

  return (
    <div className={classes.RenderBox}>
      <Switch>
        <Route exact path="/profile">
          <Filters projects={projects} />
          {projects.length > 0 &&
            projects.map((e, index) => (
              <ProjectCard
                key={index}
                titulo={e.title}
                tipo={e.type}
                userId={e.userId}
                descricao={e.description}
                stack={e.qualifications}
                projectToFavorite={e}
              />
            ))}
        </Route>
        <Route exact path="/profile/favoritos">
          <Filters />
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
    </div>
  );
};

export default PerfilRenderBox;
