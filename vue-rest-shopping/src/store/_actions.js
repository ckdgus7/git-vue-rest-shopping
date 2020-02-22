import loginActions from './actions/login/index.js';
import boardActions from './actions/board/index.js';
import shoppingActions from './actions/shopping/index.js';
export default {...loginActions, ...boardActions, ...shoppingActions};