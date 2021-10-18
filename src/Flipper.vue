<script setup lang="ts">
import { toRefs, watch, nextTick, onMounted } from "vue";
import { getElementArray } from "./utils";

const props = defineProps<{ flipKey: any }>();
const { flipKey } = toRefs(props);

const getElementStates = () => {
  let elements = getElementArray("[data-key]");
  let state: { [index: string]: DOMRect } = {};

  elements.forEach((element) => {
    var key = element.getAttribute("data-key")!;
    state[key] = element.getBoundingClientRect();
  })

  return state
}

watch(flipKey, () => {
  let state = getElementStates();
  nextTick(() => {
    let newState = getElementStates();
    let elements = getElementArray("[data-key]");
    elements.forEach(element => {
      let key = element.getAttribute("data-key")!;
      var elOldState = state[key];
      var elNewState = newState[key];
      if (!elOldState || !elNewState) return;

      // invert values
      var y = elOldState.y - elNewState.y;
      var x = elOldState.x - elNewState.x;

      element.animate([
        {
          transform: `translate(${x}px, ${y}px)`,
          width: `${elOldState.width}px`,
          height: `${elOldState.height}px`
        }, {}
      ], { duration: 500, easing: "ease-in-out" })
    })
  })
});
</script>

<template>
  <slot></slot>
</template>
