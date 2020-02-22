import loginState from './state/login/index.js';
import boardState from './state/board/index.js';
import shoppingState from './state/shopping/index.js';
export default {...loginState, ...boardState, ...shoppingState};