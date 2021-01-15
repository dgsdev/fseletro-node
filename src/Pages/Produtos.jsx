/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import { Link } from 'react-router-dom'


import './../index.css';

const Produtos = () => {  

        const [produto, setProduto] = React.useState([])
    
        React.useEffect(() => {
            async function fetchData() {
                const url = "http://localhost:3001/produtos";
                const response = await fetch(url)
                setProduto(await response.json())
            } fetchData();
        }, [])

        const cat = produto.map(cat => {
            const container = {}
            container['id'] = cat.id_categorias
            container['name'] = cat.categoria
            return container
        }) 

        const categoriaFinal = cat.map(JSON.stringify)
        .reverse()
        .filter(function(item, index, arr){
            return arr.indexOf(item, index +1) === -1
        }).reverse()
        .map(JSON.parse)
    
        const destaque = (event) => {
            if (event.target.style.width === "280px") {
                event.target.style.width = "120px";
            }
            else {
                event.target.style.width = "280px";
            }
        }
//menu
/*      const upScaleMenu = (event) => {
          event.target.style.color="#0099cc";
      }
      
      const downScaleMenu = (event) => {
          event.target.style.color="#000";
      }
      const downScaleM = (event) => {
          event.target.style.color="#dc3545";
      }
      */
    
        const redimensiona = (event) => {
            if (event.target.style.width === "280px") {
                event.target.style.width = "286px";
            }
            else {
                event.target.style.width = "280x";
            }
        }
    
        let produt = document.getElementsByClassName('box_produto');
    
        const exibir = (event) => {
            let item = event.target.id;
            for (let i = 0; i < produt.length; i++) {
                if (item === produt[i].id) {
                    produt[i].style.display = "inline-block";
                } else {
                    produt[i].style.display = "none";
                }
            }
        }
    
        const exibirTodos = () => {
            for (let i = 0; i < produt.length; i++) {
                produt[i].style.display = "inline-block";
            }
        }

    return (
        <>
         <header className="header">
         <h2>Produtos</h2>
         </header>

         <nav className="navbar navbar-light navbar-expand-lg" style={{background: "#f8f9fa"}} >
         <span className="navbar-brand">Categorias</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <li className="nav-link font-weight-bold" onClick={exibirTodos}>Todos Produtos (12) </li>
      </li>

      {categoriaFinal.map(categoria => {
            return (
              <li className="nav-item active">
              <li className="nav-link font-weight-bold"  onClick={exibir}>{categoria.name} </li>
              </li>
                    )
      })}
      
      <li className="nav-item active">
        <Link className="nav-link font-weight-bold" to="/Pedidos">Faça seu Pedido </Link>
      </li>     
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle font-weight-bold" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Agendar Entregas
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item font-weight-bold" to="/Lojas">Lojas</Link>
        <Link className="dropdown-item font-weight-bold" to="/Faleconosco">Contato</Link>
        </div>
      </li>
      
    </ul>  
  </div>  
  </nav>  

  
  
  {produto.map(element => {
      return ( 
        
        <div className="box_produto card text-light bg-primary mx-3 align-top" style={{background: "#0099cc"}} id={element.id_categorias} style={{width: "18rem", align: "center"}}>  
        <img src={element.imagem} className="card-img-top" alt={""} style={{height: "250px"}} onMouseOver={destaque}
                                        onMouseOut={redimensiona} />
        <div className="card-body" style={{height: "120px"}}>
        <h5 className="card-title ">{element.descricao}</h5>    
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item text-dark"><strike>R$ {element.preco}</strike></li>
        <li className="list-group-item text-danger h3 mx-0"><strong>R$ {element.preco_venda}</strong></li>  
         </ul>                
  </div> 
  
      )
  })}

  
    </>
    );
}

export default Produtos;