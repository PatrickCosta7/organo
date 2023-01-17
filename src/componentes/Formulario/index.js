import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
            
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite aqui seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite aqui seu cargo"/>
            <CampoTexto label="Imagem" placeholder=""/>
            <CampoTexto label="Time" placeholder=""/>

            </form>
        </section>
    )
}

export default Formulario