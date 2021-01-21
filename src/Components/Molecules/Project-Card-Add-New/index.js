import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  CardActions,
  Paper,
  TextField,
} from "@material-ui/core";

import Button from "../../Atoms/Button";
import Typography from "../../Atoms/Types";
import useStyles from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const ProductCard = () => {
  const classes = useStyles();

  //  CARD-HEADER -------

  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const [time, setTime] = React.useState(date);

  const [estimated, setEstimated] = React.useState("7");

  // INPUTS
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
                text="Título do projeto"
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

          {/* 
          
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

    
          
          */}

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
        <Paper elevation={7} className={classes.contentItem}></Paper>
      </Box>
    </Card>
  );
};

export default ProductCard;
