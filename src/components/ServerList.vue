<template>
  <div>
    <v-slide-y-transition mode="out-in">
      <v-list>
        <v-list-tile
          v-for="(item, i) in serverList"
          :key="i"
          @click=""
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="item.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.address"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-slide-y-transition>
  </div>
</template>

<script>
export default {
  name: 'ServerList',
  props: {
    msg: String
  },
  data () {
    return {
      serverList: [{
        name: 'Server 1',
        address: '127.0.0.1:11451',
        description: 'good morning'
      }, {
        name: 'Server 2',
        address: '127.0.0.1:11452',
        description: 'good morning'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
