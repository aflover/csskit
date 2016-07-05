<style lang="scss" >
  #app {
    padding: 5px;
  }
  #app hr {
    border-width: 1px;
    border-color: #C7C7C7;
    border-style: solid;
    border-bottom: 0;
  }

  .app-panel {
    width: 100%;
    margin-left: 15px;
    margin-right: 15px;
  }

</style>

<template>
  <div id="app" class="ak-window">
    <div class="ak-window-content">
      <ul class="group-col group-size-dd group-outline-default">
        <li v-for="route in routers" class="group-item">
          <a v-link = "{path: route.path }" >{{route.title}}</a>
        </li>
      </ul>
      <div class="app-panel">
        <router-view></router-view>
      </div>
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
