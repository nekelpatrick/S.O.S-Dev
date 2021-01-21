import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../Atoms/Button";
import Types from "../../Atoms/Types";
import Input from "../../Atoms/Input";

import { Form } from "./style";

import { api } from "../../../axios-globalConfig/axios-global";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { getProfileThunk } from "../../../Redux/modules/profile/thunks";
import { useHistory } from "react-router-dom";

const Login = ({ text, setIsReg, isReg, close }) => {
  const title = "Login";
  const singUp = "Não tem uma conta?";

  const history = useHistory();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().email("email invalido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Senha deve conter no mínimo 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha incorreta"
      )
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/login", { ...data })
      .then((res) => {
        dispatch(getProfileThunk(data.email, res.data.accessToken));
        history.push("/profile");
        close();
      })
      .catch((err) => {
        setError("user_register", {
          message: "Email já existe",
        });
      });
  };

  return (
    <>
      <Types variant="h2" text={title} />
      <Form onSubmit={handleSubmit(handleForm)}>
        <div>
          <Input
            label="Email"
            variant="outlined"
            name="email"
            id="email"
            inputRef={register}
            helperText={errors.email?.message}
          />
        </div>
        <div>
          <Input
            label="Senha"
            variant="outlined"
            name="password"
            id="password"
            type="password"
            inputRef={register}
            helperText={errors.password?.message}
          />
        </div>
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
