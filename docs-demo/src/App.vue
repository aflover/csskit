<style lang="scss" >

  #app hr {
    border-width: 1px;
    border-color: #C7C7C7;
    border-style: solid;
    border-bottom: 0;
  }

  .app-panel {

    margin-left: 15px;
    margin-right: 15px;
  }

</style>

<template>
  <div id="app">
    <ul>
      <li v-for="route in routers">
        <a v-link = "{path: route.path }" >{{route.title}}</a>
      </li>
    </ul>
    <div class="app-panel">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import routers from './routers'

  export default {
    data : function () {
      return {
        routers: Object.keys(routers).map(function(path){
          return {
            path : path,
            title : routers[path].title || '',
          };
        })
      };
    }
  }
</script>
