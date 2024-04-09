<script setup lang="ts">
interface Props {
  options: SelectOption[]
}

const { options } = defineProps<Props>()

const padding = defineModel<SelectOption>({ required: true })
</script>

<template>
  <USelectMenu
    v-model="padding"
    :options="options"
    option-attribute="name"
    class="w-full"
  >
    <template #label>
      <span class="truncate">{{ padding.name }}</span>
    </template>

    <template #option="{ option }">
      <span class="truncate">{{ option.name }}</span>
    </template>
  </USelectMenu>
</template>
