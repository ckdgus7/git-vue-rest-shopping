import loginGetters from './getters/login/index.js';
import boardGetters from './getters/board/index.js';
import shoppingGetters from './getters/shopping/index.js';
export default {...loginGetters, ...boardGetters, ...shoppingGetters};