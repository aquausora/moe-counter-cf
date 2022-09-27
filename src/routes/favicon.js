import { genProxyResponse } from '../response';

/**
 * @param {Request} req
 * @param {FetchEvent} event
 */
export async function get(req, event) {
  return await genProxyResponse(
    req,
    event,
    'https://api.champhoon.xyz/favicon/favicon-count.ico'
  );
}
