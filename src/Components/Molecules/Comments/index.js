import Types from "../../Atoms/Types";
import Image from "../../Atoms/Image";

import { api } from "../../../axios-globalConfig/axios-global";

import aspasCima from "./Images/aspas-cima.png";
import aspasBaixo from "./Images/aspas-baixo.png";

import { Card, CardInfo, CardContent, AspasCima, AspasBaixo } from "./style";

const Comments = ({ name, text, src }) => {
  return (
    <>
      <AspasCima>
        <Image
          src={aspasCima}
          alt={"aspas-cima"}
          width="65px"
          height="65px"
          className="aspasCima"
        />
      </AspasCima>

      {/* <Card key={i}>
          <CardInfo>
            <Image
              src={src[i]}
              alt={e}
              width="45px"
              height="45px"
              borderRadius="50%"
            />
            <Types
              variant="h6"
              component="h3"
              text={e}
              classe={"commentTitle"}
            />
          </CardInfo>
          <CardContent>
            <Types
              variant="body1"
              component="p"
              text={text[i]}
              classe={"commentContent"}
            />
          </CardContent>
        </Card> */}

      <AspasBaixo>
        <Image
          src={aspasBaixo}
          alt={"aspas-baixo"}
          width="65px"
          height="65px"
          className="aspasCima"
        />
      </AspasBaixo>
    </>
  );
};

export default Comments;
