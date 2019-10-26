<template>
    <div>
        <!-- Single button triggers two "<b-collapse>" components -->
        <b-button class="btn-navi" variant="danger" v-b-toggle.collapse-a.collapse-b><unicon name="sort-amount-down" fill="black"></unicon></b-button>
        <div id="inline">
        <!-- Elements to collapse -->
        <b-collapse id="collapse-a" class="ml-5">
            <router-link to="/randomizer" style="color: white">Randomizer</router-link>
        </b-collapse>
        <b-collapse id="collapse-b" class="ml-5">
            <router-link to="/history" style="color: white">History</router-link>
        </b-collapse>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
  #inline{
    display: inline-flex;
  }
  .btn-navi{
      border: none !important;
      outline: 0;
      background: rgba(255, 0, 3, 0.83);
  }
  .btn-navi:focus,.btn-navi:active{
      outline: none !important;
      box-shadow: none !important;
      border: none !important;
      background: rgba(255, 0, 3, 0.83);
  }
</style>