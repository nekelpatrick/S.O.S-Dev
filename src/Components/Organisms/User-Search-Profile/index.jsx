import { useSelector } from "react-redux";
import { useState } from "react";

import {
  Container,
  TechContainer,
  PendingProjectsContainer,
  CompletedProjectsContainer,
  ContactContainer,
  ButtonContainer,
  SocialMedia,
} from "./style";
import Image from "../../Atoms/Image";
import Types from "../../Atoms/Types";
import noImage from "../../../Pages/Profile/Image/perfil-blog.png";
import ContainedButtons from "../../Atoms/Button";

import { useHistory } from "react-router-dom";

const UserSearchProfile = ({ profile }) => {
  const history = useHistory();
  const state = useSelector((state) => state.searchUser);

  console.log(profile);

  const [isFavoriteTime, setFavouriteTime] = useState(false);
  return (
    <>
      <ContainedButtons
        text="Voltar para o profile"
        onClick={() => history.push("/profile")}
      />
      <Container>
        <Image
          src={profile?.src !== "" ? profile?.src : noImage}
          alt="Foto do perfil"
          width="120px"
          height="120px"
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
              history.push(isFavoriteTime ? "/profile" : "/profile/favoritos");
            }}
          />
          <ContainedButtons
            text="Novo Projeto"
            classe="profileFavorites"
            onClick={() => {
              setFavouriteTime(true);
              history.push("/profile/novoProjeto");
            }}
          />
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
              profile.tech.map((e, index) => <div key={index}>{e.nivel}</div>)}
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
    </>
  );
};

export default UserSearchProfile;
