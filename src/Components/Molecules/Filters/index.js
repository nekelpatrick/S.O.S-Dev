import { FiltersContent } from "./style";

import CheckBoxAtom from "../../Atoms/Check-Box"; 
import Input from "../../Atoms/Input";
import Buttom from "../../Atoms/Button";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilterProvider } from "./filterContext";

import { searchUser } from '../../../Redux/modules/Search-User/action'

// import { useHistory } from 'react-router-dom'
import addFilteredProjectsThunk from "../../../Redux/modules/filteredProjects/thunk";

const Filters = () => {
    // const state = useSelector((state) => state.searchUser) //-> estão sendo aplicados nas lógicas do redux
    // const history = useHistory()
    const dispatch = useDispatch() //=> estão sendo aplicados nas lógicas do redux
    const [options, setOptions] = useState({
        title: "",
        type: "",
        nivel: "",
        time: ""
    });
    const [projectName, setProjectName] = useState("");
    const projects = useSelector((state) => state.projects)
    const filteredProjects = useSelector((state) => state.filteredProjects);

    const changeTextInputValue = (e) => {
        setProjectName(e.target.value) 
        dispatch(searchUser(e.target.value)) 
        //troquei para uma sincronização do input com o redux para poder passar os dados do estado para o componente de exibição do perfil
    };

    const handleFilter = () => {
        // variáveis e funções auxiliáres
        const projecstList = [...projects];
        let filteredsList = []; //será dado push com os elementos filtrados e dispach no thunk no final

        const filterProjectsByProp = (propToFilter) => { //filtrar projeto pela prop do select ou inputText
            return projecstList.filter((project) => project[propToFilter] === options[propToFilter])
        };
        let filterByTitle = filterProjectsByProp("title");
        let haveProjectsByThisTitle = filterByTitle.length > 0 ? true : false;

        let filterByType = filterProjectsByProp("type");
        let haveProjectsByThisType = filterByType.length > 0 ? true : false;

        let filterByNivel = filterProjectsByProp("nivel");
        let haveProjectsByThisNivel = filterByNivel.length > 0 ? true : false;

        let filterByTime = filterProjectsByProp("time");
        let haveProjectsByThisTime = filterByTime.length > 0 ? true : false;

        let notSelectedFilterFound = haveProjectsByThisTitle && haveProjectsByThisType && haveProjectsByThisNivel && haveProjectsByThisTime
        ? false
        : true;

        let filterByProject = projecstList.filter((project) => project.title === projectName);
        let haveProjectByThisProjectName = filterByProject.length > 0 ? true : false;

        const filteredProjectsBy = (filterBy) => { //se encontrar pela prop faz push no array filteredsList
                pushOnFilteredProjects(filterBy, filteredsList);
        };
        const pushOnFilteredProjects = (filterBy, list) => { //faz push em filteredsList sem repetições
            filterBy.forEach((project) => {
                if ( !list.some((repeatedProject) => repeatedProject.id === project.id) ) {
                    list.push(project);
                }
            })
        };

        //push em filteredsList se encontrar projetos com os filtros de select ou inputText selecionados
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
            if (haveProjectByThisProjectName) {
                pushOnFilteredProjects(filterByProject, filteredsList)
            }
        }

        dispatch(addFilteredProjectsThunk(filteredsList));
        // history.push(`/profile/${user}`) //leva a render box para o componente que renderiza o perfil de outros usuários;
    };

    const optionsList = [ //array de selects para ser renderizado com map
        {setValue: (e) => {setOptions({...options, title: e.target.value})},
        options: ["React", "Python", "SQL", "JavaScript", "Java", "TypeScript", "C#", "C++", "C", "PHP", "Ruby", "Go"], label: "Tecnologias", value: "title"}, 
        {setValue: (e) => {setOptions({...options, type: e.target.value})}, 
        options: ["Programação Web", "Programação Mobile", "Programação Desktop", "Web Design", "Front-end", "Full-Stack"], label: "Área", value: "type"}, 
        {setValue: (e) => {setOptions({...options, nivel: e.target.value})}, 
        options: ["Iniciante", "Intermediário", "Avançado"], label: "Nivel", value: "nivel"}, 
        {setValue: (e) => {setOptions({...options, time: e.target.value})}, 
        options: ["3 a 7 dias", "8 a 15 dias", "+ de 15 dias"], label: "Tempo Estimado", value: "time"}
    ];

    console.log(filteredProjects)
    console.log("filters")
    console.log(projects)

    return (
        <FilterProvider options={options} setOptions={setOptions}>
            <FiltersContent>
                <div className="checkBox-content">
                    {optionsList.map((option, index) => (
                        <div key={index} className="selects-content">
                            <CheckBoxAtom 
                            check={options[option.value].length > 0 ? true : false} 
                            // handleFilter={handleFilter} 
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
                    <Buttom onClick={handleFilter} text="Buscar"/>
                </div>
            </FiltersContent>
        </FilterProvider>
    )
};

export default Filters;