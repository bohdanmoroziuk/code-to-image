<script setup lang="ts">
interface Props {
  value: SelectOptionValue
}

const props = defineProps<Props>()

const rootStyle = computed(() => ({
  background: props.value,
}))
</script>

<template>
  <div
    :style="rootStyle"
    class="rounded-full w-5 h-5"
  />
</template>
