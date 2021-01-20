import { api } from '../../../axios-globalConfig/axios-global'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import { Container, TechContainer, PendingProjectsContainer, CompletedProjectsContainer, ContactContainer, ButtonContainer } from './style'
import Image from '../../Atoms/Image'
import Types from '../../Atoms/Types'
import noImage from '../../../Pages/Profile/Image/perfil-blog.png'
import ContainedButtons from '../../Atoms/Button'

import { useHistory } from 'react-router-dom'

const UserSearchProfile = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state.searchUser)

    const [user, setUser] = useState({})

    useEffect(() => 
        api.get(`/users?user=${state}`)
        .then((res) => setUser(res.data[0]))
    , [])

    return (
        <Container>
        <Image
          src={noImage}
          alt="Foto do perfil"
          width="120px"
          height="120px"
          borderRadius="50%"
          margin="2vh 0px 2vh 0px"
        />
        <Types variant = 'h5' component = 'h2' text = {user.user} align = 'center' classe = 'fontStyleProfileName' />
        <ButtonContainer>
          <ContainedButtons
          text = {'VOLTAR'}
          classe = 'profileFavorites'
          onClick = {() => history.goBack()}
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
              {user.tecnologia && user.tecnologia.map((atual, index) => <div key = {index}>{atual}</div>)}
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
              <div>{user.email}</div>
              <Types
                variant="p"
                component="h4"
                text="Portfolio"
                align="center"
                classe="profileContacts"
              />
              <div>{user.portifolio}</div>
            </div>
            <div className="socialContacts">
              <Types
                variant="p"
                component="h4"
                text="Telefone"
                align="center"
                classe="profileContacts"
              />
              <div>{user.telefone}</div>
              <Types
                variant="p"
                component="h4"
                text="Redes Sociais"
                align="center"
                classe="profileContacts"
              />
              <div>{user.redesSociais}</div>
            </div>
          </div>
        </ContactContainer>
      </Container>
    )

}

export default UserSearchProfile