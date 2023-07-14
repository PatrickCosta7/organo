import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Colaborador from '../Colaborador';
import './Time.css';

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    name: string 
    colaboradores: IColaborador[] //declaração de tipagem para objetos.
    
}

const Time = (props: TimeProps) => {
    const css = { backgroundColor: props.corSecundaria };

    return(
         (props.colaboradores.length > 0) ? <section className='time' style={css} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                    <Colaborador 
                        corDeFundo={props.corPrimaria} 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        imagem={colaborador.imagem} 
                        cargo={colaborador.cargo}
                    /> )}
            </div>
        </section>
        : ''
    )
}


export default Time;