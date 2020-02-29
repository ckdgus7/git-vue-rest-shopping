
export const useActionDetailData = (actions, route ,pageType) => {
  actions.DETAIL_BOARD[0]({
    bid: {
      bid: 1,
      wr_id: route.params.viewid
    },
    pageType
  })
  .then( () => {
  });
}