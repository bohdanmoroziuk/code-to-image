<script setup lang="ts">
interface Props {
  language: string
  theme: string
  background: string
  padding: string
}

const props = defineProps<Props>()

const content = defineModel<string>({ required: true, })

const AceEditor = ref<unknown>('div')

const rootStyle = computed(() => ({
  background: props.background,
  padding: props.padding,
}))

onMounted(async () => {
  await import('ace-builds')
  await import('ace-builds/src-noconflict/mode-javascript')
  await import('ace-builds/src-noconflict/mode-html')
  await import('ace-builds/src-noconflict/mode-css')
  await import('ace-builds/src-noconflict/mode-python')
  await import('ace-builds/src-noconflict/mode-java')
  await import('ace-builds/src-noconflict/mode-typescript')
  await import('ace-builds/src-noconflict/theme-monokai')
  await import('ace-builds/src-noconflict/theme-twilight')
  await import('ace-builds/src-noconflict/theme-terminal')
  AceEditor.value = markRaw((await import('vue3-ace-editor')).VAceEditor)
})
</script>

<template>
  <div :style="rootStyle">
    <component
      v-model:value="content"
      :is="AceEditor"
      :lang="language"
      :theme="theme"
      style="height: 400px"
    />
  </div>
</template>