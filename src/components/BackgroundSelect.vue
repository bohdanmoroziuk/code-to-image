<script setup lang="ts">
interface Props {
  options: SelectOption[]
}

const { options } = defineProps<Props>()

const background = defineModel<SelectOption>({ required: true })
</script>

<template>
  <USelectMenu
    v-model="background"
    :options="options"
    option-attribute="name"
    class="w-full"
  >
    <template #label>
      <div
        class="rounded-full w-5 h-5"
        :style="{ background: background.value }"
      />
    </template>

    <template #option="{ option }">
      <div
        class="rounded-full w-5 h-5"
        :style="{ background: option.value }"
      />
    </template>
  </USelectMenu>
</template>
