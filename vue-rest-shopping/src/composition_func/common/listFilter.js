import { ref, watch } from '@vue/composition-api';
import lodash from 'lodash';
export const useListFilter = (listAction, payload, { refs }) => {
  const searchtext = ref('');
  const searchList = () => {
    searchtext.value = refs.searchtext.value;
  }
  watch( () => searchtext.value,
    lodash.debounce( 
      (kword) => {
        payload.kword = kword;
        listAction(payload);
      }, 
    200),
    { 
      lazy: true 
    }
  );

  return {
    searchList
  }
}