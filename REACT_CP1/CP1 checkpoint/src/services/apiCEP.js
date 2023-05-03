import axios from "axios";


//https://viacep.com.br/ws/02633000/json/

const apiCEP = axios.create(
    {baseURL:"https://viacep.com.br/ws/"
}
);

export default apiCEP;