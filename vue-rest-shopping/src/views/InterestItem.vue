<template>
  <div class="small">
    <div class="btn-wrap">
      <button @click="fillData('hit')">상품 조회수별 인기제품</button> | 
      <button @click="fillData('price')">월별 주문통계</button>
    </div>
    <BarChart :chart-data="GET_CHART_DATA"></BarChart>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';
import { injectStore }  from '../composition_func/common/storeProvider.js';
import BarChart from '../components/chart/BarChart.js';
export default {
  components: {
    BarChart
  },
  setup () {
    const { getters, actions } = injectStore();
    const GET_CHART_DATA = computed( () => getters.GET_CHART_DATA);
    const fillData = (type) => {
      if ( type === 'hit') {
        actions.FETCH_SHOP_HIT_ITEM[0]();
      } else {
        actions.FETCH_SHOP_PRICE_ITEM[0]();
      }
    }
    
    actions.FETCH_SHOP_HIT_ITEM[0]();

    return {
      GET_CHART_DATA,
      fillData
    }
  }
}
</script>

<style>
  .small {
    max-width: 700px;
    margin:  10px auto;
  }
  .btn-wrap {
    margin-top:  30px;
    margin-left:  30px;
    margin-bottom:  30px;
  }
  .btn-wrap button {
    width: 200px;
    height: 30px;
  }
</style>