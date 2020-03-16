<template>
  <div class="home" v-bind:class="{ dark: darkActive }">   
    <Search v-on:search='createUrl' />
    <Pager v-if="pages" />
    <Gallery v-if="pages > 0" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import Gallery from '@/components/Gallery.vue'
import Pager from '@/components/Pager.vue'


export default {
  name: 'Home',
  data: () => ({

  }),
  components: {
    Search, Gallery, Pager
  },
  computed: {
    pages() {
      return this.$store.state.pages
    },
    darkActive() {
      return this.$store.state.darkActive
    }
  },
  methods: {
    createUrl(input) {  
      let query = input 
      let key = 'xIJxifBLKfQ8_NIf_DtYTV2PDygh-oXGyu7ki-qQ-Uk'
      let baseUrl = 'https://api.unsplash.com/search/photos?'
      let url = `${baseUrl}query=${query}&client_id=${key}`
      this.$store.dispatch("updateCurrentPage")
      this.$store.dispatch("updateCurrentUrl", url)
      this.$store.dispatch("getImages", url)
    },
  }
}
</script>

<style lang="scss" scoped>
.home{
  max-width: 1200px;
  margin: 0 auto;
}
</style>