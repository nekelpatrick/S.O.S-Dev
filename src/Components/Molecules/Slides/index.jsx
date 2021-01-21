import { useState } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Types from "../../Atoms/Types";
import ContainedButtons from "../../Atoms/Button";
import { useStyles, SlideContainer } from "./style";

import { useSelector } from "react-redux";
import { useEffect } from "react";

const Slides = () => {
  const classes = useStyles();
  const [bestProjects, setBestProjects] = useState([]);
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = useSelector((state) => state.projects);

  const showProjects = (e) => {
    if (e.target.outerText === "<") {
      if (projectIndex === 0) {
        return setProjectIndex(4);
      }
      return setProjectIndex(projectIndex - 1);
    }
    if (projectIndex === 4) {
      return setProjectIndex(0);
    }
    return setProjectIndex(projectIndex + 1);
  };

  setTimeout(() => {
    //slide automático
    if (projectIndex === 4) {
      setProjectIndex(0);
    }
    if (projectIndex < 4) {
      setProjectIndex(projectIndex + 1);
    }
  }, 2700);

  useEffect(() => {
    setBestProjects(projects);
  }, [projects]);

  return (
    <SlideContainer>
      <ContainedButtons
        text="<"
        classe="buttonArrow"
        onClick={(e) => showProjects(e)}
      />
      <Card className={classes.root}>
        <CardContent>
          <Types
            variant="h5"
            component="h2"
            text={
              bestProjects.length > 0
                ? bestProjects[projectIndex].title
                : "Título do Projeto"
            }
          />
          <Types
            variant="h7"
            component="h5"
            text={
              bestProjects.length > 0
                ? bestProjects[projectIndex].type
                : "Tipo do projeto"
            }
          />
          <Types
            variant="body1"
            component="p"
            text={
              bestProjects.length > 0
                ? bestProjects[projectIndex].description
                : "Descrição"
            }
          />
        </CardContent>
        <CardActions>
          <ContainedButtons text={"Abrir Projeto"} classe={"button"} />
        </CardActions>
      </Card>
      <ContainedButtons
        text=">"
        classe="buttonArrow"
        onClick={(e) => showProjects(e)}
      />
    </SlideContainer>
  );
};

export default Slides;
