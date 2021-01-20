import { FiltersContent } from "./style";

import CheckBoxAtom from "../../Atoms/Check-Box";
import Input from "../../Atoms/Input";
import Buttom from "../../Atoms/Button";

import { useState } from "react";
import { FilterProvider } from "./filterContext";

import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../../Redux/modules/Search-User/action";

import { useHistory } from "react-router-dom";

const Filters = () => {
  const state = useSelector((state) => state.searchUser); //-> est]ao sendo aplicados nas lógicas do redux
  const history = useHistory();
  const dispatch = useDispatch(); //=> estão sendo aplicados nas lógicas do redux
  const [options, setOptions] = useState({
    techs: "",
    area: "",
    nivel: "",
    time: "",
  });
  const [projectOrCreatorName, setProjectOrCreatorName] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      projectName: "pokemon",
      creatorName: "edu",
      techs: "React",
      area: "Front-End",
      nivel: "Intermediário",
      time: "3 a 7 dias",
      id: "1",
    },
    {
      projectName: "rick morty",
      creatorName: "edu",
      techs: "React",
      area: "Front-End",
      nivel: "Intermediário",
      time: "3 a 7 dias",
      id: "2",
    },
    {
      projectName: "kenzie hub",
      creatorName: "jack chan",
      techs: "React",
      area: "Front-End",
      nivel: "Avançado",
      time: "3 a 7 dias",
      id: "3",
    },
    {
      projectName: "capstone",
      creatorName: "los hermanos",
      techs: "React",
      area: "Front-End",
      nivel: "Avançado",
      time: "8 a 15 dias",
      id: "4",
    },
    {
      projectName: "lig4",
      creatorName: "chaka nevers",
      techs: "javascript",
      area: "Front-End",
      nivel: "Iniciante",
      time: "3 a 7 dias",
      id: "5",
    },
    {
      projectName: "data base",
      creatorName: "zambers",
      techs: "Python",
      area: "Back-End",
      nivel: "Intermediário",
      time: "+ de 15 dias",
      id: "6",
    },
  ];

  const handleFilter = () => {
    // variáveis e funções auxiliáres
    /*const filterProjectsBy = (propToFilter) => {
            return projects.filter((project) => project[propToFilter] === options[propToFilter])
        };
        
        let filterByTechs = filterProjectsBy("techs");
        let haveProjectsByThisTech = filterByTechs.length > 0 ? true : false;

        let filterByArea = filterProjectsBy("area");
        let haveProjectsByThisArea = filterByArea.length > 0 ? true : false;

        let filterByNivel = filterProjectsBy("nivel");
        let haveProjectsByThisNivel = filterByNivel.length > 0 ? true : false;

        let filterByTime = filterProjectsBy("time");
        let haveProjectsByThisTime = filterByTime.length > 0 ? true : false;

        let notSelectedFilterFound = haveProjectsByThisTech && haveProjectsByThisArea && haveProjectsByThisNivel && haveProjectsByThisTime
        ? false
        : true;
        
        let filterByCreator = projects.filter((project) => project.creatorName === projectOrCreatorName);
        let haveProjectByThisCreatorName = filterByCreator.length > 0 ? true : false;

        let filterByProject = projects.filter((project) => project.projectName === projectOrCreatorName);
        let haveProjectByThisProjectName = filterByProject.length > 0 ? true : false;

        const filtereds = []

        const pushOnFilteredProjects = (filterBy) => {
            filterBy.forEach((project) => { //removendo repetidos
                filtereds.push(project)
            })
        };

        const filteredProjectsBy = (filterBy, notFoundMessage, notSelectedFilterFound) => {

            if (notSelectedFilterFound) {
                if (haveProjectByThisCreatorName) {
                    pushOnFilteredProjects(filterByCreator)
                } else if (haveProjectByThisProjectName) {
                    pushOnFilteredProjects(filterByProject)
                }
                else {
                    console.log(notFoundMessage);
                }
            }
            else {
                if (haveProjectByThisCreatorName) {
                    pushOnFilteredProjects(filterByCreator)
                } else if (haveProjectByThisProjectName) {
                    pushOnFilteredProjects(filterByProject);
                }
                else {
                    pushOnFilteredProjects(filterBy);
                }
            }
        };

        //push em filteredProjects se encontrar projetos com os filtros de select ou inputText selecionados
        if (haveProjectsByThisTech) {
            filteredProjectsBy(filterByTechs)

        } 
        if (haveProjectsByThisArea) {
            filteredProjectsBy(filterByArea)

        } 
        if (haveProjectsByThisNivel) {
            filteredProjectsBy(filterByNivel)

        } 
        if (haveProjectsByThisTime) {
            filteredProjectsBy(filterByTime)

        } 
        if (notSelectedFilterFound) {
            const parameterNotUserHere = "este parametro não está sendo usado"
            filteredProjectsBy(parameterNotUserHere, "nada encontrado", notSelectedFilterFound)
        }

        const notRepeatedProjects = [];
        filtereds.forEach((project) => {
            if ( !notRepeatedProjects.some((repeatedProject) => repeatedProject.id === project.id) ) {
                notRepeatedProjects.push(project)
            }
        })
        console.log(notRepeatedProjects)*/
    history.push(`/profile/${state}`); //leva a render box para o componente que renderiza o perfil de outros usuários;
  };

  const optionsList = [
    //array de selects para ser renderizado com map
    {
      setValue: (e) => {
        setOptions({ ...options, techs: e.target.value });
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
      value: "techs",
    },
    {
      setValue: (e) => {
        setOptions({ ...options, area: e.target.value });
      },
      options: [
        "Programação Web",
        "Programação Mobile",
        "Programação Desktop",
        "Web Design",
      ],
      label: "Área",
      value: "area",
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

  const changeTextInputValue = (e) => {
    //setProjectOrCreatorName(e.target.value);
    dispatch(searchUser(e.target.value)); //troquei para uma sincronização do input com o redux para poder passar os dados do estado para o componente de exibição do perfil
  };

  return (
    <FilterProvider options={options} setOptions={setOptions}>
      <FiltersContent>
        <div className="checkBox-content">
          {optionsList.map((option, index) => (
            <div key={index} className="selects-content">
              <CheckBoxAtom
                check={options[option.value].length > 0 ? true : false}
                handleFilter={handleFilter}
                selectValue={options[option.value]}
                projectsList={filteredProjects}
                setProjectsList={setFilteredProjects}
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
          <Buttom onClick={handleFilter} text="Buscar" />
        </div>
      </FiltersContent>
    </FilterProvider>
  );
};

export default Filters;
