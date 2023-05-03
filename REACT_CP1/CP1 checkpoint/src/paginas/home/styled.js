import styled from "styled-components";


export const HomePage = styled.div `

@media (min-width: 1200px) {


    .tituloHome{
    align-items: center;
    padding-left: 35%;
    padding-bottom: 20px;
}

.imagemHome{
    align-items: center;
    padding-left: 27%;
    padding-bottom: 20px;

}

.homeText{
    align-items:center;
}

}


@media (min-width: 769px) and (max-width: 1199px) {

    .tituloHome{
    padding-left: 29%;
    padding-bottom: 20px;
}

.imagemHome{
    align-items: center;
    padding-left: 18%;
    padding-bottom: 20px;

}
}

@media (min-width: 480px) and (max-width: 768px) {

    .tituloHome{
    padding-left: 20%;
    padding-bottom: 20px;
}

.imagemHome{
    align-items: center;
    padding-left: 0%;
    padding-bottom: 20px;

}
}
`
   

export const HomeText = styled.div `
    padding-left: 20%;
    padding-right: 20%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    align-items: flex-start;
    color: #4191e1;;

`
