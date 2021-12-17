<template>
  <div>
    {{ test }}
  </div>
</template>
<script setup>
const config = useRuntimeConfig();
const test = config.PRIVATE_TEST
</script>
