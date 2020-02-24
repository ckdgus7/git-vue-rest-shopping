import Vue from 'vue';
export const modalClose = (payload) => {
  Vue.$emit(payload.pdata, payload.evt);
}