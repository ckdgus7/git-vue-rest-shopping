<template>
  <div class="small">
    <div class="btn-wrap">
      <button @click="fillData('price')">상품 조회수별 인기제품</button> | 
      <button @click="fillData('month')">월 조회수별 인기제품</button>
    </div>
    <LineChart :chart-data="datacollection"></LineChart>
  </div>
</template>

<script>
import LineChart from '../components/chart/BarChart.js';
export default {
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData('price');
  },
  methods: {
    fillData (type) {
      if ( type === 'price') {
        this.datacollection = {
          labels: ['item1', 'item2', 'item3'],
          datasets: [
            {
              label: '상품 조회수별 인기제품',
              backgroundColor: '#f87979',
              data: [5, 8, 22]
            }
          ]
        }
      } else {
        this.datacollection = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: ['월 조회수별 인기제품'],
              backgroundColor: 'green',
              data: [51, 8, 22, 13, 35, 22, 55, 25, 46, 23, 16, 47]
            }
          ]
        }
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