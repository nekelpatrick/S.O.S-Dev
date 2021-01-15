import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../Atoms/Button";
import Types from "../../Atoms/Types";
import Input from "../../Atoms/Input";

import { Form, Style } from "./style";

import { useForm } from "react-hook-form";

import axios from "axios";
import jwt_decode from "jwt-decode";

const Login = ({ text, setIsReg, isReg }) => {
  const title = "Login";
  const singUp = "Não tem uma conta?";

  const schema = yup.object().shape({
    email: yup.string().email("email invalido").required("Campo obrigatório"),
    password: yup
      .string()
      // .min(8, "Senha deve conter no mínimo 8 dígitos")
      // .matches(
      //   /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      //   "Senha deve conter: pelomenos 1 letra maiuscula, 1 letra minuscula, 1 caractere especial e 1 número"
      // )
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: data.email,
        password: data.password
      })
      let token = response.data.accessToken;
      let decoded = jwt_decode(token);
      let userId = decoded.sub
      const user = await axios.get("http://localhost:3001/users/1", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(user)
    }
    catch (error) {
      console.log(error)
      alert("credenciais inválidas")
    }
  };

  return (
    <>
      <Types variant="h2" text={title} className="titlePopUp" />
      <Form onSubmit={handleSubmit(handleForm)}>
        <Input
          label="Email"
          variant="outlined"
          name="email"
          id="email"
          inputRef={register}
          helperText={errors.email?.message}
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
        <Button
          color="inherit"
          classe="buttonLogin"
          text="ENTRAR"
          type="submit"
        />
      </Form>
      <Types variant="body2" text={singUp} className="" />
      <Button text={text} onClick={() => setIsReg(false)}></Button>
    </>
  );
};

export default Login;
