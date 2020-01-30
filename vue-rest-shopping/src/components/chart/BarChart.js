import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['chart-data'],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: true,
      tooltips: {
        callbacks: {
              label: function(tooltipItem, data) {
                const value = data.datasets[0].data[tooltipItem.index];
                if(parseInt(value) >= 1000){
                  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원';
                } else {
                  return value + '원';
                }
              }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            userCallback: function(value) {
                value = value.toString();
                value = value.split(/(?=(?:...)*$)/);
                value = value.join(',');
                return value;
            }
          }
        }]
      }
    }
   }),
  mounted () {
    this.renderChart(this.chartData, this.options);
  }
}