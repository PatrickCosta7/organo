import { useState } from 'react';
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

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');


    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Submit formulário:", nome, cargo, imagem);
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
                obrigatorio={true}
                label="Nome"
                placeholder="Digite aqui seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />
            
            <CampoTexto 
                obrigatorio={true}
                label="Cargo"
                placeholder="Digite aqui seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
            />
            
            <CampoTexto 
                label="Imagem" 
                placeholder="Digite aqui o link da imagem desejada"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />

            <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
            <Botao>
                Criar card
            </Botao>

            </form>
        </section>
    )
}

export default Formulario