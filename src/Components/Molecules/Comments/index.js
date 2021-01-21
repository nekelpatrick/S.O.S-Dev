import Types from "../../Atoms/Types";
import Image from "../../Atoms/Image";

import { api } from "../../../axios-globalConfig/axios-global";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import aspasCima from "./Images/aspas-cima.png";
import aspasBaixo from "./Images/aspas-baixo.png";

import { Card, CardInfo, CardContent, AspasCima, AspasBaixo } from "./style";

const Comments = ({ name, text, src }) => {
  const { users } = useSelector((state) => state);
  const [feedbacks, setFeedbacks] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    api.get("/feedbacks").then((res) => {
      setFeedbacks(res.data);
      const findUser = users.find((e) => e.id === feedbacks.userId);
      setUser(findUser);
    });
  }, []);

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

      {feedbacks.map((e, i) => (
        <Card key={i}>
          <CardInfo>
            <Image
              src={users[i]?.src}
              alt={users[i]?.name}
              width="45px"
              height="45px"
              borderRadius="50%"
            />
            <Types
              variant="h6"
              component="h3"
              text={users[i]?.user}
              classe={"commentTitle"}
            />
          </CardInfo>
          <CardContent>
            <Types
              variant="body1"
              component="p"
              text={feedbacks[i]?.comment}
              classe={"commentContent"}
            />
          </CardContent>
        </Card>
      ))}

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
