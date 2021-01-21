import styled from 'styled-components'

export const Container = styled.div`
    height: 93vh;
    width: 33.5vw;
    background-color: #17223A;
    border-right: 1px solid #EFDCBD;
    align-self: left;
    margin-top: -1vh;
    font-size: 1.5vw;
    word-wrap: break-word;
    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 280px) {
        font-size: 3.3vw !important;
        height: 90.5vh !important;
        margin-top: -2vh !important;
    }

    @media (max-width: 320px) {
        font-size: 3vw !important;
        height: 89.5vh !important;
        margin-top: -3vh !important;
    }

    @media (max-width: 360px) {
        font-size: 3vw !important;
        height: 91vh !important;
        margin-top: -3vh !important;
    }

    @media (max-width: 375px) {
        font-size: 3vw !important;
        height: 93.8vh !important;
        margin-top: -3vh !important;
    }

    @media (max-width: 425px) {
        font-size: 3vw !important;
        height: 95vh !important;
        margin-top: -3vh !important;
    }

    @media (max-width: 540px) {
        font-size: 2.5vw !important;
        height: 93vh !important;
        margin-top: -2vh !important;
    }

    @media (max-width: 767px) {
        width: 100vw;
        border: none;
    }

    @media(min-width: 1440px){
        font-size: 1vw;
    }

        img{
            width: 10vw;
            height: auto;

            @media (max-width: 280px) {
                width: 30vw !important;
            }

            @media (max-width: 320px) {
                width: 25vw !important;
            }

            @media (max-width: 540px) {
                width: 18vw !important;
            }

            @media(min-width: 1440px){
                width: 7vw;
            }

            @media(min-width: 2560px){
                width: 6vw;
            }
        }
`

export const TechContainer = styled.div`
    width: 33.5vw;
    height: 17vh;
    display: flex;
    flex-direction: row;
    margin-bottom: 2vh;

    @media (max-width: 767px) {
        width: 100vw;
    }

    .techs, .techsLevel{
        padding: 0 1vw 0 1vw;
        display: flex;
        flex-direction: column;
        width: 16.75vw;
        height: 17vh;
        color: #EFDCBD;
        @media (max-width: 767px) {
        width: 50vw;
        }
    }

`

export const PendingProjectsContainer = styled.div`
    width: 33.5vw;
    height: 17vh;
    padding: 0 1vw 0 1vw;
    color: #EFDCBD;
    margin-bottom: 2vh;
    @media (max-width: 767px) {
        width: 100vw;
        padding: 0 5vw 0 5vw;
    }

`

export const CompletedProjectsContainer = styled.div`
    width: 33.5vw;
    height: 17vh;
    display: flex;
    flex-direction: row;
    margin-bottom: 2vh;

    .project, .deploy{
        padding: 0 1vw 0 1vw;
        display: flex;
        flex-direction: column;
        width: 16.75vw;
        height: 17vh;
        color: #EFDCBD;
        @media (max-width: 767px) {
        width: 50vw;
        padding: 0 5vw 0 5vw;
    }

    }

    @media (max-width: 767px) {
        width: 100vw;
    }

`

export const ContactContainer = styled.div`
    width: 33.5vw;
    height: 17vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;

    @media (max-width: 767px) {
        width: 100vw;
    }

    .contactsContainer{
        width: 33.5vw;
        display:  flex;

        .webContacts {
            border-right: 1px solid #EFDCBD;
        }

        .webContacts, .socialContacts{
            padding: 0 1vw 0 1vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 16.75vw;
            height: 12vh;
            color: #EFDCBD;

                div{
                    height: 3vh;
                    word-break: break-all;
                }
                @media (max-width: 280px) {
                    width: 50vw !important;
                    height: 10vh !important;
                        div{
                            height: 2.5vh !important;
                        }
                }
                @media (max-width: 320px) {
                    width: 50vw !important;
                    height: 9vh !important;
                        div{
                            height: 2.25vh !important;
                        }
                }
                @media (max-width: 540px) {
                    width: 50vw !important;
                    height: 10vh !important;
                        div{
                            height: 2.5vh !important;
                        }
                }
        }
        @media (max-width: 767px) {
        width: 100vw;
    }
    }

`

export const ButtonContainer = styled.div `
    width: 33.5vw;
    display: flex;
    justify-content: space-around;

    @media (max-width: 767px) {
        width: 100vw;
    }

`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #efdcbd;
    font-weight: bold;
    :hover {
      color: #eb5c82;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #efdcbd;
    font-weight: bold;
    :hover {
      color: #eb5c82;
    }
  }
`;
