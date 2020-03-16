<template>
    <div class="pager">
        <div class="message">
            <p>Page <strong>{{currentPage}}</strong> of <strong>{{pages}}</strong> pages</p>
        </div>
        <div class="buttons">
            <button v-on:click="goFirstPage" v-if="currentPage != 1">First</button>
            <button  class="rotate" v-if="currentPage != 1"  v-on:click="prevPage" >></button>
            <button v-if="currentPage != 1 && currentPage != 2" v-on:click="prevPrevPage">{{currentPage - 2}}</button>
            <button v-if="currentPage != 1"  v-on:click="prevPage" >{{currentPage - 1}}</button>
            <button class="currentPage">{{currentPage}}</button>
            <button v-on:click="nextPage" v-if="currentPage < pages">{{currentPage + 1}}</button>
            <button v-if="currentPage < pages - 1" v-on:click="nextNextPage">{{currentPage + 2}}</button>
            <button v-on:click="nextPage" v-if="currentPage < pages">></button>
            <button v-on:click="goLastPage" v-if="currentPage < pages">Last</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pager",
    methods: {
        nextPage: function() {
            this.$store.dispatch("nextPage")
    },
        prevPage() {
            this.$store.dispatch("prevPage")
    },
        nextNextPage: function() {
            this.$store.dispatch("nextNextPage")
    },
        prevPrevPage() {
            this.$store.dispatch("prevPrevPage")
    },
        goFirstPage: function() {
            this.$store.dispatch("goFirstPage")
    },
        goLastPage() {
            this.$store.dispatch("goLastPage")
    },

    },
    computed: {
    currentPage() {
      return this.$store.state.currentPage
    },
    pages() {
      return this.$store.state.pages
    },
    },
}
</script>

<style lang="scss" scoped>
    .pager {
        min-width: 300px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    button {
        margin: 5px;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
    }
    button:focus {outline:0;}
    .currentPage {
        background: none;
        background-color: black;
        color: white;
        cursor: default;
    }
    .rotate {
        transform: rotate(180deg);
    }
</style> 
