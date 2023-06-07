import server from './server'

const port = process.env.PORT || 3001

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
