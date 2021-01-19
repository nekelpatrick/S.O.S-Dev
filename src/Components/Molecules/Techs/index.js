import { TechsContent, StyledPopup } from "./style";

import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import Types from "../../Atoms/Types";

import { api } from "../../../axios-globalConfig/axios-global";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const Techs = () => {
  const schema = yup.object().shape({
    techs: yup.string().required("Campo obrigatório"),
  });
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const patchTechs = (data) => {
    api
      .patch("/users/tecnologia", { ...data })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError("tech_patch", {
          message: "Tecnologia já cadastrada.",
        });
      });
  };

  const changeOption = (e) => {
    console.log(e.target.value);
  };
  const changeTextInput = (e) => {
    console.log(e.target.value);
  };

  const icon = <i class="fas fa-plus"></i>;

  return (
    <StyledPopup
      trigger={<Button text={icon} classe="buttonPupUpAddTechs" />}
      modal
      nested
    >
      {(close) => (
        <TechsContent>
          <form onSubmit={handleSubmit(patchTechs)} className="form-content">
            <Types text="Adicionar Tecnologia" variant="h6" />
            <Input
              label="Tecnologias"
              name="techs"
              id="techs"
              onChange={changeTextInput}
              variant="outlined"
              inputRef={register}
              helperText={errors.techs?.message}
            />
            <Input
              select="select"
              label="Nível de Experiência"
              onChange={changeOption}
              variant="outlined"
            >
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Input>
            <Button text="Cadastrar" classe="buttonTechs" type="submit" />
          </form>
        </TechsContent>
      )}
    </StyledPopup>
  );
};

export default Techs;
