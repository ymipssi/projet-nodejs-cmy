module.exports = (app) => {
  const moduleController = require('../controllers/moduleController');
  const jwtMiddleware = require('../middleware/jwtMiddleware');

 app.route('/modules/') // req.params.user_id
  .get(moduleController.get_all_modules)
  .post(moduleController.create_a_module);

 app.route('/modules/:module_id')
  // .all(jwtMiddleware.verify_token)
  .get(moduleController.get_a_module)
  .put(moduleController.update_a_module)
  .delete(moduleController.delete_a_module);
}
