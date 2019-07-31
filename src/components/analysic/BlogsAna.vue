<template>
  <div id="main" style="width: 400px;height: 300px;"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: '',
  mounted () {
    setTimeout(() => {
      this.drawEcharts()
    }, 20)
  },
  methods: {
    drawEcharts () {
      let myEcharts = echarts.init(document.getElementById('main'))
      let option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myEcharts.setOption(option)
    }
  }
}
</script>

<style lang="" scoped>

</style>
