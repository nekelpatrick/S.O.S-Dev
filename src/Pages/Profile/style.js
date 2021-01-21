import styled from 'styled-components'

export const Container = styled.div`
    height: 92.4vh;
    width: 33.5vw;
    background-color: #17223A;
    border-right: 1px solid #EFDCBD;
    align-self: left;
    margin-top: -1vh;
    font-size: 1.5vw;
    word-wrap: break-word;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1440px){
        font-size: 1vw;
    }

        img{
            width: 10vw;
            height: auto;

            @media(min-width: 1440px){
                width: 8vw;
            }

            @media(min-width: 2560px){
                width: 6vw;
            }
        }
`

export const TechContainer = styled.div`
    width: 30vw;
    height: 17vh;
    display: flex;
    flex-direction: row;
    margin-bottom: 2vh;

    .techs, .techsLevel{
        padding: 0 1vw 0 1vw;
        display: flex;
        flex-direction: column;
        width: 15vw;
        height: 17vh;
        color: #EFDCBD;
    }

`

export const PendingProjectsContainer = styled.div`
    width: 30vw;
    height: 17vh;
    padding: 0 1vw 0 1vw;
    color: #EFDCBD;
    margin-bottom: 2vh;

`

export const CompletedProjectsContainer = styled.div`
    width: 30vw;
    height: 17vh;
    display: flex;
    flex-direction: row;
    margin-bottom: 2vh;

    .project, .deploy{
        padding: 0 1vw 0 1vw;
        display: flex;
        flex-direction: column;
        width: 15vw;
        height: 17vh;
        color: #EFDCBD;
    }

`

export const ContactContainer = styled.div`
    width: 30vw;
    height: 17vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;

    .contactsContainer{
        width: 30vw;
        display:  flex;

        .webContacts {
            border-right: 1px solid #EFDCBD;
        }

        .webContacts, .socialContacts{
            padding: 0 1vw 0 1vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 15vw;
            height: 12vh;
            color: #EFDCBD;
        }
    }

`

export const ButtonContainer = styled.div `
    width: 30vw;
    display: flex;
    justify-content: space-around;

`