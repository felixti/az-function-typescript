import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import process from './routes'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.')

  await process(context, req)
}

export default httpTrigger
