<template>
    <div class="gallery"  >
        <!-- <transition name="fade" mode="out-in"> -->
            <div key=1 class="gallery-wrapper" v-bind:class="{ filter: lbActive }" >
                <div class="images">
                    <div class="left-row">
                        <div v-for="image in leftRow" :key="image.id" class="img-wrapper">
                            <img :src='image.urls.regular' :alt="image.alt_description" @click="enhance(image)">
                        </div>
                    </div>
                    <div class="right-row">
                        <div v-for="image in rightRow" :key="image.id" class="img-wrapper">
                            <img :src='image.urls.regular' :alt="image.alt_description" @click="enhance(image)">
                        </div>
                    </div>
                </div>
                <Pager />
            </div>
            <ring-loader class="loader" v-if="loading" ></ring-loader>
            <div v-if="lbActive" class="lightBox" > 
                <div class="img-wrapper">
                    <img class="close" src="../assets/close.svg" alt="close" @click="closeLb">
                    <img  :src="lightboxImage" alt="">
                </div>
            </div> 
        <!-- </transition> -->
    </div>
</template>

<script>
import Pager from '@/components/Pager.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'


export default {
    name: "Gallery",
    data: () => ({
        lightboxImage: "",
        loading: false
    }),
    components: {
        Pager, RingLoader
    },

    computed: {
        leftRow() {
            return this.$store.state.leftRow
            },
        rightRow() {
            return this.$store.state.rightRow
        },
        lbActive() {
            return this.$store.state.lbActive
        }
    },
    methods: {
        enhance(image) {
            this.loading = true
            this.lightboxImage = image.urls.full
            setTimeout(()=>this.$store.dispatch("openLb"), 300);
            setTimeout(()=>this.loading = false, 300);
        },
        closeLb() {
            this.$store.dispatch("closeLb")
        }
    }

}
</script>

<style lang="scss" >
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
    .gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .gallery-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .images {
        margin-top: 20px;
        display: flex;
        width: 100%;
        .left-row, .right-row {
            display: flex;
            flex-direction: column;
            width: 50%;
            margin: 10px;
        }
        img {
            margin: 10px 0;
            width: 100%;
            box-shadow: 10px 10px 22px -9px rgba(0,0,0,0.22);
            cursor: pointer;
        }
    }
    .lightBox {
        top: 10vh;
        position: fixed;
        height: 75vh;
        width: 90vw;
        display: flex;
        justify-content: center;
        align-items: center;
        .img-wrapper, img {
            max-height: 75vh;
            max-width: 90vw;
            display: flex;
            align-items: flex-start; 
            position: relative;
        .close {
            height: 40px;
            position: absolute;
            right: 10px;
            top: 10px;
            z-index: 999;
            padding: 8px;
            background-color: rgba(255, 255, 255, 0.425);
            border-radius: 50%;
           cursor: pointer;
        }
        }
    }
    .filter {
        filter: grayscale(100%);
    }
    .loader {
        position: fixed;
        top: 40vh;
    }
</style>