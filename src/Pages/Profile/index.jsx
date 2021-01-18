import {
  Container,
  TechContainer,
  PendingProjectsContainer,
  CompletedProjectsContainer,
  ContactContainer,
} from "./style";

import Image from "../../Components/Atoms/Image";
import Types from "../../Components/Atoms/Types";
import noImage from "./Image/perfil-blog.png";
import Techs from "../../Components/Molecules/Techs";

import RenderBox from "../RenderBox/PerfilRenderBox";

import { Grid } from "@material-ui/core";

const Profile = () => {
  return (
    <Grid container>
      <Grid item xs>
        <Container>
          <Image
            src={noImage}
            alt="Foto do perfil"
            width="120px"
            height="120px"
            borderRadius="50%"
            margin="2vh 0px 2vh 0px"
          />
          <TechContainer>
            <div className="techs">
              <Types
                variant="h6"
                component="h3"
                text="Tecnologias"
                align="center"
                classe="fontStyleProfile"
              />
              <div>textotextotxetoxeto</div>
            </div>
            <div className="techsLevel">
              <Types
                variant="h6"
                component="h3"
                text="Nível de Experiência"
                align="center"
                classe="fontStyleProfile"
              />
              <div>avançado</div>
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

                  <Techs />
                </div>
                <div>textotextotxetoxeto</div>
              </div>
              <div className="techsLevel">
                <Types
                  variant="h6"
                  component="h3"
                  text="Nível de Experiência"
                  align="center"
                  classe="fontStyleProfile"
                />
                <div>avançado</div>
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
              <div>Projeto do beabá</div>
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
                <div>Projeto da dona maria</div>
              </div>
              <div className="deploy">
                <Types
                  variant="h6"
                  component="h3"
                  text="Deploy"
                  align="center"
                  classe="fontStyleProfile"
                />
                <div>www.adocicameuamor.com.br</div>
              </div>
            </CompletedProjectsContainer>
          </PendingProjectsContainer>
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
                <div>Projeto da dona maria</div>
                <Types
                  variant="p"
                  component="h4"
                  text="Portfolio"
                  align="center"
                  classe="profileContacts"
                />
                <div>www.protifolio.com</div>
              </div>
              <div className="socialContacts">
                <Types
                  variant="p"
                  component="h4"
                  text="Telefone"
                  align="center"
                  classe="profileContacts"
                />
                <div>www.adocicameuamor.com.br</div>
                <Types
                  variant="p"
                  component="h4"
                  text="Redes Sociais"
                  align="center"
                  classe="profileContacts"
                />
                <div>Linkedin - Git - Instagram</div>
              </div>
            </div>
          </ContactContainer>
        </Container>
      </Grid>
      <Grid item xs={8}>
        <RenderBox />
      </Grid>
    </Grid>
  );
};

export default Profile;
