import { Button } from "@material-ui/core";
import BotãoContent from "./styles"

const Botão = ({entrar, sair}) => {

    return (
        <>
        {entrar && (
            <BotãoContent entar >
                <Button>Entrar</Button>
            </BotãoContent>)
        }
        {sair && (
            <BotãoContent entar >
                <Button>Entrar</Button>
            </BotãoContent>)}
        </>
    )
};

export default Botão;