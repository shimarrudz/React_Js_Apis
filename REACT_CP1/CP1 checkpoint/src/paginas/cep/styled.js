import styled from "styled-components";

export const MediaCep = styled.div`

.centro{
    position: absolute;
    right: 390px;
    top: 180px;
    height: 400px;
    width: 700px;
    background-color: aliceblue;
    border-radius: 15px;
    background-color: aquamarine;
}      
.title{
    color: rgb(0, 0, 0);
    position: absolute;
    right: 250px;
    font-size: 27px;
    top: -10px;
}

.div-text{
    position: absolute;
    top: 120px;
    right: 380px;
}
.input {
    position: absolute;
    top: 70px;
    right: 450px;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 1em;
    background-color: #ffffff;
    transition: 300ms ease-in-out;
  }
  

  
button {
    min-height: 45px;
    min-width: 130px;
    right: 90px;
    cursor: pointer;
    background: rgb(115, 196, 250);
    color: white;
    font-size: 20px;
    font-weight: 600;
  }

  
  .botao1{
    position: absolute;
    top: 75px;
    right: 70px;
  }

@media (max-width: 1200px) {

    .centro{
    right: 300px;
    top: 180px;
    height: 400px;
    width: 700px;
    border-radius: 15px;
    background-color: aquamarine;
}      
.title{
    color: rgb(0, 0, 0);
    right: 250px;
    font-size: 27px;
    top: -10px;
}

.div-text{
    top: 120px;
    right: 380px;
}
.input {
    top: 70px;
    right: 450px;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 1em;
    background-color: #ffffff;
    transition: 300ms ease-in-out;
  }

nav{
    padding-right: 50px;
}



@media (min-width: 769px) and (max-width: 1199px) {

.centro{
    right: 130px;
    top: 180px;
    height: 400px;
    width: 700px;
    border-radius: 15px;
    background-color: aquamarine;
}      
.title{
    color: rgb(0, 0, 0);
    position: absolute;
    right: 250px;
    font-size: 27px;
    top: -10px;
}

.div-text{
    position: absolute;
    top: 120px;
    right: 380px;
}
.input {
    position: absolute;
    top: 70px;
    right: 450px;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 1em;
    background-color: #ffffff;
    transition: 300ms ease-in-out;
  }
}

@media (min-width: 480px) and (max-width: 768px) {


    .centro{
    right: 130px;
    top: 180px;
    height: 380px;
    width: 400px;
    border-radius: 15px;
    background-color: aquamarine;
}      
.title{
    color: rgb(0, 0, 0);
    right: 160px;
    font-size: 15px;
    top: -10px;
}

.div-text{
    top: 120px;
    right: 80px;
}
.input {
    position: absolute;
    top: 30px;
    right: 200px;
    border-radius: 2px;
    padding: 1em;
    background-color: #ffffff;
  }

  button {
    min-height: 30px;
    min-width: 90px;
    right: 90px;
    cursor: pointer;
    background: rgb(115, 196, 250);
    color: white;
    font-size: 10px;
    font-weight: 600;
  }

  
  .botao1{
    position: absolute;
    top: 35px;
    right: 30px;
  }
}
} `