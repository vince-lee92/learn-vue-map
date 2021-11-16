import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAMap from 'vue-amap';
import JsonViewer from 'vue-json-viewer';

Vue.use(ElementUI);
Vue.use(JsonViewer)
Vue.use(VueAMap);

window.mapKey = "95fa72137f4263f8e64ae01f766ad09c"
window.mapPlugin = [
    "AMap.DragRoute",
]
window.mapVersion = "1.4.4"
VueAMap.initAMapApiLoader({
    key: window.mapKey,
    plugin: window.mapPlugin,
    v: window.mapVersion
});
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
