
app.get("/", (req, res) => {
  res.send("Hello Express API! /GET -");
});

app.post("/", (req, res) => {
  res.send("Hello Express API! /POST");
});

/*ENVIO DE PARAMETROS*/

//1. Query params ... /hola?param1="juan"&
app.get("/saludar", (req, res) => {
  console.log(req);
  const nombre = req.query.nombre;
  res.send(`Hola ${nombre}`);
})

//2.body
app.post("/saludar", (req,res,next) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  res.send(`Hola ${nombre} tienes ${edad} años `);
})

//3.Params
app.put("/saludar/:nombre/:edad", (req, res, next) => {
  const nombre = req.params.nombre;
  const edad = req.params.edad;
  res.send(`Hola ${nombre} tienes ${edad} años (PUT)`);

});
