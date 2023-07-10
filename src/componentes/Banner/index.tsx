import './Banner.css'
import React from 'react'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string       //quando há "?"", significa que o uso é opcional
}

export const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps ) => {
    return (
            <header className='banner'>
                {/* <img src="/imagens/banner.png" alt="Imagem Banner"/> */}
                <img src={enderecoImagem} alt={textoAlternativo} />
            </header>
    )
}

export default Banner;