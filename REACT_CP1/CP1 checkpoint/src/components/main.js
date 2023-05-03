// css principal aplicado ao site inteiro
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle `

`


export const MediaCep = styled.div `
@media (min-width: 768px) and (max-width: 1199px) {

.forms {
    right: 200px;
    font-size: 5px;
}   
};

@media (min-width: 481px) and (max-width: 768px) {

.centro {
    right: 100px;
}   
}

`