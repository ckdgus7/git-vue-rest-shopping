import { reactive, onMounted } from '@vue/composition-api';
import { Bar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;
export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['chart-data'],
  setup (props) {
    const chartData = reactive({
      options: {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              let value = data.datasets[0].data[tooltipItem.index];
              value = isNaN(value) ? parseInt(value) : value;
              if(parseInt(value) >= 1000){
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              } else {
                return value;
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
    });
    onMounted( function() {
      this.renderChart(props.chartData, chartData.options);
    });
  }
}