<style lang="scss" >
  #app {
    padding: 5px;
    hr {
      border-width: 1px;
      border-color: #C7C7C7;
      border-style: solid;
      border-bottom: 0;
    }
    .group-item.v-link-active {
      background-color: #dcdfe1;
    }
  }
  .app-panel {
    width: 100%;
    margin-left: 15px;
    margin-right: 15px;
  }

</style>

<template>
  <div id="app" class="window-container">
    <div class="window-content">
      <ul class="group-col group-size-dd ak-group-default">
        <a class="group-item" v-for="route in routers"  v-link = "{path: route.path }" >{{route.title}}</a>
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
