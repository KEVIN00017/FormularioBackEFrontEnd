import { useState, useEffect } from 'react';
import axios from "axios";
import "./App.css";

const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

function App() {
  const [users, setUsers] = useState([]);
  const [newType, setNewType] = useState(''); // Correção: inicialize como string vazia
  const [newState, setNewState] = useState(''); // Correção: inicialize como string vazia

  useEffect(() => {
    api.get("/").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  function newUser() {
    api.post("/", {
        tipo: newType, // Deve ser 'tipo' em minúsculo, corresponde a req.body.tipo no backend
        estado: newState // Deve ser 'estado' em minúsculo, corresponde a req.body.estado no backend
    }).then((response) => {
        console.log(response);
    });
    
}
api.delete("/",{

}).then((response)=>{
  console.log(response)
})
  return (
    <body data-theme="dark" >
      <div className='container' >
        <h1 className='subtitle is-size-2'  ><strong className="has-text-primary-05">Produtos Adicionados:</strong>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}  className="has-text-primary-20">
                Tipo:{user.Tipo} - Estado:{user.Estado}
              </li>
            );
          })}
        </ul>
        <hr />
        </h1>
        <h2 className='title is-size-2'><strong className="has-text-primary-05">Produtos:</strong></h2>
        
        <input type="text"  placeholder='Camiseta,Calça,Sapato,etc..' onChange={(event) =>  setNewType(event.target.value)  } className='input' />
        <br />
       
        <input type="text" placeholder='ex:novo/usado' onChange={(event) =>  setNewState(event.target.value) } className='input' />
        <br />
        <button onClick={newUser} className='button'>Enviar</button>
      </div>
    </body>
  );
}

export default App;