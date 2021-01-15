import React from "react";
import Card from "../Components/Layout/Card";

import Contato from "../Components/Contato";
import "./../index.css";
import "./Geral.css";

const script = document.createElement("script");
script.src = "./static/js/script.js";
script.async = true;
script.document = document;
document.body.appendChild(script);

const Faleconosco = () => {
  const [comentario, setComentario] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [msg, setMsg] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:3001/comentarios";
      const response = await fetch(url);
      setComentario(await response.json());
    }
    fetchData();
  }, [render]);

  function newCommment(event) {
    event.preventDefault();
    const url = "http://localhost:3001/comentarios";

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
      <div ClassName="App">
        <header>
          <h2 className="header">Fale Conosco</h2>
        </header>
        <Contato />
      </div>

      <div className="container-fluid col-md-6 offset-md-3">
        <form
          className="form-group"
          action="/comentarios"
          onSubmit={newCommment}
          method="post"
        >
          <h1 className="efeito2">
            Envie suas dúvidas, sugestões ou reclamações:
          </h1>
          <br />
          <div className="form-group">
            <label for="texto">Nome</label>
            <input
              type="text"
              className="form-control"
              id="texto"
              name="nome"
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Email:</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Mensagem:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              name="msg"
              placeholder="Digite sua mensagem aqui... Vamos responder o mais breve possível!"
              rows="3"
            ></textarea>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary col-md-6 offset-md-3"
          >
            Enviar
          </button>
          <br />
          <br />
        </form>

        {msg && (
          <div className="alert alert-primary mx-auto mt-4 w-50" role="alert">
            Comentário efetuado com sucesso!
          </div>
        )}
      </div>
      {comentario.map((element) => {
        return (
          <div className="App">
            <Card color="#0F4D92" key={element.id} titulo={element.nome}>
              <p>
                {" "}
                <b>Data: </b>
                {element.data}
              </p>
              <p>
                <b>Email:</b> {element.email}{" "}
              </p>
              <p>
                <b>Comentário:</b> {element.msg}{" "}
              </p>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Faleconosco;
