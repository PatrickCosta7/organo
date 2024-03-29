import { useState } from 'react';
import { IColaborador } from './compartilhado/interfaces/IColaborador';
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

//Não é necessário importar React já que no tsconfig is set as react-jsx

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
      corSecundaria: '#EBF8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria : '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ] 

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    // debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png' />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time
       key={time.nome}
       name={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaria} 
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape />
      
    </div>
  );
}

export default App;
