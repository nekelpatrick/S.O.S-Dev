import { useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../Atoms/Button";
import Types from "../../Atoms/Types";
import Input from "../../Atoms/Input";

import Select from "@material-ui/core/Select";

import { api } from "../../../axios-globalConfig/axios-global";

import { StyledPopup, Container, StyledForm } from "./style";

import { useForm } from "react-hook-form";

const Projects = ({ setAuth }) => {
  const title = "Cadastrar Novo Projeto";

  useEffect(() => {
    setAuth(2);
  }, [setAuth]);

  const schema = yup.object().shape({
    title: yup
      .string()
      .min(5, "O nome deve conter no mínimo 5 letras")
      .required("Campo obrigatorio"),
    description: yup
      .string()
      .min(20, "Deve conter no mínimo 20 caracteres")
      .required("Campo obrigatório"),
    skills: yup.string().required("Campo obrigatório"),
    type: yup.string().required("Campo obrigatório"),
    time: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });
  const options = [
    "React",
    "Python",
    "SQL",
    "JavaScript",
    "Java",
    "TypeScript",
    "C#",
    "C++",
    "C",
    "PHP",
    "Ruby",
    "Go",
  ];
  const handleForm = (data) => {
    console.log(data);
    // api
    //   .post("/projects", { ...data })
    //   .then((res) => {
    //   })
    //   .catch((err) => {
    //     setError("add_project", {
    //       message: "Projeto já existe",
    //     });
    //   });
  };

  const icon = <i class="fas fa-plus"></i>;

  return (
    <>
      <StyledPopup
        trigger={<Button classe="buttonPupUpAddTechs" text={icon} />}
        modal
        nested
      >
        {(close) => (
          <Container>
            <StyledForm onSubmit={handleSubmit(handleForm)}>
              <Types variant="h2" text={title} />
              <Input
                label="Título do projeto"
                variant="outlined"
                name="title"
                id="title"
                inputRef={register}
                helperText={errors.title?.message}
              />
              <Input
                label="Descrição"
                variant="outlined"
                name="description"
                id="description"
                inputRef={register}
                helperText={errors.description?.message}
              />
              <div>
                <Select
                  native={true}
                  select="select"
                  label="Tecnologia"
                  name="skills"
                  variant="outlined"
                  inputRef={register}
                  helperText={errors.skills?.message}
                >
                  {options.map((e) => (
                    <option>{e}</option>
                  ))}
                </Select>
                <Select
                  native={true}
                  select="select"
                  label="Tecnologia"
                  name="nivel"
                  variant="outlined"
                  inputRef={register}
                  helperText={errors.nivel?.message}
                >
                  <option>Iniciante</option>
                  <option>Intermediario</option>
                  <option>Avançado</option>
                </Select>
              </div>

              <Select
                native={true}
                select="select"
                label="Tipo do Pojeto"
                name="type"
                variant="outlined"
                inputRef={register}
                helperText={errors.type?.message}
              >
                <option>Front-End</option>
                <option>Back-End</option>
                <option>Full Stack</option>
              </Select>
              <Select
                native={true}
                select="select"
                label="Tempo de produção estimado"
                name="time"
                variant="outlined"
                inputRef={register}
                helperText={errors.time?.message}
              >
                <option>3 dias</option>
                <option>1 semana</option>
                <option>2 semanas</option>
                <option>1 mês</option>
              </Select>
              <Button text="criar" type="submit" />
            </StyledForm>
          </Container>
        )}
      </StyledPopup>
    </>
  );
};

export default Projects;
