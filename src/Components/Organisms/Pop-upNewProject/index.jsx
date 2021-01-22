import { useState } from "react";
import Button from "../../Atoms/Button";

import { StyledPopup, Container } from "./style";

import Projects from "../../Molecules/Projects";

export const PopupNewProject = ({ setAuth }) => {
  const [isReg, setIsReg] = useState(true);

  return (
    <>
      <StyledPopup
        trigger={<Button className="button" text="ENTRAR" />}
        modal
        nested
        onClose={() => setIsReg(true)}
      >
        {(close) => (
          <Container>
            <Projects
              text="Criar Projeto"
              isReg={isReg}
              setIsReg={setIsReg}
              close={close}
              setAuth={setAuth}
            />
          </Container>
        )}
      </StyledPopup>
    </>
  );
};

export default PopupNewProject;
