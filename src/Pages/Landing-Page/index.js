import Comments from "../../Components/Molecules/Comments";
import DescriptionText from "../../Components/Molecules/DescriptionText";
import Slides from "../../Components/Molecules/Slides";
import Slogan from "../../Components/Molecules/Slogan";

import slogan from "./Images/Slogan.png";
import img1 from "./Images/Img1.png";
import img2 from "./Images/Img2.png";

import { Container, BoxComments } from "./style";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const LandingPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {isMobile ? (
        <>
          {" "}
          <Slogan slogan={slogan} img={img1} img2={img2} />
          <DescriptionText />
          <Comments />
        </>
      ) : (
        <>
          <Slogan slogan={slogan} img={img1} img2={img2} />

          <Container>
            <DescriptionText image={img2} />
            <BoxComments>
              <Comments name="" text="" src="" />
            </BoxComments>
          </Container>
          <Slides />
        </>
      )}
    </>
  );
};

export default LandingPage;
