<script setup lang="ts">
import { ref } from "vue";

const update = ref(false);
const updateValue = () => {
  update.value = !update.value
}

setInterval(updateValue, 5000)
</script>

<template>
  <Flipper :flipKey="update">
    <div v-if="update">
      <div class="num green" data-key="1">1</div>
      <div class="num red" data-key="2">2</div>
    </div>
    <div v-else>
      <div style="display: flex;">
        <div class="num red" data-key="2">2</div>
        <div class="num green" data-key="1">1</div>
      </div>
    </div>
  </Flipper>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.num {
  width: 50px;
  height: 50px;
  color: white;
}
.green {
  background-color: springgreen;
}
.red {
  background-color: crimson;
}
</style>
