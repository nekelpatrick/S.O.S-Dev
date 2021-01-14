import StyledContainer from "./style";

import Image from "../../Atoms/Image";
import Button from "../../Atoms/Button";

const Slogan = () => {
  return (
    <StyledContainer>
      <div className="sloganbutton">
        <Image width="300px" height="300px" />
        <Button text="Saiba Mais" classe="buttonSaibaMais" />
      </div>
      <div className="3pessoas">
        <Image width="300px" height="300px" />
      </div>
    </StyledContainer>
  );
};

export default Slogan;
