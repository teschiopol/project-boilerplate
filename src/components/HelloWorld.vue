<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>

</style>
