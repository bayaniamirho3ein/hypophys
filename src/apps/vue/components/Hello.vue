<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div>
    <h1>
      Hello from vue !!
    </h1>
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>
  </div>
</template>

<style scoped>
</style>
