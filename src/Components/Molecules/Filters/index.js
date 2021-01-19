import { FiltersContent } from "./style";

// import CheckBoxAtom from "../../Atoms/Check-Box";
import Input from "../../Atoms/Input";
import Buttom from "../../Atoms/Button";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilterProvider } from "./filterContext";
import { addProjectsThunk } from "../../../Redux/modules/projects/thunk";

const Filters = () => {
    const [options, setOptions] = useState({
        title: "",
        type: "",
        nivel: "",
        time: ""
    });
    const [projectName, setProjectName] = useState("");
    const projects = useSelector((state) => state.projects);
    const dispatch = useDispatch();

    const optionsList = [ //array de selects para ser renderizado com map
        {setValue: (e) => {setOptions({...options, title: e.target.value})},
        options: ["React", "Python", "SQL", "JavaScript", "Java", "TypeScript", "C#", "C++", "C", "PHP", "Ruby", "Go"], label: "Tecnologias", value: "title"}, 
        {setValue: (e) => {setOptions({...options, type: e.target.value})}, 
        options: ["Programação Web", "Programação Mobile", "Programação Desktop", "Web Design", "Front-end"], label: "Área", value: "type"}, 
        {setValue: (e) => {setOptions({...options, nivel: e.target.value})}, 
        options: ["Iniciante", "Intermediário", "Avançado"], label: "Nivel", value: "nivel"}, 
        {setValue: (e) => {setOptions({...options, time: e.target.value})}, 
        options: ["3 a 7 dias", "8 a 15 dias", "+ de 15 dias"], label: "Tempo Estimado", value: "time"}
    ];

    const changeTextInputValue = (e) => {
        setProjectName(e.target.value);
    };

    const filterProjectsBy = (propToFilter) => {
        return projects.filter((project) => project[propToFilter] === options[propToFilter])
    };

    const pushOnFilteredProjects = (filterBy, list) => {
        filterBy.forEach((project) => {
            if ( !list.some((repeatedProject) => repeatedProject.id === project.id) ) {
                list.push(project);
            }
        })
    };

    const handleFilter = () => {
        // variáveis e funções auxiliáres
        const filtereds = []

        let filterByTitle = filterProjectsBy("title");
        let haveProjectsByThisTitle = filterByTitle.length > 0 ? true : false;

        let filterByType = filterProjectsBy("type");
        let haveProjectsByThisType = filterByType.length > 0 ? true : false;

        let filterByNivel = filterProjectsBy("nivel");
        let haveProjectsByThisNivel = filterByNivel.length > 0 ? true : false;

        let filterByTime = filterProjectsBy("time");
        let haveProjectsByThisTime = filterByTime.length > 0 ? true : false;

        let notSelectedFilterFound = haveProjectsByThisTitle && haveProjectsByThisType && haveProjectsByThisNivel && haveProjectsByThisTime
        ? false
        : true;

        let filterByProject = projects.filter((project) => project.title === projectName);
        let haveProjectByThisProjectName = filterByProject.length > 0 ? true : false;

        const filteredProjectsBy = (filterBy, notSelectedFilterFound) => {

            if (notSelectedFilterFound) {
                if (haveProjectByThisProjectName) {
                    pushOnFilteredProjects(filterByProject, filtereds)
                }
                else {
                    return
                }
            }
            else {
                pushOnFilteredProjects(filterBy, filtereds);
            }
        };

        //push em filteredProjects se encontrar projetos com os filtros de select ou inputText selecionados
        if (haveProjectsByThisTitle) {
            filteredProjectsBy(filterByTitle)
        } 
        if (haveProjectsByThisType) {
            filteredProjectsBy(filterByType)

        } 
        if (haveProjectsByThisNivel) {
            filteredProjectsBy(filterByNivel)

        } 
        if (haveProjectsByThisTime) {
            filteredProjectsBy(filterByTime)

        } 
        if (notSelectedFilterFound) {
            const parameterNotUserHere = "este parametro não está sendo usado"
            filteredProjectsBy(parameterNotUserHere, notSelectedFilterFound)
        }

        dispatch(addProjectsThunk(filtereds))
    };

    console.log(projects)

    return (
        <FilterProvider options={options} setOptions={setOptions}>
            <FiltersContent>
                <div className="checkBox-content">
                    {optionsList.map((option, index) => (
                        <div key={index} className="selects-content">
                            {/* <CheckBoxAtom 
                            check={options[option.value].length > 0 ? true : false} 
                            handleFilter={handleFilter} 
                            selectValue={options[option.value]}
                            /> */}
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
                        label="Procure pelo nome do projeto ou criador" 
                        variant="outlined" 
                        classe="inputSearch"
                        onChange={changeTextInputValue}
                    />
                    <Buttom onClick={handleFilter} text="Buscar"/>
                </div>
            </FiltersContent>
        </FilterProvider>
    )
};

export default Filters;