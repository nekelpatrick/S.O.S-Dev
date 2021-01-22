import { useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../Atoms/Button";
import Types from "../../Atoms/Types";
import Input from "../../Atoms/Input";

import Select from "@material-ui/core/Select";

import { api } from "../../../axios-globalConfig/axios-global";

import { StyledForm } from "./style";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addProjectsThunk } from "../../../Redux/modules/projects/thunk";

const Projects = ({ setAuth, close }) => {
  const title = "Cadastrar Novo Projeto";
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();

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
    tech: yup.string().required("Campo obrigatório"),
    nivel: yup.string().required("Campo obrigatório"),
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
    data.userId = profile.id;
    api
      .post(
        `/projects`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${profile.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(addProjectsThunk());
        close();
      })
      .catch((err) => {
        setError("add_project", {
          message: "Projeto já existe",
        });
      });
  };

  return (
    <>
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
        <Select
          native={true}
          select="select"
          label="Tipo do Pojeto"
          name="type"
          variant="outlined"
          inputRef={register}
          helperText={errors.type?.message}
        >
          <option>Programação Web</option>
          <option>Programação Mobile</option>
          <option>Programação Desktop</option>
          <option>Web Design</option>
        </Select>
        <Select
          native={true}
          select="select"
          label="Tecnologia"
          name="tech"
          variant="outlined"
          inputRef={register}
          helperText={errors.tech?.message}
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

        <Select
          native={true}
          select="select"
          label="Tempo de produção estimado"
          name="time"
          variant="outlined"
          inputRef={register}
          helperText={errors.time?.message}
        >
          <option>3 a 7 dias</option>
          <option>8 a 15 dias</option>
          <option>+ de 15 dias</option>
        </Select>
        <Button text="criar" type="submit" />
      </StyledForm>
    </>
  );
};

export default Projects;
