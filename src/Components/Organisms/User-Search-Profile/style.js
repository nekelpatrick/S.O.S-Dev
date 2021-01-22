import styled from "styled-components";

export const Container = styled.div`
  min-height: 50vh;
  width: 40vw;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  background: #17223a;
  border: 1px solid #efdcbd;
  border-radius: 5px;

  @media (max-width: 375px) {
    width: 80vw;
  }
`;

export const TechContainer = styled.div`
  width: 30vw;
  height: 17vh;
  display: flex;
  flex-direction: row;
  margin-bottom: 2vh;

  .techs,
  .techsLevel {
    padding: 0 1vw 0 1vw;
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 17vh;
    color: #efdcbd;

    @media (max-width: 375px) {
      font-size: 0.8em;
      width: 50vw;
    }
  }
`;

export const PendingProjectsContainer = styled.div`
  width: 30vw;
  height: 17vh;
  padding: 0 1vw 0 1vw;
  color: #efdcbd;
  margin-bottom: 2vh;

  @media (max-width: 375px) {
    padding-top: 20px;
    font-size: 0.8em;
    width: 50vw;
  }
`;

export const CompletedProjectsContainer = styled.div`
  width: 30vw;
  height: 17vh;
  display: flex;
  flex-direction: row;
  margin-bottom: 2vh;

  .project,
  .deploy {
    padding: 0 1vw 0 1vw;
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 17vh;
    color: #efdcbd;

    @media (max-width: 375px) {
      font-size: 10px;
      width: 50vw;
    }
  }
`;

export const ContactContainer = styled.div`
  width: 45%;
  min-height: 15vh;
  display: flex;
  margin-bottom: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contactsContainer {
    width: 30vw;
    display: flex;

    .webContacts {
      border-right: 1px solid #efdcbd;

      @media (max-width: 375px) {
        width: 80vw;
        word-wrap: break-word;
        border: none;
      }
    }

    .webContacts,
    .socialContacts {
      padding: 0 1vw 0 1vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 15vw;
      height: 12vh;
      color: #efdcbd;
      @media (max-width: 375px) {
        width: 90px;
        height: 100px;
        margin-left: 50px;
      }
    }

    @media (max-width: 375px) {
      justify-content: center;
      width: 50vw;
      font-size: 10px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-around;
`;
export const SocialMedia = styled.div`
  width: 45%;
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
