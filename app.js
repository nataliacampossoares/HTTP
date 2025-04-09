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

app.get("ibge/:siglaUF", (req, res) => {
  fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${req.params.siglaUF}?providers=dados-abertos-br,gov,wikipedia`)
  .then((response => response.json())
  .then((ibge) => {
    res.send(`${ibge[0]}`)
  }))
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} rsrsrssrsrsrsrsrs`);
});
