import * as express from 'express';

class HealthController {
  path = '/';
  router = express.Router();

  constructor() {
    this.initializeRoutes();
    return this.router;
  }

  initializeRoutes() {
    this.router.get(this.path, this.getHealth);
  }

  getHealth = (request, response) => {
    return response.json({status: 'UP'});
  }
}

export default HealthController;
