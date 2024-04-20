<script setup lang="ts">
interface Props {
  options: SelectOption[]
}

const { options } = defineProps<Props>()

const selected = defineModel<SelectOptionValue>({ required: true })
</script>

<template>
  <USelectMenu
    v-model="selected"
    :options="options"
    placeholder="Select a language"
    value-attribute="value"
    option-attribute="name"
  />
</template>
