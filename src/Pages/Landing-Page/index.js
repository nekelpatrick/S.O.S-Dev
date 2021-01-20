import Comments from "../../Components/Molecules/Comments";
import DescriptionText from "../../Components/Molecules/DescriptionText";
import Slides from "../../Components/Molecules/Slides";
import Slogan from "../../Components/Molecules/Slogan";

import slogan from "./Images/Slogan.png";
import img1 from "./Images/Img1.png";
import img2 from "./Images/Img2.png";

import { Container, BoxComments } from "./style";

const nameMock = ["Gabriel", "Eduardo", "Claudio"];
const mockComments = ["bom", "top", "massa"];
const mockImgPerfil = [
  "https://www.flaticon.com/svg/vstatic/svg/3874/3874498.svg?token=exp=1611042268~hmac=c26984d17f2872676b5375d2abf33db1",
  "https://www.flaticon.com/svg/vstatic/svg/3874/3874567.svg?token=exp=1611042268~hmac=37f76c8003626f473ddfed00339dc90a",
  "https://www.flaticon.com/svg/vstatic/svg/3874/3874449.svg?token=exp=1611042268~hmac=21ab69257d87c486c39368e630bb8cf1",
];
const LandingPage = () => {
  return (
    <Container>
      <Slogan slogan={slogan} img={img1} />
      <DescriptionText image={img2} />
      <BoxComments>
        <Comments name={nameMock} text={mockComments} src={mockImgPerfil} />
      </BoxComments>
      <Slides />
    </Container>
  );
};

export default LandingPage;
