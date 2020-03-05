import { ref, watch } from '@vue/composition-api';
export const useListFilter = (listAction, payload, { refs }) => {
  const searchtext = ref('');
  const searchList = () => {
    searchtext.value = refs.searchtext.value;
  }
  watch(() => searchtext.value, (kword) => {
    setTimeout( () => {
      payload.kword = kword;
      listAction(payload);
    }, 200);
  });
  return {
    searchList
  }
}