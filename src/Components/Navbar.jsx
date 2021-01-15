/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from 'react-router-dom'

export default () => 
   
    <>
    
    <nav className="menu navbar navbar-expand-lg navbar-dark bg-primary"> 
    <Link className="navbar-brand" to="/"><img className="logo" src="./lgfull.png" alt="Full Stack Eletro"/></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
         <Link className="nav-link" to="/Produtos">Nossos Produtos <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
         <Link className="nav-link" to="/Pedidos">Faça seu Pedido <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
         <Link className="nav-link" to="/Lojas">Nossas Lojas <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
         <Link className="nav-link" to="/Faleconosco">Fale Conosco <span className="sr-only">(current)</span></Link>
       </li>                 
      </ul>
      <form className="form-inline my-2 my-lg-0 input-group-sm mb-2">
        <input className="form-control mr-sm-2" aria-describedby="inputGroup-sizing-sm" type="search" placeholder="Produtos..." aria-label="Search" />
        <button className="btn btn-outline-light my-2 my-sm-0 btn-sm" type="submit">Pesquisar</button>
      </form>      
    </div>
  </nav>

  </>
     