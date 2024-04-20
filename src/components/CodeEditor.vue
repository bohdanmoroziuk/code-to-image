<script setup lang="ts">
interface Props {
  language: string
  icon: string
  theme: string
  background: string
  padding: string
  showHeader: boolean
  roundedCorners: boolean
}

const props = defineProps<Props>()

const content = defineModel<string>('content', { required: true, })

const title = defineModel<string>('title', { required: true, })

const loading = ref(true)

const root = ref<HTMLDivElement>()

const AceEditor = ref<unknown>('div')

const headerClass = computed(() => ({
  'hidden': !props.showHeader,
  'rounded-t-md': props.roundedCorners,
}))

const mainClass = computed(() => ({
  'rounded-b-md': props.roundedCorners,
}))

const rootStyle = computed(() => ({
  background: props.background,
  padding: props.padding,
  maxWidth: '768px',
  width: '100%',
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
  loading.value = false
})

const getScreenshot = async () => {
  if (!root.value) {
    throw new Error('No root element provided')
  }

  const screenshot = await htmlToImage(root.value)

  return screenshot
}

defineExpose({
  getScreenshot,
})
</script>

<template>
  <slot
    v-if="loading"
    name="loading"
  >
    <div class="flex justify-center">
      <p class="m-0 text-sm">
        Loading...
      </p>
    </div>
  </slot>
  <div
    v-else
    :style="rootStyle"
    ref="root"
  >
    <header
      :class="headerClass"
      class="flex items-center justify-between h-14 px-4 bg-black bg-opacity-80"
    >
      <div class="flex items-center gap-x-1">
        <div class="w-3 h-3 rounded-full bg-[#ff5656]"></div>
        <div class="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
        <div class="w-3 h-3 rounded-full bg-[#67f772]"></div>
      </div>
      <div class="mx-auto">
        <UInput
          v-model="title"
          :padded="false"
          variant="none"
          class="w-full text-[hsla(0,0%,100%,0.6)] bg-transparent"
          input-class="font-medium text-base text-center"
        />
      </div>
      <div class="flex justify-center w-11 p-1 bg-black bg-opacity-30 rounded-sm">
        <img
          :src="icon"
          :alt="language"
          class="w-8"
        />
      </div>
    </header>
    <main
      :class="mainClass"
      class="overflow-hidden"
    >
      <component
        v-model:value="content"
        :is="AceEditor"
        :lang="language"
        :theme="theme"
        style="height: 400px"
      />
    </main>
  </div>
</template>

<style>
.ace_editor {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}
</style>
