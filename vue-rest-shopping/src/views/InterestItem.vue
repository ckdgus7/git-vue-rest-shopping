<template>
  <div class="small">
    <div class="btn-wrap">
      <button @click="fillData('hit')">상품 조회수별 인기제품</button> | 
      <button @click="fillData('price')">월별 주문통계</button>
    </div>
    <LineChart :chart-data="GET_CHART_DATA"></LineChart>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LineChart from '../components/chart/BarChart.js';
export default {
  components: {
    LineChart
  },
  created () {
    this.FETCH_SHOP_HIT_ITEM();
  },
  computed: {
    ...mapGetters([
      'GET_CHART_DATA'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_SHOP_HIT_ITEM',
      'FETCH_SHOP_PRICE_ITEM'
    ]),
    fillData (type) {
      if ( type === 'hit') {
        this.FETCH_SHOP_HIT_ITEM();
      } else {
        this.FETCH_SHOP_PRICE_ITEM();
      }
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