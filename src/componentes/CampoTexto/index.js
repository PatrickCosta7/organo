import { useState } from 'react'
import './CampoTexto.css'


//escopo lexico
const CampoTexto = (props) => {

    const placeholderMudado = `${props.placeholder}...`;
    
    // let valor = '';

    // useState retorna duas variáveis 
    const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        setValor(evento.target.value);
        console.log(valor);
    }

    // console.log(props);
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderMudado}/>
        </div>
    )

}

export default CampoTexto;