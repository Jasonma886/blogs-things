<template>
  <div class="gf">
    <ul>
      <li v-for="(item, index) in infoList" :key="index">
        <span>{{item.feed.info.name}}</span>
        <span>{{item.feed.content}}</span>
        <!--<span>{{item.feed.price_detail.recent_volume}}</span>-->
      </li>
    </ul>
  </div>
</template>

<script>
import {getGFInfo} from '@/api/fetch'

export default {
  name: '',
  data () {
    return {
      infoList: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      getGFInfo({
        'header': {
          'hardwareVersion': 'pc',
          'softwareVersion': '6.4.0',
          'systemVersion': 'mac',
          'deviceType': 4,
          'deviceUUID': '1',
          'userUUID': '1'
        },
        'ids': [{'exchange': 105, 'code': '000651'}, {'exchange': 105, 'code': '000002'}, {
          'exchange': 105,
          'code': '002628'
        }, {'exchange': 101, 'code': '600718'}, {'exchange': 101, 'code': '600519'}, {
          'exchange': 105,
          'code': '000333'
        }, {'exchange': 101, 'code': '600036'}, {'exchange': 105, 'code': '000776'}, {
          'exchange': 101,
          'code': '000001'
        }, {'exchange': 105, 'code': '399001'}],
        'trade_logined': true
      }).then(res => {
        this.infoList = res.cfeeds
      })
    }
  }
}
</script>

<style lang="" scoped>

</style>
