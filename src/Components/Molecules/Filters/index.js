import { FiltersContent, Label } from "./style";

import CheckBoxAtom from "../../Atoms/Check-Box";
import Input from "../../Atoms/Input";
import Buttom from "../../Atoms/Button";


const Filters = () => {

    const tecnoligias = [{value: "tecnoligias", item:"React"}, {value: "tecnoligias", item:"Python"}, {value: "tecnoligias", item:"MySQL"}]
    const stacks = [{value: "stacks", item:"Front-End"}, {value: "stacks", item:"Back-End"}, {value: "stacks", item:"Full-Stack"}]
    const nivel = [{value: "nivel", item:"Iniciante"}, {value: "nivel", item:"Intermediário"}, {value: "nivel", item:"Avançado"}]
    const tempo = [{value: "tempo", item: "1 a 2 sprints"}, {value: "tempo", item: "2 a 3 sprints"}, {value: "tempo", item: "+3 sprints"}]

    const changeInputValue = (e) => {
        //dps setar esse valor em um estado para fazer o filtro
        console.log("input value" + e.target.value);
    }

    return (
        <FiltersContent>
            <div className="checkBox-content">
                <div className="selects-content">
                    <CheckBoxAtom/>
                    <Label>Tecnologias</Label>
                    <Input select="select">{tecnoligias}</Input>
                </div>
                <div className="selects-content">
                    <CheckBoxAtom/>
                    <Label>Stack</Label>
                    <Input select="select">{stacks}</Input>
                </div>
                <div className="selects-content">
                    <CheckBoxAtom/>
                    <Label>Nível técnico</Label>
                    <Input select="select">{nivel}</Input>
                </div>
                <div className="selects-content">
                    <CheckBoxAtom/>
                    <Label>Tempo estimado</Label>
                    <Input select="select">{tempo}</Input>
                </div>
            </div>
            <div className="searchInput-content">
                <Input 
                    label="Procure pelo nome do projeto ou criador" 
                    variant="outlined" 
                    classe="inputSearch"
                    onChange={changeInputValue}
                />
                <Buttom text="Buscar"/>
            </div>
        </FiltersContent>
    )
}

export default Filters;