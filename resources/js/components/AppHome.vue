<template>
    <div>
        <toolbar/>
        <transition name="slide" mode="out-in">
        <router-view></router-view>
        </transition>
        <app-footer/>
    </div>
</template>

<script>
    import Toolbar from "./Toolbar";
    import AppFooter from "./AppFooter";
    
    export default {
        components: {
            Toolbar,
            AppFooter,
        }
    }
</script>

<style scoped>
.slide-enter-active,
  .slide-leave-active{
    transition: opacity .5s, transform .5s;
  }

  .slide-enter,
  .slide-leave-to{
    opacity: 0;
    transform: translate(10%);
  }
</style>