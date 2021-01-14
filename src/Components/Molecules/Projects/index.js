import { Form } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../Atoms/Button";
import Types from "../../Atoms/Types";
import Input from "../../Atoms/Input";

import { useForm } from "react-hook-form";

const Projects = ({ text }) => {
  const title = "Cadastro";

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "O nome deve conter no mínimo 3 letras")
      .required("Campo obrigatorio"),
    user: yup.string().required("Campo obrigatório"),
    email: yup.string().email("email invalido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve conter no mínimo 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter: pelomenos 1 letra maiuscula, 1 letra minuscula, 1 caractere especial e 1 número"
      )
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "A senha deve ser igual"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <Types variant="h2" text={title} className="titlePopUp" />

      <Form onSubmit={handleSubmit(handleForm)}>
        <Input
          label="Usuário"
          variant="outlined"
          name="user"
          id="user"
          inputRef={register}
          helperText={errors.user?.message}
        />
        <Input
          label="Email"
          variant="outlined"
          name="email"
          id="email"
          inputRef={register}
          helperText={errors.email?.message}
        />
        <Input
          label="Nome"
          variant="outlined"
          name="name"
          id="name"
          inputRef={register}
          helperText={errors.name?.message}
        />
        <Input
          label="Senha"
          variant="outlined"
          name="password"
          id="password"
          type="password"
          inputRef={register}
          helperText={errors.password?.message}
        />
        <Input
          label="Confirmar Senha"
          variant="outlined"
          name="passwordConfirm"
          id="passwordConfirm"
          type="password"
          inputRef={register}
          helperText={errors.passwordConfirm?.message}
        />
        <Button
          color="inherit"
          classe="buttonLogin"
          text="CADASTRAR"
          type="submit"
        />
      </Form>

      <Button text={text}></Button>
    </>
  );
};

export default Projects;
