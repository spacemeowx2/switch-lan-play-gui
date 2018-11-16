import Vue from 'vue'
import Vuetify from 'vuetify'
// @ts-ignore
import zhHans from 'vuetify/es5/locale/zh-Hans'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'md',
  locales: {
    'zh-Hans': zhHans
  },
  current: 'zh-Hans'
})
