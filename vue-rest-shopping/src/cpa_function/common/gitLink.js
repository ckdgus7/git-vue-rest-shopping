import { ref } from '@vue/composition-api';
export const getGitLink = () => ref(process.env.VUE_APP_GITHUB_URL).value;