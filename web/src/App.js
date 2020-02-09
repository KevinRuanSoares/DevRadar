import React, { useEffect, useState } from 'react';
import api from "./services/api";
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import { MdAndroid } from "react-icons/md";
import DevForm from "./components/DevForm";
import DevItem from "./components/DevItem";

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data){
      const response = await api.post("/devs",data);
      setDevs([...devs,response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map( dev => (
            <DevItem key={dev._id} dev={dev} />
            ))}
        </ul>
      </main>
      <footer>
        <a href="" target="_blank">
          <MdAndroid size={54} color="#7d40e7"/> 
        </a>
      </footer>
    </div>
  );
}

export default App;
