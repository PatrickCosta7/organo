import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria };

    return(
        <section className='time' style={css} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} imagem={colaborador.imagem} cargo={colaborador.cargo}/>)}
            </div>
        </section>
    )
}


export default Time;