import './CampoTexto.css'


//escopo lexico
const CampoTexto = (props) => {

    const placeholderMudado = `${props.placeholder}...`;
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    // console.log(props);
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderMudado}/>
        </div>
    )

}

export default CampoTexto;





// let valor = '';
// useState retorna dois valores, um setter outro getter...
// const [valor, setValor] = useState('')

// const aoDigitado = (evento) => {
//     setValor(evento.target.value);
//     console.log(valor);
// }







