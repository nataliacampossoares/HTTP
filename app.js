const express = require("express");
const app = express();

const port = 8086;

app.get("/feriados/:ano", (req, res) => {
  fetch(`https://brasilapi.com.br/api/feriados/v1/${req.params.ano}`)
    .then((response) => response.json())
    .then((feriado) => {
      res.send(`${feriado[3].name} e data ${feriado[3].date}`);
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} rsrsrssrsrsrsrsrs`);
});
