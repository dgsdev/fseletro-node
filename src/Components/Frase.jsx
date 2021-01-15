/* eslint-disable import/no-anonymous-default-export */
import React from "react";

const script = document.createElement("script");
script.src = "./static/js/script.js";
script.async = true;
script.document = document;
document.body.appendChild(script);

export default () => (
  <>
    <div>
      <h1 className="efeito">
        Aqui em nossa loja, programadores tem desconto nos produtos para sua
        casa! 👨‍💻
      </h1>
    </div>
  </>
);


