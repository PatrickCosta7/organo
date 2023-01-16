import './CampoTexto.css'

//escopo lexico
const CampoTexto = () => {
    return (
        <div className="campo-texto">
            <label>Nome</label>
            <input placeholder='Digite aqui o seu nome'/>
        </div>
    )

}

export default CampoTexto;