import * as express from 'express';
import common from '../common/common';

class UserController {
  path = '/users';
  router = express.Router();

  constructor() {
    this.initializeRoutes();
    return this.router;
  }

  initializeRoutes() {
    this.router.post(this.path + '/find-by-username-or-email', this.findByUsernameOrEmail);
  }

  findByUsernameOrEmail = async (request, response) => {
    try {
      const usernameOrEmail = request.body.usernameOrEmail;
      let res = await common.dbClient.getLoginMethodsByUsernameOrEmail(usernameOrEmail);
      // if (user) {
        return response.json(res);
      // } else {
        // return response.json({ matched: false });
      // }
      // const report: Report = request.body;
      // const received: Message = MessageTemplateUtil.getShortEmailObj(report);
      // return response.json({status: 'success', data: {}});
    }
    catch (err) {
      console.error(err.stack);
      return response.status(500).send('Something broke!');
    }
  }
}

export default UserController;
