import { Routes, Route, Link } from "react-router-dom";
import Index from "./Index";
import Counter from "./Counter";
import Requester from "./Requester";
import { Header } from "../components/Header";



export default function Routers() {

  return (
    <div>
      {/* Você pdoe colocar coisas aqui, como um cabeçalho */}

      <Header/>

      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Counter" element={<Counter/>}/>
        <Route path="/Request" element={<Requester/>}/>
      </Routes>
    </div>
  )
}
// https://reactrouter.com/docs/en/v6/getting-started/installation