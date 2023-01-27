import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação' ,
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: 'EBF8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: 'A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: 'E06869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: 'DB6EBF',
      corSecundaria : '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: 'FFBA05',
      corSecundaria: '#FFFSD9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: 'FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ] 

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time name="Progamação" />
      <Time name="Front-end" />
      <Time name="Data Science" />

    </div>
  );
}

export default App;
