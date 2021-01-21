import Section2Content from "./style";

import Types from "../../Atoms/Types";
import Image from "../../Atoms/Image";

const DescriptionText = ({ image }) => {
  const cardTitle = "Por que usar o S.O.S?";
  const text =
    "Somos um espaço focado nos iniciantes da comunidade de programadores. O nosso espaço proporciona expriência em trabalho em grupo para iniciantes e também complemento para um currículo melhor estruturado!";

  return (
    <Section2Content>
      <div className="second-image-content">
        <Image src={image} height="auto" width="21vw" />
      </div>
      <div className="description-text-content">
        <Types variant="h5" component="h2" text={cardTitle} />
        <div className="description">
          <Types variant="body1" component="p" text={text} />
        </div>
      </div>
    </Section2Content>
  );
};

export default DescriptionText;
