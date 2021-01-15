import React from "react";
import Card from "../Components/Layout/Card";
import "./../index.css";
import "./Geral.css";

const script = document.createElement("script");
script.src = "./static/js/script.js";
script.async = true;
script.document = document;
document.body.appendChild(script);

const Pedidos = () => {
  const [comentario, setComentario] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [msg, setMsg] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:3001/pedidos";
      const response = await fetch(url);
      setComentario(await response.json());
    }
    fetchData();
  }, [render]);

  function newOrder(event) {
    event.preventDefault();
    const url = "http://localhost:3001/pedidos";

    fetch(url, {
      method: "POST",
      body: new FormData(event.target),
    })
      .then((response) => response.json())
      .then((dados) => {
        setRender(!render);
        setMsg(dados);
        setTimeout(() => {
          setMsg(false);
        }, 3000);
      });
  }

  return (
    <>
      <header>
        <h2 className="header">Pedidos</h2>
      </header>

      <div className="container-fluid col-md-6 offset-md-3">
        <form
          className="form-group"
          action="/pedidos"
          onSubmit={newOrder}
          method="post"
        >
          <h1 className="efeito2">Faça seu Pedido e Aproveite Promoções:</h1>
          <br />
          <div className="form-group">
            <label for="cliente">Cliente:</label>
            <input
              className="form-control"
              name="cliente"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label for="end">Endereço:</label>

            <input className="form-control" name="end" type="text" required />
          </div>
          <div className="form-group">
            <label for="tel">Telefone:</label>

            <input
              className="form-control"
              type="tel"
              name="tel"
              placeholder=" Formato: 00-00000-0000"
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              required
            />
          </div>

          <div className="form-group">
            <label for="produtos">Produto</label>

            <select className="form-control" id="produtos" name="prod">
              <option>Geladeira Frost Free Brastemp Side Inverse 540L</option>
              <option>Geladeira Frost Free Brastemp Branca 375 Litros</option>
              <option>Geladeira Frost Free Consul Prata 340 Litros</option>
              <option>Fogão 4 Bocas Consul Inox com Mesa de Vidro</option>
              <option>
                Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático
              </option>
              <option>Micro-ondas Consul 32 Litros inox</option>
              <option>Microondas 25L Espelhado Philco</option>
              <option>Forno de Microondas Eletrolux 20L</option>
              <option>
                Lavadoura de Roupas Brastemp 11KG com Turbo Performance Branca
              </option>
              <option>Lavadoura de Roupas</option>
              <option>
                Lava-louça Eletrolux Inox com 10 serviços, 06 Programas de
                Lavagem e Painel Blue Touch
              </option>
              <option>Lava Louça Compacta, 8 Serviços Branca 127V</option>
            </select>
          </div>
          <div className="form-group">
            <label for="preco">Preço:</label>

            <input
              className="form-control"
              type="number"
              id="preco"
              name="preco"
              required
            />
          </div>
          <div className="form-group">
            <label for="qtd">Quantidade:</label>

            <input
              className="form-control"
              type="number"
              id="qtd"
              name="qtd"
              required
            />
          </div>
          <div className="form-group">
            <label for="total">Valor Total:</label>

            <input
              className="form-control"
              type="number"
              id="total"
              name="total"
              required
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary col-md-6 offset-md-3"
            name="submit"
          >
            Enviar
          </button>
          <br />
          <br />
        </form>
        {msg && (
          <div className="alert alert-primary mx-auto mt-4 w-50" role="alert">
            Pedido efetuado com sucesso!
          </div>
        )}
      </div>
      {comentario.map((element) => {
        return (
          <div className="App">
            <Card color="#0F4D92" key={element.id} titulo={element.cliente}>
              <p>
                {" "}
                <b>Data: </b>
                {element.dia}
              </p>
              <p>
                <b>Endereço:</b> {element.endereco}{" "}
              </p>
              <p>
                <b>Telefone:</b> {element.telefone}{" "}
              </p>
              <p>
                <b>Produto:</b> {element.produto}{" "}
              </p>
              <p>
                <b>Preço:</b> {element.preco}{" "}
              </p>
              <p>
                <b>Quantidade:</b> {element.quantidade}{" "}
              </p>
              <p>
                <b>Valor Total:</b> {element.preco_total}{" "}
              </p>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Pedidos;
