import StyledContainer from "./style";

import { Link } from "react-scroll";

import Image from "../../Atoms/Image";
import Button from "../../Atoms/Button";

const Slogan = ({ slogan, img }) => {
  return (
    <StyledContainer>
      <div className="sloganbutton">
        <Image width="25vw" height="auto" src={slogan} />
        <Link to="box" spy={true} smooth={true}>
          <Button text="Saiba Mais" classe="buttonSaibaMais" />
        </Link>
      </div>
      <div className="pessoas">
        <Image width="25vw" height="auto" src={img} />
      </div>
    </StyledContainer>
  );
};

export default Slogan;
