import { Request, Response } from 'express';

import CustomError from '../errors/custom.error';
import { logger } from '../utils/logger.utils';

/**
 * Exposed job endpoint.
 *
 * @param {Request} _request The express request
 * @param {Response} response The express response
 * @returns
 */
export const post = async (_request: Request, response: Response) => {
  try {
    // Get the Products
    const today = new Date();

    logger.info(`Job started at ${today.toLocaleString()}`);

    setTimeout(() => {
      logger.info(`Job running at ${today.toLocaleString()}`);
    }, 1000);

    setTimeout(() => {
      logger.info(`Job completed at ${today.toLocaleString()}`);
    }, 3000);

    response.status(200).send();
  } catch (error) {
    logger.info('Internal server error - logging.');

    throw new CustomError(500, `Internal Server Error - Error logging`);
  }
};
