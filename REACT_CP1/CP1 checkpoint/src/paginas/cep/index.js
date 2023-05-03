import React, { useState } from "react";
// import {ContainerPage} from '../../components/main'
import apiCEP from "../../services/apiCEP";
import { MediaCep } from "../cep/styled"
export default function Cep() {
  const [cepData, setCepData] = useState({});

  const handleCepSearch = async (e) => {
    e.preventDefault();
    const cep = e.target.elements.cep.value.replace(/\D/g, "");
    const response = await apiCEP.get(`/${cep}/json/`);
    setCepData(response.data);
  };

  return (
    <MediaCep>
    {/* <ContainerPage> */}
    <div className="centro">
      <h1 className="title">Pesquisar Cep</h1>
      <form onSubmit={handleCepSearch}>
        <input type="text" autocomplete="off" name="cep" class="input" placeholder="digite um cep"></input>
        <button className="botao1" type="submit">Pesquisar</button>
      </form>
      {cepData.cep && (
        <div className="div-text">
          <p><strong>CEP:</strong> {cepData.cep}</p>
          <p><strong>Logradouro:</strong> {cepData.logradouro}</p>
          <p><strong>Bairro:</strong> {cepData.bairro}</p>
          <p><strong>Cidade:</strong> {cepData.localidade}</p>
          <p><strong>Estado:</strong> {cepData.uf}</p>
        </div>
      )}
      
    </div>
    {/* </ContainerPage> */}
    </MediaCep>
  );
}
