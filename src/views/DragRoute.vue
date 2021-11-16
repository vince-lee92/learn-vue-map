<template>
  <div class="drag-route">
    <el-amap
        class="amap-box"
        :amap-manager="amapManager"
        :vid="'amap-vue'"
        :events="mapEvents"
        mapStyle="amap://styles/whitesmoke"
    >
      <div class="action">
        <el-button type="primary" @click="visible = true">查看JSON</el-button>
      </div>
    </el-amap>
    <el-dialog
        title="查看JSON"
        center
        :visible.sync="visible"
    >
      <json-viewer
          :value="routerData"
          :expand-depth="5"
          :copyable="copyable"
          sort
      />
    </el-dialog>
  </div>
</template>
<script>
const amapManager = new window.VueAMap.AMapManager();

export default {
  name: 'About',
  data() {
    const that = this
    return {
      routerData: [],
      visible: true,
      copyable: {copyText: '复制JSON', copiedText: '复制成功', timeout: 2000},
      amapManager,
      mapEvents: {
        complete() {
          that.DragRoute()
        },
        click(e) {
          const {lng, lat} = e.lnglat
          console.log(`你点击点的经纬度为：${lng},${lat}`)
          const str = `${lng}|${lat}`
          console.log(str)
        }
      },
    };
  },
  methods: {
    DragRoute() {
      const map = this.amapManager.getMap();
      const path = [];
      path.push([116.303843, 39.983412]);
      path.push([116.321354, 39.896436]);
      map.plugin("AMap.DragRoute", () => {
        const route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
        route.getRoute(function (type, target, data) {
          console.log(type, target, data)
        }); //查询导航路径并开启拖拽导航
        route.search(); //查询导航路径并开启拖拽导航
        route.on('complete', (arr) => {
          this.routerData = arr.target.La
        })
      });
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.drag-route {
  height: 100vh;
  position: relative;

}

.drag-route .action {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-dialog__body {
  height: 450px;
  overflow: auto;
}
</style>
