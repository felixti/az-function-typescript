import { Context, HttpRequest } from '@azure/functions'

async function process (context: Context, req: HttpRequest): Promise<void> {
  switch (true) {
    case req.method === 'GET':
      context.res = {
        status: 200,
        body: [{ id: 1, name: 'product 1' }, { id: 2, name: 'product 2' }]
      }
      break
    case req.method === 'POST':
      context.res = {
        status: 201,
        body: { id: 1, name: req.body.name }
      }
      break
    case req.method === 'PUT':
      break
    case req.method === 'PATCH':
      break
    case req.method === 'DELETE':
      break
    default:
      break
  }
}

export default process
