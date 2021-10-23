<template>
<button @click="switchState">State One</button>
</template>

<script setup>
const emit = defineEmits(['switchState']);
const switchState = () => {
  emit('switchState');
}
</script>

<style scoped>

</style>
