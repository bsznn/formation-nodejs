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

