<template>
  <div class="search">
    <input type="checkbox" name="switch" id="switch" @click="changeColor">
    <label class="switch" for="switch"><!--<span></span>--></label>
    <h1 @click="reset" >oplask</h1>
      <div class="searchbar">
        <img src="../assets/search.svg" alt="">
        <input type="text" 
          placeholder="search for images" 
          onfocus="this.placeholder = ''" 
          onblur="this.placeholder = 'search for images'"
          v-model="input"
          v-on:keyup.enter="emitSearch">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    input: ""
  }),
  methods: {
    emitSearch() {
      this.$emit('search', this.input)
    },
    changeColor() {
      this.$store.dispatch("changeColor")
    },
    reset() {
      this.$store.dispatch("reset")
      this.input = ""
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search h1 {
  cursor: pointer;
}
.searchbar {
  width: 100%;
  background-color: rgb(240, 235, 235);
  height: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  img {
    height: 25px;
  }
  input {
    font-size: 1.8rem;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    &:focus {
    outline: none;
  }
  }
  
  
}
.color-toggle {
  text-align: center;
    border: none;
    padding: 2px 10px;
    font-weight: 600;
    background: none;
    cursor: pointer;
  }

.switch {
  
  display: block;
  position: relative;
  width: 30px;
  height: 50px;
  margin: 10px auto;
  border-radius: 50px;
  background: #e6e3da;
  background: linear-gradient(#e6e3da, #fff);
  border: 1px solid rgba(0,0,0,0.1);
  
  box-shadow: 
    inset 0 7px 0 #fdfdfd,
    0 2px 3px rgba(170, 160, 140,.3);
    cursor: pointer;
}

.switch:after {
  
  content: "";
  position: absolute;
  top: -10px; bottom: -10px;
  left: -5px; right: -5px;
  z-index: -1;
  background: #f2f1ed;
  border-radius: inherit;
  box-shadow: 0 1px 1px rgba(#aea391,0.2), 0 3px 3px rgba(170, 160, 140, 0.4), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 5px rgba(170, 160, 140, 0.5);
}

.switch:before {
  
  content: "";
  position:absolute; 
  width: 60px;
  height: 70px;
  border-radius: 50%;
  z-index: -1;
  left: 18px;
  top: 10px;
  // background: linear-gradient(160deg, rgba(170, 160, 140, 0.7), rgba(170, 160, 140, 0));
}
#switch {
  
  clip: rect(0 0 0 0);
  position: absolute;
  visibility: hidden;
}

#switch:checked ~ .switch {
  
  background: linear-gradient(#f7f6f4, #fff);
  box-shadow: inset 0 -5px 0 #dbd3c8, 0 6px 5px rgba(170, 160, 140, 0.75), 3px 16px 5px rgba(170,160,140, 0.3);
  border-bottom: none;
}

#switch:checked ~ .switch:after {
  
  display: none;
}
</style>
