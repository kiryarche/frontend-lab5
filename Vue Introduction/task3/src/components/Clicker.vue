<script setup>
import { ref } from 'vue'

const props = defineProps({
  amount: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['button-clicked'])

const count = ref(0)

function incrementCounter() {
  count.value += props.amount

  emit('button-clicked', count.value)
}
</script>

<template>
  <div class="clicker">
    <p>Clicked {{ count }} times</p>

    <p class="amount">
      +{{ amount }} per click
    </p>

    <div @click="incrementCounter" class="click-area">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.clicker {
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  background-color: #f8f8f8;
  color: #222222;
}

p {
  margin: 0 0 10px;
  font-size: 16px;
  color: #222222;
}

.amount {
  font-size: 14px;
  color: #555555;
}

.click-area {
  display: inline-block;
  cursor: pointer;
}
</style>