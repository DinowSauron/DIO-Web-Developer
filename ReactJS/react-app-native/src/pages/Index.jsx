import React from "react"
import { Link } from "react-router-dom";
export default function Index() {

  return (
    <div style={{width: 'fit-content', margin: 'auto'}}>
      <h1>Index page</h1>
      <p>Escolha as aplicações de exemplo:</p>
      <ul>
        <li>
      <Link to="/Counter">Counter Com Redux</Link>
        </li>
        <li>
      <Link to="/Request">Requisições HTTP</Link>
        </li>
      </ul>
    </div>
  );
}
