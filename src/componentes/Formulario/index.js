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


    return (
        <section className="formulario">
            <form>
            
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite aqui seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite aqui seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite aqui o link da imagem desejada"/>
            <ListaSuspensa label="Time" itens={times} />
            <Botao>
                Criar card
            </Botao>

            </form>
        </section>
    )
}

export default Formulario