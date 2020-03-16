import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    leftRow: [],
    rightRow: [],
    pages: 0,
    currentPage: 1,
    url: "",
    lbActive: false,
    darkActive: false
  },
  mutations: {
      removeImages(state) {
        state.lbActive = false
        state.leftRow = []
        state.rightRow = []
        state.pages = 0
      },
      addImages(state, payload) {
        state.images = payload.results
        state.pages = payload.total_pages
      },
      sortImages(state) {
        for (let i = 0; i < state.images.length; i++) {
            if ((i+2)%2==0) {
                state.leftRow.push(state.images[i])
            }
            else {
                state.rightRow.push(state.images[i])
            }
        }
      },
      goNextPage(state) {
        state.currentPage++
      },
      goPrevPage(state) {
        state.currentPage--
      },
      goFirstPage(state) {
        state.currentPage = 1
      },
      goLastPage(state) {
        state.currentPage = state.pages
      },
      goNextNextPage(state) {
        state.currentPage = state.currentPage + 2
      },
      goPrevPrevPage(state) {
        state.currentPage = state.currentPage - 2
      },
      updateCurrentUrl(state, url) {
          state.url = url
      },
      openLightbox(state) {
        state.lbActive = true
      },
      closeLightbox(state) {
        state.lbActive = false
      },
      changeColorMode(state) {
        state.darkActive = !state.darkActive
        console.log("hej")
      },
      updateCurrentPage(state) {
        state.currentPage = 1
      }
      

  },
  actions: {
    getImages(context, url){
        context.commit("removeImages")   
        fetch(url)
        .then((response) => {
          return response.json();
          })
        .then((data) => {
            context.commit("addImages", data)
            console.log(data)
         })
        .then(() => {
            context.commit("sortImages")
         })
         

      },
    nextPage(context) {
        context.commit("goNextPage")
        let newUrl = `${context.state.url}&page=${context.state.currentPage}`
        context.dispatch("getImages", newUrl)
    },
    prevPage(context) {
        context.commit("goPrevPage")
        let newUrl = `${context.state.url}&page=${context.state.currentPage}`
        context.dispatch("getImages", newUrl)
    },
    goFirstPage(context) {
        context.commit("goFirstPage")
        let newUrl = `${context.state.url}&page=${context.state.currentPage}`
        context.dispatch("getImages", newUrl)
    },
    goLastPage(context) {
        context.commit("goLastPage")
        let newUrl = `${context.state.url}&page=${context.state.currentPage}`
        context.dispatch("getImages", newUrl)
    },
    nextNextPage(context) {
      context.commit("goNextNextPage")
      let newUrl = `${context.state.url}&page=${context.state.currentPage}`
      context.dispatch("getImages", newUrl)
    },
    prevPrevPage(context) {
      context.commit("goPrevPrevPage")
      let newUrl = `${context.state.url}&page=${context.state.currentPage}`
      context.dispatch("getImages", newUrl)
    },
    updateCurrentUrl(context, url) {
      context.commit("updateCurrentUrl", url)
    },
    openLb(context) {
      context.commit("openLightbox")
    },
    closeLb(context) {
      context.commit("closeLightbox")
    },
    changeColor(context) {
      context.commit("changeColorMode")
      
    },
    reset(context) {
      context.commit("removeImages")
    },
    updateCurrentPage(context) {
      context.commit("updateCurrentPage")
    },
  }
});