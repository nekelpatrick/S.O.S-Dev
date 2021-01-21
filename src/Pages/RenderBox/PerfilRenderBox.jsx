import React from "react";

import axios from 'axios'

import { api } from '../../axios-globalConfig/axios-global'

import {Switch, Route} from 'react-router-dom'

import ProjectCard from '../../Components/Molecules/Project-Card'
import EditUser from "../../Components/Organisms/ProfileForm";
import ProductCard from '../../Components/Molecules/Project-Card-Add-New'
import Filters from '../../Components/Molecules/Filters'
import UserSearchProfile from '../../Components/Organisms/User-Search-Profile'

import { makeStyles } from "@material-ui/core";

import { useState, useEffect } from 'react'


const useStyles = makeStyles((theme) => ({
  RenderBox: {
    // width: "100%",
    height: "91.5vh",
    overflowY: 'auto',
    // margin: ' -1vh 0 0 3.3vw',

  },
}));
const PerfilRenderBox = () => {
  const [projects, setProjects] = useState([])
  const [projectOwner, setProjectOwner] = useState([])

  // useEffect(() => 
  //   api.get('/projects')
  //   .then((res) => setProjects(res.data))
  // , [])

  useEffect(() => {
    projects[projectOwner.length] &&
    api.get(`/users/${projects[projectOwner.length].userId}`)
    .then((res) => projectOwner.length > 0 ? setProjectOwner([...projectOwner, res.data.user]) : setProjectOwner([res.data.user]))}
, [projects, projectOwner])


  const classes = useStyles();

  return (
    <div className={classes.RenderBox}>
      <Switch>
        <Route exact path = '/profile'>
          <Filters projects = {projects}/>
          {projects.length > 0 && projects.map(({title, type, description, qualifications}, index) => 
                <ProjectCard titulo = {title} tipo = {type} user = {projectOwner[index]} descricao = {description} stack = {qualifications}/>
          )}
        </Route>
        <Route exact path = '/profile/favoritos'>
          <Filters />
          <div>favoritos</div>
        </Route>
        <Route exact path = '/profile/editarPerfil'>
          <EditUser />
        </Route>
        <Route exact path = '/profile/novoProjeto'>
          <ProductCard />
        </Route>
        <Route path = '/profile/:user'>
          <UserSearchProfile />
        </Route>
      </Switch>
    </div>
  );
};

export default PerfilRenderBox;
