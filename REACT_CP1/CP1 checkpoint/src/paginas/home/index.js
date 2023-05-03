import React from "react";
// import {ContainerPage} from '../../components/main'
import { HomePage } from "./styled";
import imgUm from "../../imgs/Homepage_img.jpg"
import  {HomeText}  from "./styled";



export default function Home() {
    return (
            <>
            <HomePage>
                
                <h1 className="tituloHome">Victor Shimada RM97187</h1>

                    <div className='imagemHome'> 
                        <img src={imgUm} alt="imagem" className='logo' width={600} />
                        </div>
        
            </HomePage>
            <HomeText>
            <h4 className="homeText"> Página feita por mim, com o propósito de conclusão do checkpoint proposto pelo professor Luiz Tadeu, da FIAP, afim de aprimorar meus conhecimentos em React, e também tendo mais um projeto para agregar positivamente ao meu portifólio</h4>
            </HomeText>
            </>
            )

}