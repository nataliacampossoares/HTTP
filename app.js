const express = require("express");
const app = express();

const port = 8086;

app.get("/data/:ano", (req, res) => {
  fetch(`https://brasilapi.com.br/api/feriados/v1/${req.params.ano}`)
    .then((response) => response.json())
    .then((feriado) => {
      res.send(`${feriado}`);
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} rsrsrssrsrsrsrsrs`);
});
