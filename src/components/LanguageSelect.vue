<script setup lang="ts">
interface Props {
  options: SelectOption[]
}

const { options } = defineProps<Props>()

const language = defineModel<SelectOption>({ required: true })
</script>

<template>
  <USelectMenu
    v-model="language"
    :options="options"
    option-attribute="name"
    class="w-full"
  >
    <template #label>
      <span class="truncate">{{ language.name }}</span>
    </template>

    <template #option="{ option }">
      <span class="truncate">{{ option.name }}</span>
    </template>
  </USelectMenu>
</template>
