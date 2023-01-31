import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria };

    return(
        <section className='time' style={css} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
            {props.colaboradores.map( colaborador => <Colaborador />)}
        </section>
    )
}


export default Time;