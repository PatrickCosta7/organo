import { Fragment } from 'react'
import './Banner.css'

export const Banner = () => {
    //JSX
    return (
        <>{/* Elemento <Fragment> - essa sintax é mais simples - pratica comum de react - agrupa as tags children e retorna somente elas, simplificando */}
            <header className='banner'>
                <img src="/imagens/banner.png" alt="Imagem Banner"/>
            </header>
            {/* <h1>Teste</h1> */}
        </>
    )
}

