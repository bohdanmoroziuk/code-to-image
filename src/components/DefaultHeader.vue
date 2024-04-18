<script setup lang="ts">
interface Props {
  name: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <header>
    <h1 class="text-3xl text-center mb-2">
      {{ name }}
    </h1>
    <p class="text-sm text-center">
      {{ description }}
    </p>
  </header>
</template>
