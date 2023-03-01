import fastify from "fastify"

const newApp = fastify()

newApp.get('/', () => 'Bienvenue sur mon serveur')

newApp.get('/hello', () => {
  console.log('Bonjour tout le monde !')

  return 'Bonjour tout le monde'
})

newApp.listen({ port: 4646, host: '127.0.0.1' }, () => {
  console.log('Mon serveur est prèt : http://127.0.0.1:4646')
})

newApp.get("/student", (request, response) => {

  response.header("Developed-With", "fastify");
  return [
    {
      id: "1",
      nom: "john",
      prenom: "john",
      age: "32",
    },
    {
      id: "2",
      nom: "john",
      prenom: "rose",
      age: "36",
    },
    {
      id: "3",
      nom: "john",
      prenom: "jane",
      age: "40",
    },
    {
      id: "4",
      nom: "john",
      prenom: "jean",
      age: "38",
    },
  ];
});

