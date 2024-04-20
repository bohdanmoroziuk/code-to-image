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
    placeholder="Select a background"
    value-attribute="value"
    option-attribute="name"
  >
    <template #label>
      <BackgroundSelectOption :value="selected" />
    </template>

    <template #option="{ option }">
      <BackgroundSelectOption :value="option.value" />
    </template>
  </USelectMenu>
</template>
