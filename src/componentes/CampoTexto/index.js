import './CampoTexto.css'


//escopo lexico
const CampoTexto = (props) => {

    const placeholderMudado = `${props.placeholder}...`;
    
    console.log(props);
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderMudado}/>
        </div>
    )

}

export default CampoTexto;