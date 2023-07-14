import { useState } from 'react';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
}

const Formulario = (props: FormularioProps) => {
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    const aoSalvar = (evento: React.FormEventHandler<HTMLFormElement>) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome, //== nome: nome 
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={evento => aoSalvar}>
            
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

            <ListaSuspensa 
                obrigatorio={true}
                label="Time"
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao>
                Criar card
            </Botao>

            </form>
        </section>
    )
}

export default Formulario