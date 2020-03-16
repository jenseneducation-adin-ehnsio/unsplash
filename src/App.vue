<template>
  <div id="app" v-bind:class="{ dark: darkActive }">
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    darkActive() {
      return this.$store.state.darkActive
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  box-sizing: border-box;
  padding: 20px 50px;
  margin: 0 auto;
  min-height: 100vh;
  
}
body {
  margin: 0;
}
.dark {
  background-color: rgb(29, 28, 28);
  color: white;
}
*{
  box-sizing: border-box;
}
</style>
