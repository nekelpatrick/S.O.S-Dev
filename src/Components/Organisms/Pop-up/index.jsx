import { useState } from "react";
import Button from "../../Atoms/Button";

import { StyledPopup, Container } from "./style";

import Login from "../../Molecules/Login";
import Register from "../../Molecules/Register";

export const Popup = () => {
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
            {isReg ? (
              <Login text="Cadastre-se" isReg={isReg} setIsReg={setIsReg} />
            ) : (
              <Register
                text="Volte para o login"
                isReg={isReg}
                setIsReg={setIsReg}
              />
            )}
          </Container>
        )}
      </StyledPopup>
    </>
  );
};

export default Popup;
