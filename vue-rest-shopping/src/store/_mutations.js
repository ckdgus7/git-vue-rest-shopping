import loginMutations from './mutations/login/index.js';
import boardMutations from './mutations/board/index.js';
import shoppingMutations from './mutations/shopping/index.js';
export default {...loginMutations, ...boardMutations, ...shoppingMutations};