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

    const changeTechs = (e) => {
        setOptions({...options, techs: e.target.value})
    }
    const changeStack = (e) => {
        setOptions({...options, stack: e.target.value})
    }
    const changeNivel = (e) => {
        setOptions({...options, nivel: e.target.value})
    }
    const changeTime = (e) => {
        setOptions({...options, time: e.target.value})
    }

    const changeTextInputValue = (e) => {
        //dps setar esse valor em um estado para fazer o filtro
        console.log("input value" + e.target.value);
    }

    console.log(options)

    return (
        <FiltersContent>
            <div className="checkBox-content">
                <div className="selects-content">
                    <CheckBoxAtom/>
                    <Input onChange={changeTechs} value={options.techs} select="select" label="Tecnologias" classe="inputSelect">
                        <option>React</option>
                        <option>Python</option>
                        <option>SQL</option>
                    </Input>
                </div>
                <div className="selects-content">
                    <CheckBoxAtom/>
                    <Input onChange={changeStack} value={options.stack} select="select" label="Stack" classe="inputSelect">
                        <option>Front-End</option>
                        <option>Back-End</option>
                        <option>Full-Stack</option>
                    </Input>
                </div>
                <div className="selects-content">
                    <CheckBoxAtom/>
                    <Input onChange={changeNivel} value={options.nivel} select="select" label="Nível" classe="inputSelect">
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </Input>
                </div>
                <div className="selects-content">
                    <CheckBoxAtom/>
                    <Input onChange={changeTime} value={options.time} select="select" label="Tempo" classe="inputSelect">
                        <option>3 a 7 dias</option>
                        <option>8 a 15 dias</option>
                        <option>+ de 15 dias</option>
                    </Input>
                </div>
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