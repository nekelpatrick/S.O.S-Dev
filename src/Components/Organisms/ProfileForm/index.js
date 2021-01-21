import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../../axios-globalConfig/axios-global";

import Techs from "../../Molecules/Techs";
import { FormContainer, TechContainer, TechBox, StyledForm } from "./style";

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
} from "@material-ui/core";

import { RiImageEditLine } from "react-icons/ri";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getProfileThunk } from "../../../Redux/modules/profile/thunks";
import { useHistory } from "react-router-dom";

// METERIAL-UI RELATED
const useStyles = makeStyles((theme) => ({
  root: {
    height: "30vh",
    marginTop: 5,
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
    display: "flex",
    flexDirection: "column",
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
  saveLevelButton: {
    width: "5vw",
    margin: "auto",
  },
}));

export default function UserProfile({ setAuth }) {
  const classes = useStyles();
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  let image = false;

  const [imputLink, setInputLink] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setAuth(2);
  }, [setAuth]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleAvatarChange = (e) => {
    image = new FormData();
    image.append("avatar", e.target.files[0]);
  };

  const schema = yup.object().shape({
    user: yup.string().required("Campo Necessário"),
    email: yup
      .string()
      .email("Formato de email Inválido")
      .required("Campo Necessário"),
    portifolio: yup.string(),
    phone: yup.string(),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });
  const handleForm = (data) => {
    data.image = image;
    setOpen(true);
    api
      .patch(
        `/users/${profile.id}`,
        {
          user: data.user,
          email: data.email,
          portifolio: data.portifolio,
          phone: data.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${profile.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(getProfileThunk(profile.email, profile.token));
        history.push("/profile");
      });
  };

  const handleClickOpen = (media) => {
    setDialogOpen(true);
    setSocialMedia(media);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleSaveLink = () => {
    setDialogOpen(false);

    api
      .patch(
        `/users/${profile.id}`,
        {
          socialMedia: [
            ...profile.socialMedia,
            { name: socialMedia, link: imputLink },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${profile.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(getProfileThunk(profile.email, profile.token));
      });
  };

  return (
    <>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit(handleForm)}>
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

          <Container maxWidth="xs" className={classes.textContainer}>
            <TextField
              variant="outlined"
              multiline
              name="user"
              inputRef={register}
              error={!!errors.user}
              helperText={errors.name?.message}
              style={{ margin: 3 }}
              defaultValue={profile.user}
              label="Nome do Usuário"
            />
          </Container>

          <TechContainer>
            <TechBox>
              <Typography
                className={classes.text}
                style={{ margin: 3 }}
                variant="body1"
              >
                Adicionar Tecnologias
              </Typography>
              <Techs />
            </TechBox>
          </TechContainer>

          <Divider style={{ margin: 10, marginTop: 5 }} />

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
              style={{ margin: 3 }}
              defaultValue={profile.email}
              variant="outlined"
              label="Email"
            />
            <TextField
              inputRef={register}
              name="portifolio"
              id="contact-portfolio"
              error={!!errors.contact}
              helperText={errors.portifolio?.message}
              style={{ margin: 3 }}
              defaultValue={profile.portifolio}
              variant="outlined"
              label="Portfolio link"
            />

            <TextField
              name="phone"
              label="Numero de telefone"
              inputRef={register}
              id="phone"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              style={{ margin: 3 }}
              variant="outlined"
              defaultValue={profile.phone}
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
                    autoFocus
                    margin="dense"
                    id="linkSocial"
                    label="Link"
                    type="email"
                    fullWidth
                    color="textPrimary"
                    onChange={(e) => setInputLink(e.target.value)}
                    error={!!errors.linkSocial}
                    helperText={errors.linkSocial?.message}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDialogClose} color="secondary">
                    Cancelar
                  </Button>
                  <Button onClick={handleSaveLink} color="textPrimary">
                    Salvar
                  </Button>
                </DialogActions>
              </Dialog>
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
        </StyledForm>
      </FormContainer>
    </>
  );
}
