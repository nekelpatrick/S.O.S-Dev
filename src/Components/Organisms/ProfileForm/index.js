import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Typography,
  Container,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@material-ui/core";

import { RiImageEditLine } from "react-icons/ri";

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

import Techs from "../../Molecules/Techs/index";

// METERIAL-UI RELATED
const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    marginTop: 10,
  },

  avatar: {
    backgroundColor: "#C4C4C4",
    width: 65,
    height: 65,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 2,
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "30vw",
  },
  techButton: {
    height: "40px",
    "&hover": {
      backgroundColor: "#fff",
    },
  },

  socialButtons: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "center",
    margin: "10px",
  },
  avatarButton: {
    margin: "5px",
  },
}));

export default function UserProfile({ user }) {
  // GLOBAL VARIABLES
  const classes = useStyles();
  let image = false;
  // const token = window.localStorage.getItem("token") || Cookies.get("token");

  // GLOBAL STATES

  // LOCAL STATES
  const [course_module, setCourse_madule] = useState("");
  const [open, setOpen] = useState(false);

  // VALIDATION WITH YUP
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
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  // UPADATE MESSAGE
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // COURSE_MODULES HANDLERS
  const handleChange = (evt) => {
    setCourse_madule(evt.target.value);
  };

  //  AQUI PODEMOS FAZER UM ARRAY PARA INPUT SELECT
  const modules = [];

  // GET AVATAR HANDLER
  const handleAvatarChange = (e) => {
    image = new FormData();
    image.append("avatar", e.target.files[0]);
  };

  // FORM HANDLER
  const handleForm = (data) => {
    data.course_module = course_module;
    data.image = image;
    setOpen(true);
  };

  return (
    <>
      <Container maxWidth="md" align="center" className={classes.root}>
        <form onSubmit={handleSubmit(handleForm)}>
          <Avatar className={classes.avatar}></Avatar>

          {/* SE O USUARIO FOR TROCAR O ÍCONE */}
          <label htmlFor="image">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <RiImageEditLine style={{ fontSize: "1.7rem" }}></RiImageEditLine>
            </IconButton>
          </label>
          <input
            name="image"
            id="image"
            style={{ display: "none" }}
            type="file"
            onChange={handleAvatarChange}
          />

          {/*  */}

          <Container maxWidth="md" className={classes.textContainer}>
            <TextField
              variant="outlined"
              multiline
              name="name"
              inputRef={register}
              error={!!errors.name}
              helperText={errors.name?.message}
              style={{ margin: 8 }}
              defaultValue={user?.name}
              label="Nome do Usuário"
            />
          </Container>

          {/* TECNOLOGIAS */}

          <Container
            maxWidth="md"
            className={classes.techContainer}
            align="center"
          >
            <Typography className={classes.text} variant="body1">
              Tecnologias
            </Typography>

            <Techs className={classes.techButton} />
          </Container>

          {/* FIM TECNOLOGIAS */}

          <Divider style={{ margin: 30 }} />
          {/*  */}

          <Container
            align="center"
            maxWidth="md"
            className={classes.textContainer}
          >
            <Typography className={classes.text} variant="body1">
              Contato
            </Typography>

            <TextField
              inputRef={register}
              name="email"
              id="contact-email"
              error={!!errors.contact}
              helperText={errors.contact?.message}
              style={{ margin: 8 }}
              defaultValue={user?.email}
              variant="outlined"
              label="Email"
            />
            <TextField
              inputRef={register}
              name="contact-portfolio"
              id="contact-portfolio"
              error={!!errors.contact}
              helperText={errors.contact?.message}
              style={{ margin: 8 }}
              defaultValue={user?.contact}
              variant="outlined"
              label="Portfolio link"
            />
            <TextField
              inputRef={register}
              name="contact-telefone"
              id="contact-telefone"
              error={!!errors.contact}
              helperText={errors.contact?.message}
              style={{ margin: 8 }}
              defaultValue={user?.contact}
              variant="outlined"
              type="number"
              label="Numero de telefone"
            />

            <Container className={classes.socialButtons}>
              <Avatar className={classes.avatarButton}>
                <AiFillLinkedin />
              </Avatar>
              <Avatar className={classes.avatarButton}>
                <AiFillGithub />
              </Avatar>
              <Avatar className={classes.avatarButton}>
                <AiFillInstagram />
              </Avatar>
            </Container>
          </Container>

          <Container align="center" className={classes.buttons}>
            <Button type="submit" variant="contained" color="primary">
              SALVAR ALTERAÇÕES
            </Button>
          </Container>
        </form>
      </Container>
    </>
  );
}
