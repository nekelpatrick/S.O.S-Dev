import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../Atoms/Button";
import Types from "../../Atoms/Types";
import Input from "../../Atoms/Input";

import Select from "@material-ui/core/Select";

import { StyledPopup, Container, StyledForm } from "./style";

import { useForm } from "react-hook-form";

const Projects = ({ text }) => {
  const title = "Cadastrar Novo Projeto";

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

  const handleForm = (data) => {
    console.log(data);
  };

  const changeOption = (e) => {
    console.log(e.target.value);
  };
  const changeTextInput = (e) => {
    console.log(e.target.value);
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
                onChange={changeTextInput}
                helperText={errors.title?.message}
              />
              <Input
                label="Descrição"
                variant="outlined"
                name="description"
                id="description"
                inputRef={register}
                onChange={changeTextInput}
                helperText={errors.description?.message}
              />
              <Input
                label="Qualificações"
                variant="outlined"
                name="skills"
                id="skills"
                inputRef={register}
                onChange={changeTextInput}
                helperText={errors.skills?.message}
              />
              <Select
                native={true}
                select="select"
                label="Tipo do Pojeto"
                onChange={changeOption}
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
                onChange={changeOption}
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
