import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  CardActions,
  Paper,
  TextField,
  Container,
  Button as ButtonSave,
} from "@material-ui/core";

import Button from "../../Atoms/Button";
import Typography from "../../Atoms/Types";
import useStyles from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { api } from "../../../axios-globalConfig/axios-global";

const ProductCard = () => {
  const classes = useStyles();
  const history = useHistory();

  const { openProject, profile } = useSelector((state) => state);

  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const [time, setTime] = useState(date);
  const [estimated, setEstimated] = useState("7");
  const [comment, setComment] = useState("");
  const [commentOfProject, setCommentOfProject] = useState([]);


  // INPUTS
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const getComment = (e) => {
    setComment(e);
  }

  // handles
  const patchComment = () => {
    api.post("/comments", {comment: comment, userId: profile.id, projectId: openProject.id},
    { 
      headers: {
        Authorization: `Bearer ${profile.token}`
      }
    }
    ).then((res) => {
      console.log(res);
      api.get(`/comments?projectId=${openProject.id}`)
    .then((res) => {
      if ( res.data?.length > 0 ) {
        const commentsOfThisProject = res.data.filter((comment) => comment.projectId === openProject.id)
        setCommentOfProject(commentsOfThisProject)
      }
    })
    })
  }

  // --------- VALIDATION YUP ------------

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo Necessário")
      .matches(/[A-Za-z]\s[A-Za-z]/, "Formato Inválido"),
    email: yup
      .string()
      .required("Campo Necessário")
      .email("Formato de email Inválido"),
    contact: yup.string().required("Campo Necessário"),
    linkSocial: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  //---------------------------------------

  useEffect(() => {
    api.get(`/comments?projectId=${openProject.id}`)
    .then((res) => {
      if ( res.data?.length > 0 ) {
        const commentsOfThisProject = res.data.filter((comment) => comment.projectId === openProject.id)
        setCommentOfProject(commentsOfThisProject)
      }
    })
  }, [])

  return (
    <Card elevation={12} className={classes.root}>
      <CardContent>
        <Grid container justify="space-between" direction="row" wrap="nowrap">
          {/*  */}

          <Grid xs={8} container spacing={1} direction="column">
            <Grid item>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h5"
                text={openProject.title}
              ></Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="h6"
                text={`Publicado em: ${time}`}
              ></Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="h6"
                text={`Tempo Estimado: ${estimated} dias`}
              ></Typography>
            </Grid>
          </Grid>

          {/*  */}
          <Grid xs container justify="flex-end" alignItems="flex-start">
            <CardActions>
              <Button text="Finalizar Projeto"></Button>
            </CardActions>
          </Grid>
          {/*  */}
        </Grid>

        <div className={classes.content}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Paper elevation={7} className={classes.contentItem}>
                <TextField
                  Description
                  id="Description"
                  label="Descrição"
                  placeholder="Insira a Descrição do projeto"
                  multiline
                  rows={6}
                  value={value}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper elevation={7} className={classes.contentItem}>
                <TextField
                  Abilities
                  id="Abilities"
                  label="Habilidades Necessárias"
                  placeholder="Insira as Habilidades necessárias"
                  multiline
                  rows={6}
                  value={value}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </CardContent>

      <Divider />

      <Box m={2.1}>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h6"
          text={`Comentários`}
          align="center"
        ></Typography>
        {/* ---------------------COMENTÁRIOS------------------------- */}
        <Paper elevation={7} className={classes.contentItemComments}>
          {/* fazer um map aqui ? */}
          <Container className={classes.comments}>
          {commentOfProject.length > 0 && 
            commentOfProject.map((comments) => (
              <Paper style={{ margin: 8, padding: "4px" }}>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h8"
                text={comments.comment}
                align="center"
              ></Typography>
            </Paper>
            ))
          }
            {/*  */}
          </Container>

          <TextField
            inputRef={register}
            name="comentario"
            id="contact-tecnologia"
            style={{ width: "20vw", margin: "auto" }}
            variant="outlined"
            label="Insira seu comentário"
            onChange={(e) => getComment(e.target.value)}
          />

          <ButtonSave
            onClick={patchComment}
            color="secondary"
            variant="outlined"
            className={classes.saveButton}
            text="Salvar"
            style={{ width: "10vw", margin: "auto" }}
          >
            Salvar
          </ButtonSave>
        </Paper>
      </Box>
    </Card>
  );
};

export default ProductCard;
