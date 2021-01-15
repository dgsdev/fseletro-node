
import React from 'react'
import './../index.css';
import Card from '../Components/Layout/Card'
import Frase from './../Components/Frase'
import './Geral.css'

const Lojas = () => {
    return (
      <>      
<header>
    <h2 className="header">Nossas Lojas</h2>
</header>

<div className="App" style={{width:"34%"}}>
  <Card titulo="Rio de Janeiro" color="#0F4D92" >
    <h3>Av. Presidente Vargas, 5000</h3>
    <h3>Centro</h3>
     <h3>5° Andar</h3>
    <h3>(21) 3333-3333</h3>
  </Card>
    </div>
  <div className="App" style={{width:"33%"}}>
  <Card titulo="São Paulo" color="#0F4D92" >
    <h3>Avenida Paulista, 985</h3>
    <h3>Jardins</h3>
    <h3>15° Andar</h3>
    <h3>(11) 4444-4444</h3>
  </Card>
    </div>
  <div className="App" style={{width:"33%"}}>
  <Card titulo="Santa Catarina" color="#0F4D92" >
    <h3>Rua Major Ávila, 370</h3>
    <h3>Vila Mariana</h3>
    <h3>Centro</h3>
    <h3>(47) 5555-5555</h3>
  </Card>
  </div>

  <div className="App" style={{width:"100%"}}>
  <Card titulo="Compre pela internet e retire em nossas Lojas" color= "#343a40">
    <Frase />
  </Card>
  </div>
  
    </>
    );
}

export default Lojas;

