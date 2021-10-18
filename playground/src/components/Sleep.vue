<script setup lang="ts">
const sleep = () => {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), 5000)
  })
}

await sleep();
</script>

<template>
  <p> sleep </p>
</template>

