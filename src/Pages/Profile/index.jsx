import {
  Container,
  TechContainer,
  PendingProjectsContainer,
  CompletedProjectsContainer,
  ContactContainer,
  ButtonContainer,
  SocialMedia,
} from "./style";
import Image from "../../Components/Atoms/Image";
import Types from "../../Components/Atoms/Types";
import noImage from "./Image/perfil-blog.png";
import ContainedButtons from "../../Components/Atoms/Button";

import { useState, useEffect } from "react";

import RenderBox from "../RenderBox/PerfilRenderBox";

import { Grid } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

import Projects from '../../Components/Molecules/Projects'

import { StateProvider } from './stateContext'

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { makeStyles } from "@material-ui/core";

import { useContext } from "react";

import { MobileStateContext } from '../../Routes/mobileStateContext'

const useStyles = makeStyles((theme) => ({
  display: {
    display: 'none'
  },
}));

const Profile = ({ auth, setAuth }) => {
  const {display, setDisplay} = useContext(MobileStateContext)
  const { profile } = useSelector((state) => state);
  const history = useHistory();
  const [isFavoriteTime, setFavouriteTime] = useState(false);
  
  const matchesMobile = useMediaQuery('(max-width:767px)');

  const classe = useStyles()

  console.log(profile)

  useEffect(() =>
    matchesMobile ?
    setDisplay(false) :
    setDisplay(undefined)
  ,[matchesMobile])

  return (
    <Grid container>
        <Grid item xs  = {display === true ? 12 : display === undefined && 4} className = {display === false && classe.display}>
          <Container>
            <Image
              src={profile.src !== "" ? profile.src : noImage}
              alt="Foto do perfil"
              borderRadius="50%"
              margin="2vh 0px 2vh 0px"
            />
            <Types
              variant="h5"
              component="h2"
              text={profile.user}
              align="center"
              classe="fontStyleProfileName"
            />
            <ButtonContainer>
              <ContainedButtons
                text={isFavoriteTime ? "PROJETOS" : "FAVORITOS"}
                classe="profileFavorites"
                onClick={() => {
                  setFavouriteTime(isFavoriteTime ? false : true);
                  history.push(
                    isFavoriteTime ? "/profile" : "/profile/favoritos"
                  );
                }}
              />
              <Projects setAuth={setAuth}/>
              <ContainedButtons
                text="Editar Perfil"
                classe="profileFavorites"
                onClick={() => {
                  setFavouriteTime(true);
                  history.push("/profile/editarPerfil");
                }}
              />
            </ButtonContainer>
            <TechContainer>
              <div className="techs">
                <div className="title">
                  <Types
                    variant="h6"
                    component="h3"
                    text="Tecnologias"
                    align="center"
                    classe="fontStyleProfile"
                  />
                </div>
                {profile.tech &&
                  profile.tech.map((e, index) => (
                    <div key={index}>{e.linguagem}</div>
                  ))}
              </div>
              <div className="techsLevel">
                <Types
                  variant="h6"
                  component="h3"
                  text="Nível de Experiência"
                  align="center"
                  classe="fontStyleProfile"
                />
                {profile.tech &&
                  profile.tech.map((e, index) => (
                    <div key={index}>{e.nivel}</div>
                  ))}
              </div>
            </TechContainer>
            <PendingProjectsContainer>
              <Types
                variant="h6"
                component="h3"
                text="Projetos em Andamento"
                align="center"
                classe="fontStyleProfile"
              />
            {profile.onGoingProjects.map((e) => (
              <div>{e}</div>
            ))}
          </PendingProjectsContainer>
          <CompletedProjectsContainer>
            <div className="project">
              <Types
                variant="h6"
                component="h3"
                text="Projetos Prontos"
                align="center"
                classe="fontStyleProfile"
              />
              {profile.completedProjects.map((e) => (
                <div>{e.name}</div>
              ))}
            </div>
            <div className="deploy">
              <Types
                variant="h6"
                component="h3"
                text="Deploy"
                align="center"
                classe="fontStyleProfile"
              />
              {profile.completedProjects.map((e) => (
                <div>{e.deploy}</div>
              ))}
            </div>
          </CompletedProjectsContainer>
          <ContactContainer>
              <Types
                variant="h6"
                component="h3"
                text="Contato"
                align="center"
                classe="fontStyleProfile"
              />
              <div className="contactsContainer">
                <div className="webContacts">
                  <Types
                    variant="p"
                    component="h4"
                    text="Email"
                    align="center"
                    classe="profileContacts"
                  />
                  <div>{profile.email}</div>
                  <Types
                    variant="p"
                    component="h4"
                    text="Portfolio"
                    align="center"
                    classe="profileContacts"
                  />
                  <div>{profile.portifolio}</div>
                </div>
                <div className="socialContacts">
                  <Types
                    variant="p"
                    component="h4"
                    text="Telefone"
                    align="center"
                    classe="profileContacts"
                  />
                  <div>{profile.phone}</div>
                  <Types
                    variant="p"
                    component="h4"
                    text="Redes Sociais"
                    align="center"
                    classe="profileContacts"
                  />
                {profile.socialMedia?.map((e, i) => (
                  <SocialMedia key={i}>
                    <a href={e?.link} target="_blank" rel="noreferrer">
                      {e?.name}
                    </a>
                  </SocialMedia>
                ))}
              </div>
                </div>
            </ContactContainer>
          </Container>
        </Grid>
      <Grid item xs={display === false ? 12 : display === undefined && 8} className = {display === true && classe.display}>
        <StateProvider isFavoriteTime = {isFavoriteTime} setFavouriteTime = {setFavouriteTime}>
          <RenderBox setAuth={setAuth}/>
        </StateProvider>
      </Grid>
    </Grid>
  );
};

export default Profile;
