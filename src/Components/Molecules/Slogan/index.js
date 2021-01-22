import StyledContainer from "./style";

import Image from "../../Atoms/Image";
import Button from "../../Atoms/Button";

const Slogan = ({ slogan, img }) => {
  return (
    <StyledContainer>
      <div className="sloganbutton">
        <Image width="25vw" height="auto" src={slogan} />
        {/* <Button
          text="Saiba Mais"
          classe="buttonSaibaMais"
          onClick={this.scrollToTop()}
        /> */}
      </div>
      <div className="pessoas">
        <Image width="25vw" height="auto" src={img} />
      </div>
    </StyledContainer>
  );
};

export default Slogan;
