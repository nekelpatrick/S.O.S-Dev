import { TechsContent, StyledPopup } from "./style";

import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import Types from "../../Atoms/Types";

import { api } from "../../../axios-globalConfig/axios-global";

import Select from "@material-ui/core/Select";
import { useSelector, useDispatch } from "react-redux";
import { getProfileThunk } from "../../../Redux/modules/profile/thunks";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Techs = () => {
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    techs: yup.string().required("Campo obrigatório"),
    experience: yup.string().required("Campo Obrigatorio"),
  });
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const patchTechs = (data) => {
    api
      .patch(
        `/users/${profile.id}`,
        { tech: [...profile.tech, data] },
        {
          headers: {
            Authorization: `Bearer ${profile.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(getProfileThunk(profile.email, profile.token));
      })
      .catch((err) => {
        setError("tech_patch", {
          message: "Tecnologia já cadastrada.",
        });
      });
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
              variant="outlined"
              inputRef={register}
              helperText={errors.techs?.message}
            />
            <Select
              native={true}
              select="select"
              label="Tempo de produção estimado"
              name="experience"
              variant="outlined"
              inputRef={register}
              helperText={errors.experience?.message}
            >
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Select>
            <Button text="Cadastrar" classe="buttonTechs" type="submit" />
          </form>
        </TechsContent>
      )}
    </StyledPopup>
  );
};

export default Techs;
