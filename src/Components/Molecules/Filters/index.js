import { FiltersContent } from "./style";

import CheckBoxAtom from "../../Atoms/Check-Box";
import Input from "../../Atoms/Input";
import Buttom from "../../Atoms/Button";

import { useState } from "react";

const Filters = () => {
    const [options, setOptions] = useState({
        techs: "",
        stack: "",
        nivel: "",
        time: ""
    });

    const optionsList = [
        {setValue: (e) => {setOptions({...options, techs: e.target.value})},
        options: ["React", "Python", "SQL"], label: "Tecnologias", value: "techs"}, 
        {setValue: (e) => {setOptions({...options, stack: e.target.value})}, 
        options: ["Front-End", "Back-End", "Full-Stack"], label: "Stack", value: "stack"}, 
        {setValue: (e) => {setOptions({...options, nivel: e.target.value})}, 
        options: ["Iniciante", "Intermediário", "Avançado"], label: "Nivel", value: "nivel"}, 
        {setValue: (e) => {setOptions({...options, time: e.target.value})}, 
        options: ["3 a 7 dias", "8 a 15 dias", "+ de 15 dias"], label: "Tempo Estimado", value: "time"}
    ];

    const changeTextInputValue = (e) => {
        //dps setar esse valor em um estado para fazer o filtro
        console.log("input value: " + e.target.value);
    };

    console.log(options)

    return (
        <FiltersContent>
            <div className="checkBox-content">
                {optionsList.map((option, index) => (
                    <div key={index} className="selects-content">
                        <CheckBoxAtom/>
                        <Input 
                        onChange={option.setValue} 
                        value={options[option.value]} 
                        select="select" label={option.label} 
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
                <Buttom text="Buscar"/>
            </div>
        </FiltersContent>
    )
};

export default Filters;