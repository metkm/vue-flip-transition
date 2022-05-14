<script setup lang="ts">
import { ref } from "vue";

const update = ref(false);
const updateValue = () => {
  update.value = !update.value
}
</script>

<template>
  <button @click="updateValue">Update value</button>
  <Flipper :flipKey="update">
    <div v-if="update">
      <div class="num green" style="width: 100%;" data-key="1">1</div>
      <div class="num red" data-key="2">2</div>
    </div>
    <div v-else>
      <div style="display: flex; justify-content: center;" >
        <div class="num red" data-key="2">2</div>
        <div class="num green" data-key="1">1</div>
      </div>
    </div>
  </Flipper>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
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
