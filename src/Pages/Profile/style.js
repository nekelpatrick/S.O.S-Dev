import styled from "styled-components";

export const Container = styled.div`
  height: 95vh;
  width: 30vw;
  background-color: #17223a;
  border-right: 1px solid #efdcbd;
  align-self: left;
  margin-top: -1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
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
  }
`;

export const PendingProjectsContainer = styled.div`
  width: 30vw;
  height: 17vh;
  padding: 0 1vw 0 1vw;
  color: #efdcbd;
  margin-bottom: 2vh;
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
  }
`;

export const ContactContainer = styled.div`
  width: 30vw;
  height: 17vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;

  .contactsContainer {
    width: 30vw;
    display: flex;

    .webContacts {
      border-right: 1px solid #efdcbd;
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
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-around;
`;
