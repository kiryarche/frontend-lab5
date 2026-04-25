<script setup>
import Clicker from './components/Clicker.vue'

const clickers = Array.from({ length: 100 }, (_, index) => index + 1)

function showClickerAlert(clickerNumber) {
  alert(`Clicker ${clickerNumber} clicked!`)
}
</script>

<template>
  <main class="container">
    <h1>100 Vue Clickers</h1>

    <div class="clickers">
      <Clicker
        v-for="clicker in clickers"
        :key="clicker"
        :amount="clicker"
        @button-clicked="showClickerAlert(clicker)"
      >
        <button class="custom-button">
          Increment by {{ clicker }}
        </button>
      </Clicker>
    </div>
  </main>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  padding: 30px;
  color: #222222;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #ffffff;
}

.clickers {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.custom-button {
  padding: 6px 12px;
  cursor: pointer;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #888888;
}
</style>