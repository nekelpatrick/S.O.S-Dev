import { FiltersContent } from "./style";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FilterProvider } from "./filterContext";
import { filteredUsersThunk } from "../../../Redux/modules/filteredUsers/thunk";
import CheckBoxAtom from "../../Atoms/Check-Box";
import Input from "../../Atoms/Input";
import Buttom from "../../Atoms/Button";

import addFilteredProjectsThunk from "../../../Redux/modules/filteredProjects/thunk";

const Filters = () => {
  const [searchUser, setSearchUser] = useState("");
  const [options, setOptions] = useState({
    qualifications: "",
    type: "",
    nivel: "",
    time: "",
  });
  const optionsList = [
    {
      setValue: (e) => {
        setOptions({ ...options, qualifications: e.target.value });
      },
      options: [
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
      ],
      label: "Tecnologias",
      value: "qualifications",
    },
    {
      setValue: (e) => {
        setOptions({ ...options, type: e.target.value });
      },
      options: [
        "Programação Web",
        "Programação Mobile",
        "Programação Desktop",
        "Web Design",
      ],
      label: "Área",
      value: "type",
    },
    {
      setValue: (e) => {
        setOptions({ ...options, nivel: e.target.value });
      },
      options: ["Iniciante", "Intermediário", "Avançado"],
      label: "Nivel",
      value: "nivel",
    },
    {
      setValue: (e) => {
        setOptions({ ...options, time: e.target.value });
      },
      options: ["3 a 7 dias", "8 a 15 dias", "+ de 15 dias"],
      label: "Tempo Estimado",
      value: "time",
    },
  ];
  const { projects, users, filteredProjects } = useSelector((state) => state); //-> estão sendo aplicados nas lógicas do redux
  const dispatch = useDispatch(); //=> estão sendo aplicados nas lógicas do redux
  const history = useHistory();
  const handleFilterBySelects = () => {
    // variáveis e funções auxiliáres
    const filterProjectsByProp = (propToFilter, isQualifications) => {
      //filtrar projeto pela prop do select
      if (isQualifications) {
        return projects.filter((project) =>
          project.qualifications?.includes(options[propToFilter])
        );
      }
      return projects.filter(
        (project) => project[propToFilter] === options[propToFilter]
      );
    };
    let filterByQualifications = filterProjectsByProp("qualifications", true);
    let haveProjectsByThisQualifications =
      filterByQualifications.length > 0 ? true : false;
    let filterByType = filterProjectsByProp("type");
    let haveProjectsByThisType = filterByType.length > 0 ? true : false;
    let filterByNivel = filterProjectsByProp("nivel");
    let haveProjectsByThisNivel = filterByNivel.length > 0 ? true : false;
    let filterByTime = filterProjectsByProp("time");
    let haveProjectsByThisTime = filterByTime.length > 0 ? true : false;
    const filteredsList = []; //será dado push com os elementos filtrados e dispach no thunk no final
    const pushOnFilteredProjects = (filterBy) => {
      //faz push em filteredsList sem repetições
      filterBy.forEach((project) => {
        if (
          !filteredsList.some(
            (repeatedProject) => repeatedProject.id === project.id
          )
        ) {
          filteredsList.push(project);
        }
      });
    };
    //push em filteredsList se encontrar projetos com os filtros de select
    if (haveProjectsByThisQualifications) {
      pushOnFilteredProjects(filterByQualifications);
    }
    if (haveProjectsByThisType) {
      pushOnFilteredProjects(filterByType);
    }
    if (haveProjectsByThisNivel) {
      pushOnFilteredProjects(filterByNivel);
    }
    if (haveProjectsByThisTime) {
      pushOnFilteredProjects(filterByTime);
    }
    dispatch(addFilteredProjectsThunk(filteredsList));
  };

  const changeTextInputValue = (e) => {
    setSearchUser(e.target.value);
  };

  const handleFilterByName = () => {
    dispatch(filteredUsersThunk(searchUser));
    history.push("/profile/search");
  };

  return (
    <FilterProvider options={options} setOptions={setOptions}>
      <FiltersContent>
        <div className="checkBox-content">
          {optionsList.map((option, index) => (
            <div key={index} className="selects-content">
              <CheckBoxAtom
                check={options[option.value].length > 0 ? true : false}
                handleFilter={() =>
                  handleFilterBySelects(options[option.value], options)
                }
                selectValue={options[option.value]}
              />
              <Input
                onChange={option.setValue}
                value={options[option.value]}
                select="select"
                label={option.label}
                classe="inputSelect"
              >
                {option.options.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </Input>
            </div>
          ))}
        </div>
        <div className="searchInput-content">
          <Input
            label="Procure por um dev"
            variant="outlined"
            classe="inputSearch"
            onChange={changeTextInputValue}
          />
          <Buttom onClick={handleFilterByName} text="Buscar" />
        </div>
      </FiltersContent>
    </FilterProvider>
  );
};

export default Filters;
