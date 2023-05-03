import React from 'react';
import {AreaHeader} from './styled';
import {Link} from 'react-router-dom';
import imgLogo from "../../imgs/logo_react.jpg"

function Header() {
  return (
    <div>
      <AreaHeader>
      <div className='container'>
          <div className='logo'>
            

        <img src={imgLogo} alt="imagem" className='logo'/>
            
          </div>
          
        <nav>
          <ul>
            <li> <a href='/'> Home</a></li>
            <li><Link to='/cep'>Cep</Link> </li>
            <li><Link to='/sobre'>Contato</Link> </li>
          </ul>
        </nav>
      </div>
     
      </AreaHeader>
    </div>
  )
};
export default Header;