<template>
  <div>
    {{ test }}
  </div>
</template>
<script setup>
const test = process.env.PRIVATE_TEST
</script>
