import Comments from "../../Components/Molecules/Comments";
import DescriptionText from "../../Components/Molecules/DescriptionText";
import Slides from "../../Components/Molecules/Slides";
import Slogan from "../../Components/Molecules/Slogan";

import slogan from "./Images/Slogan.png";
import img1 from "./Images/Img1.png";
import img2 from "./Images/Img2.png";

import { Container, BoxComments } from "./style";

const LandingPage = () => {
  return (
    <Container>
      <Slogan slogan={slogan} img={img1} />
      <DescriptionText image={img2} />
      <BoxComments>
        <Comments name="" text="" src="" />
      </BoxComments>
      <Slides />
    </Container>
  );
};

export default LandingPage;
