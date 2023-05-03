import React from "react";
import{ MediaContato } from "../../paginas/sobre/styled";
export default function Sobre() {
  return (
    <>
      <MediaContato>
        <p className="title-forms">Contate-nos</p>
        <div className="forms">
            <label htmlFor="nome"></label>
            <input type="text" id="name" name="nome" placeholder="Digite seu nome" /><br /><br />
            <label htmlFor="email"></label>
            <input type="email" id="name" name="email" placeholder="Digite seu email" /><br /><br />
            <label htmlFor="mensagem"></label>
            <input type="text" id="mensagem" name="mensagem"  placeholder="Digite sua mensagem"/><br /><br />
            <button className="botao-contato"><span class="text">ENVIAR</span></button>
        </div>
        </MediaContato>
    </>
  );
}
