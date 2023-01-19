import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Submit click");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite aqui seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite aqui seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite aqui o link da imagem desejada"/>
            <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
            <Botao>
                Criar card
            </Botao>

            </form>
        </section>
    )
}

export default Formulario