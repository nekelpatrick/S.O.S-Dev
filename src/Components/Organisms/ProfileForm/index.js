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
  IconButton,
  Divider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";

import { RiImageEditLine } from "react-icons/ri";

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

// METERIAL-UI RELATED
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginTop: 10,
  },

  avatar: {
    backgroundColor: "#C4C4C4",
    width: 55,
    height: 55,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 1,
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "30vw",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
    margin: "4px",
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

  // ------ MODAL POP UP PARA REDE SOCIAIS --------------------

  const [dialogOpen, setDialogOpen] = useState(false);
  const [socialMedia, setSocialMedia] = useState("");

  const handleClickOpen = (media) => {
    setDialogOpen(true);
    setSocialMedia(media);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSaveLink = () => {
    setDialogOpen(false);
  };

  //----------------------SELECT---------------------------------

  const [userLevel, setUserLevel] = useState("");

  const handleSelectorChange = (event) => {
    setUserLevel(event.target.value);
  };

  // ---------------- VALIDATION YUP ---------------------------------
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

  //------------------------------VALIDATION YUP------------------------

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

          {/* ------------------------------- TECNOLOGIAS */}

          <Container
            maxWidth="md"
            className={classes.techContainer}
            align="center"
          >
            <Typography
              className={classes.text}
              style={{ margin: 8 }}
              variant="body1"
            >
              Tecnologias
            </Typography>

            <TextField
              inputRef={register}
              name="tecnologia"
              id="contact-tecnologia"
              error={!!errors.contact}
              helperText={errors.contact?.message}
              style={{ margin: 6 }}
              defaultValue={user?.techs}
              variant="outlined"
              label="Insira sua tecnologia"
            />
            <Typography className={classes.text} variant="body1">
              Qual sua experiência na Tecnologia
            </Typography>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Nível</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userLevel}
                onChange={handleSelectorChange}
              >
                <MenuItem value={10}>Iniciante</MenuItem>
                <MenuItem value={20}>Intermediário</MenuItem>
                <MenuItem value={30}>Avançado</MenuItem>
              </Select>
              <Button
                style={{ marginTop: 8 }}
                color="secondary"
                variant="outlined"
              >
                Salvar
              </Button>
            </FormControl>
          </Container>
          {console.log(userLevel)}

          {/* -----------------------------------------FIM TECNOLOGIAS */}

          <Divider style={{ margin: 10, marginTop: 5 }} />
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
            {/* <TextField
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
            /> */}
            <MuiPhoneNumber
              name="contact-telefone"
              data-cy="user-phone"
              defaultCountry={"br"}
              onlyCountries={["br"]}
              label="Numero de telefone"
              //
              inputRef={register}
              id="contact-telefone"
              error={!!errors.contact}
              helperText={errors.contact?.message}
              style={{ margin: 8 }}
              variant="outlined"
            />

            <Container className={classes.socialButtons}>
              <Avatar
                className={classes.avatarButton}
                component={IconButton}
                onClick={() => handleClickOpen("Linkedin")}
              >
                <AiFillLinkedin />
              </Avatar>

              <Avatar
                className={classes.avatarButton}
                component={IconButton}
                onClick={() => handleClickOpen("Github")}
              >
                <AiFillGithub />
              </Avatar>

              <Avatar
                className={classes.avatarButton}
                component={IconButton}
                onClick={() => handleClickOpen("Instagram")}
              >
                <AiFillInstagram />
              </Avatar>

              {/* -------------------modal- */}

              <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Insira o link para seu {socialMedia}
                  </DialogContentText>
                  <TextField
                    name="linkSocial"
                    autoFocus
                    margin="dense"
                    id="linkSocial"
                    label="Link"
                    type="email"
                    fullWidth
                    color="textPrimary"
                    error={!!errors.linkSocial}
                    helperText={errors.linkSocial?.message}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDialogClose} color="secondary">
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    onClick={handleDialogClose}
                    color="textPrimary"
                  >
                    Salvar
                  </Button>
                </DialogActions>
              </Dialog>

              {/* --------------------------- */}
            </Container>
          </Container>

          <Container align="center" className={classes.buttons}>
            <Button
              style={{ marginTop: 6 }}
              type="submit"
              variant="contained"
              color="primary"
            >
              SALVAR ALTERAÇÕES
            </Button>
          </Container>
        </form>
      </Container>
    </>
  );
}
