import styled from 'styled-components';

export const AreaHeader = styled.div `

@media (min-width: 1200px) {

nav{
    padding-right: 50px;
}

.texto {
    width: 48%;
    margin-bottom: 20px;
}
}

/* Estilos para telas pequenas */

@media (max-width: 768px) and (max-width: 1199px) {
.navbar {
    width: 100%;
}
}
    .container{
        padding: 5px 25px;
        display: flex;
        align-items: center;
    }
        .logo{
            flex: 2;
            height: 60px;
            border-radius: 10px;
        }
        nav{
            text-decoration: none;
            ul{
                display: flex;
            }
                li{
                    list-style: none;
                    margin-left: 20px;
                }
                a{
                    text-decoration: none; 
                    padding: 20px;
                    font-size: 20px;
                    color: #4191e1;
      }
                           }



    
`