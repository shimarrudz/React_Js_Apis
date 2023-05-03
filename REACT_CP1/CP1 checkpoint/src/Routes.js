import React from "react";
import  {Switch, Route} from 'react-router-dom';
import Sobre from './paginas/sobre';
import Cep from "./paginas/cep";
import Home from "./paginas/home";

export default function Routes(){
    return(
        <Switch>
              <Route exact path='/'>
                    <Home></Home>
               </Route> 

            <Route exact path='/sobre'>
                    <Sobre></Sobre>
            </Route> 

            
            <Route exact path='/cep'>
                    <Cep></Cep>
             </Route> 
        </Switch>

    )
}