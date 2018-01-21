<template>
  <div id="app">
    <flexo> </flexo>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
      items: [{}]
   }),
  methods: {
    add: function() {
      this.items.push({});
    },
    remove: function() {
      this.items.pop({});
    }
  }
}
</script>

<style>

</style>
