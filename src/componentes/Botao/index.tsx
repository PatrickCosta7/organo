import { ReactElement } from 'react';
import './Botao.css'

//todo componente deve estar em TSX e não ts

interface BotaoProps {
    children: ReactElement | string
}

const Botao = (props: BotaoProps) => {
    return(
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao;
