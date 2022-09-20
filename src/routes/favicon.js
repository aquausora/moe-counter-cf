import { genProxyResponse } from '../response';

/**
 * @param {Request} req
 * @param {FetchEvent} event
 */
export async function get(req, event) {
  return await genProxyResponse(
    req,
    event,
    'https://count.champhoon.xyz/favicon.ico'
  );
}
