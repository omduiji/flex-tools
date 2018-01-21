<template>
<div class="item" :style="{ flexGrow: flGrow, flexShrink: flShr, order:order, flexBasis:flBas, alignSelf: aSelf }" > 
          
    <slot></slot>
    <label for=""> flow grow </label> <input type="number" v-model.number="flGrow" >
    
    <label for="">flow shrink </label> <input type="number"  v-model.number="flShr" >
    <label for="">order </label> <input type="number"  v-model.number="order" >
    
    <label for="">flow basis </label>  <input type="number"  v-model.number="flBas" >
     <label for="select">align-self</label>
            <select v-model=" aSelf">
                <option v-for="self in selfs" :value="self.value" > {{self.text}} </option>
            </select>

            <button class="btn" @click="$emit('copied', { flBas, order, flShr, flGrow, aSelf })" > Get CSS</button>
    
       
  
                
 </div>
    
</template>
<script>
export default {
  name: "Block",
  data: () => ({
    items: [{}],
    flBas: 0.25,
    order: 0,
    flShr: 0,
    flGrow: 0,
    item: Array,
    copyItem: false,
    aSelf:"auto",
    selfs: [
      { text: "flex-start", value: "flex-start" },
      { text: "flex-end", value: "flex-end" },
      { text: "stretch", value: "stretch" },
      { text: "baseline", value: "baseline" },
      { text: "center", value: "center" },
      { text: "auto", value: "auto" }
    ]
  }),
  methods: {
    add: function() {
      this.items.push({});
    },
    remove: function() {
      this.items.pop({});
    },
    methods:{
        copyItems: function () {
          this.$emit('copyItem')
        }
    },

  }
};
</script>
<style scoped>
.item {
  min-width: 200px;
  min-height: 280px;
  padding: 8px;
  background-color: #55a8a3;
  display: grid;
  grid-template:  repeat(7, 40px) / 1fr  1fr ;
  grid-gap:4px;
  margin-right: 8px;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 8px;
  max-width: 100%;
  max-height: 100%;
}
label{
  
  text-align: left;
  grid-column: 1;
  padding: 3px;
}
input{
  grid-column: 2;
  width:90px;
  height: 16px;
  margin-right: 10px;
  border-radius: 10px;
  padding: 4px;
}
select{
  width:105px;
  height: 25px;
   border-radius: 10px;
  padding: 4px;
  outline: none;
}
.btn{
 grid-column: 1/3; 
 width: 90%;
 margin-left: auto;
 margin-right: auto;
height:30px ;
border-radius: 15px;
text-align: center;
color: 	#f4f3f3;
font-weight: bolder;
background: #222222;
outline: none;
}
option{
  outline: none;
}
</style>