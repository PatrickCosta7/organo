import './CampoTexto.css'


interface CampoTextoProps {
    aoAlterado: (valor: string) => void //recebe um parametro string, retorna void(nada)
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number' // posso colocar diferentes tipos
}

//escopo lexico
const CampoTexto = ({ aoAlterado, placeholder, label, valor, obrigatorio = false, tipo = 'text'  } : CampoTextoProps) => { // = define o valor padrão, mas pode ser sobrescrito

    const placeholderMudado = `${placeholder}...`;
    
    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    // console.log(props);
    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderMudado}
                type={tipo}
            />
        </div>
    )

}

export default CampoTexto;





// let valor = '';
// useState retorna dois valores, um setter outro getter...
// const [valor, setValor] = useState('')

// const aoDigitado = (evento) => {
//     setValor(evento.target.value);
//     console.log(valor);
// }
