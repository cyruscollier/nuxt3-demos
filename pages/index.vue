<template>
  <transition name="fade" mode="out-in">
    <component
        class="flex flex-col hide-scrollbar max-h-full mx-auto overflow-y-auto py-6 space-y-2 w-9/12"
        :is="state"
        @switch-state="switchState"
    />
  </transition>

</template>
<script setup>
import { ref } from 'vue'
const state = ref('state-one');
function switchState() {
  state.value = state.value === 'state-one' ? 'state-two' : 'state-one';
}
</script>
<style>
.fade-enter-active {
  transition: all 0.5s ease-out;
}

.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
