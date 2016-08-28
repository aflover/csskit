<style lang="scss" >
  #app {
    padding: 5px;
    hr {
      border-width: 1px;
      border-color: #C7C7C7;
      border-style: solid;
      border-bottom: 0;
    }
    .app-nav-group a {
      color: inherit;
      text-decoration: none;
      min-width: 150px;
    }
    .app-nav-group .group-item.router-link-active {
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
      <ul class="group-col group-size-dd app-nav-group ak-group-default">
        <router-link  v-for="route in routers" class="group-item" :to="{ path: route.path }">{{route.title}}</router-link>
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
