import Types from "../../Atoms/Types";
import Image from "../../Atoms/Image";

import { api } from "../../../axios-globalConfig/axios-global";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import aspasCima from "./Images/aspas-cima.png";
import aspasBaixo from "./Images/aspas-baixo.png";

import { Card, CardInfo, CardContent, AspasCima, AspasBaixo } from "./style";

import {
  Typography,
  Container,
  useMediaQuery,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mobileTitle: {},
  mobileDesc: {
    padding: "0 2vw 0 2vw",
  },
}));

const Comments = ({ name, text, src }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

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
      {" "}
      {isMobile ? (
        <>
          <Grid
            container
            spacing={1}
            direction="column"
            align="center"
            style={{ marginTop: "5px" }}
          >
            {feedbacks.map((e, i) => (
              <Grid
                item
                xs={12}
                align="center"
                style={{
                  backgroundColor: "#121A2B",
                  margin: "30px",
                  border: "2px solid #efdcbd",
                  borderRadius: "5px",
                }}
              >
                <Grid cointainer key={i}>
                  <Grid
                    item
                    xs={12}
                    align="center"
                    direction="row"
                    style={{
                      height: "85",
                      display: "flex",
                      flexDirection: "row",
                      padding: "10px",
                      justifyContent: "flex-start",
                      alignItems: "end",
                    }}
                  >
                    <Image
                      src={users[i]?.src}
                      alt={users[i]?.name}
                      width="45px"
                      height="45px"
                      borderRadius="50%"
                    />
                    <Typography
                      variant="body1"
                      style={{ margin: "10px", marginTop: "10px" }}
                    >
                      {users[i]?.user}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      style={{ padding: "3vw", height: "100px" }}
                    >
                      " {feedbacks[i]?.comment} "
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        // -------------------------------DESKTOP
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
      )}
    </>
  );
};

export default Comments;
