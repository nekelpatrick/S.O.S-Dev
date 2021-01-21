import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  CardActions,
  Paper,
  Typography as TypographyDesc,
} from "@material-ui/core";

import Button from "../../Atoms/Button";
import Typography from "../../Atoms/Types";
import useStyles from "./style";
import { api } from "../../../axios-globalConfig/axios-global";

import { useSelector, useDispatch } from "react-redux";

import { getProfileThunk } from "../../../Redux/modules/profile/thunks";

import { useHistory } from 'react-router-dom'

import { useContext } from 'react'
import { StateContext } from '../../../Pages/Profile/stateContext'

const ProjectCard = ({ titulo, tipo, descricao, stack, userId, projectFavorite, isFavorite = false, alreadyFavorite = false }) => {
  const history = useHistory()
  
  const {isFavoriteTime, setFavouriteTime} = useContext(StateContext)
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users, profile } = useSelector((state) => state);
  const findUser = users.find((e) => e.id === parseInt(userId));
  const favoriteIcon = <i class="fas fa-star"></i>;
  const removeIcon = <i class="fas fa-eraser"></i>;

  const patchFavoriteList = (favoriteList) => {
    api
      .patch(
        `/users/${profile.id}`,
        {
          favorites: favoriteList,
        },
        {
          headers: {
            Authorization: `Bearer ${profile.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(getProfileThunk(profile.email, profile.token));
      })
      .catch((error) => {});
  };

  const findRepeatedFavorite = profile.favorites.findIndex((project) => project.id === projectFavorite.id);
  const handleAddFavorite = (e) => {
    e.target.style.color = "yellow";
    if ( findRepeatedFavorite < 0 ) {
      patchFavoriteList([...profile.favorites, projectFavorite])
    }
  };
  const handleRemoveFavorite = (e) => {
    const newFavorites = profile.favorites.filter(
      (favorite) => favorite.id !== projectFavorite.id
    );
    e.target.style.color = "red";
    patchFavoriteList(newFavorites);
  };

  return (
    <Card elevation={14} align="center" className={classes.root}>
      <CardContent>
        <Grid className={classes.cardHeader} container xs={12} spacing={2}>
          <Grid item xs={8}>
            <Typography
              align="center"
              color="textSecondary"
              gutterBottom
              variant="h4"
              text={titulo}
            />
            <Button 
            onClick={(e) => isFavorite ? handleRemoveFavorite(e) : handleAddFavorite(e)} 
            text={isFavorite ? removeIcon : favoriteIcon}
            classe={alreadyFavorite ? "alreadyFavorites" : "addFavorites"}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h6"
              text={tipo}
            />
          </Grid>
        </Grid>

        <div className={classes.content}>
          <Grid container xs={12} spacing={2}>
            <Grid item xs={4}>
              <Paper elevation={7} className={classes.contentItem}>
                <TypographyDesc
                  color="textPrimary"
                  variant="body1"
                  align="center"
                  style={{
                    margin: "20px 30px",
                  }}
                >
                  {descricao}
                </TypographyDesc>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper elevation={7} className={classes.contentItemStacksTech}>
                {stack.map((e) => (
                  <Grid
                    container
                    xs={12}
                    spacing={1}
                    style={{ marginTop: "5px" }}
                  >
                    <Grid item xs={6} align="center">
                      <Typography
                        color="secondary"
                        variant="body1"
                        text={e.linguagem}
                      />
                    </Grid>
                    <Grid item xs={6} align="center">
                      <Typography
                        color="secondary"
                        variant="body1"
                        text={e.nivel}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </CardContent>

      <Divider />

      <Box p={1.2}>
        <Grid container justify="space-between" spacing={1}>
          <Grid className={classes.statsItem} item>
            <CardActions>
              <Button
                className={classes.statsIcon}
                text="abrir projeto"
                onClick= {() => {
                  setFavouriteTime(true)
                  history.push('/profile/novoProjeto')
                }}
              ></Button>
            </CardActions>
          </Grid>

          <Grid className={classes.statsItem} item>
            <Typography
              color="textPrimary"
              display="inline"
              variant="h6"
              text={findUser?.user}
            />
            <Avatar className={classes.statsIcon} src={findUser?.src} />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ProjectCard;
