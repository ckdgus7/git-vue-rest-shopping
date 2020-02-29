import { ref, onMounted } from '@vue/composition-api';
export const useInputFocus = () => {
  const focusinput = ref('');
  onMounted( () => {
    focusinput.value.focus();
  });
  return focusinput;
}