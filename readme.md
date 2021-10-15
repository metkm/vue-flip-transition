# How to use

Add it to your main.ts in src folder
```javascript
import Flipper from "vue-flip-transition"
import { createApp } from "vue"
import App from "./App.vue"

createApp(App)
.use(Flipper)
.mount("#app")
```
Now you can use ```<Flipper> </Flipper>``` tag everywhere

# Usage
flipKey is required. When flipkey is changed it will trigger an animation between elements that has ```data-key``` attribute
data-key attribute should match between elements that you want to make a transition
```javascript
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
```
