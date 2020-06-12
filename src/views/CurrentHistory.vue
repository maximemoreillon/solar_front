<template>
  <div class="home">
    <h1>Current</h1>

    <template v-if="dataCollection.loaded">

      <LineChart
        v-if="dataCollection.loaded"
        v-bind:data="dataCollection"/>

    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from '@/components/charts/LineChart.vue'

export default {
  name: 'CurrentHistory',
  components: {
    LineChart
  },
  data(){
    return {
      dataCollection: {
        loaded: false,
        labels: [], // filled by API call

        datasets: [
          {
            label: 'Current',
            data: [], // filled by API call
            borderColor: '#c00000',
            fill: true,
            backgroundColor: '#c0000000',
            pointRadius: 0,
            pointHitRadius: 3,
            pointHoverRadius: 3,
            borderWidth: 2,
          }
        ],
      }
    }
  },
  mounted(){
    this.dataCollection.loaded = false;
    this.axios.get(`${process.env.VUE_APP_SOLAR_API_URL}/current/history`)
    .then(response => {
      // Empty array
      this.dataCollection.labels.splice(0,this.dataCollection.labels.length)
      this.dataCollection.datasets[0].data.splice(0,this.dataCollection.datasets[0].data.length)
      // repopulate
      response.data.forEach(entry => {
        this.dataCollection.datasets[0].data.push(Number(entry.voltage))
        this.dataCollection.labels.push(new Date(entry.time))
      })

      this.dataCollection.loaded = true;

    })
    .catch(error => {console.log(error)})
  }
}
</script>
