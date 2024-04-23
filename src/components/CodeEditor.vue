<script setup lang="ts">
import type { ResizeData } from '~/resizer'

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

const error = ref<Error | null>(null)

const width = ref(768)

const height = ref(400)

const root = ref<HTMLDivElement>()

const resizer = ref<unknown>('div')

const editor = ref<unknown>('div')

const headerClass = computed(() => ({
  'hidden': !props.showHeader,
  'rounded-t-md': props.roundedCorners,
}))

const mainClass = computed(() => ({
  'rounded-t-md': props.roundedCorners && !props.showHeader,
  'rounded-b-md': props.roundedCorners,
}))

const rootStyle = computed(() => ({
  background: props.background,
  padding: props.padding,
}))

const editorStyle = computed(() => ({
  height: props.showHeader
    ? `calc(${height.value}px - ${props.padding} - ${props.padding} - 56px)`
    : `calc(${height.value}px - ${props.padding} - ${props.padding})`,
}))

const handleResize = (data: ResizeData) => {
  width.value = data.width
  height.value = data.height
}

const getScreenshot = async () => {
  if (!root.value) {
    throw new Error('No root element provided')
  }

  const screenshot = await htmlToImage(root.value)

  return screenshot
}

const initialize = async () => {
  try {
    resizer.value = markRaw((await import('~/resizer')).VResizer)
    editor.value = markRaw((await import('~/editor')).VEditor)
  } catch (e) {
    error.value = (e as Error)
  } finally {
    loading.value = false
  }
}

defineExpose({ getScreenshot })

onMounted(initialize)
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
  <slot
    v-else-if="error"
    name="error"
    :error="error"
  >
    <UAlert
      :title="error.name"
      :description="error.message"
      :ui="{ wrapper: 'max-w-2xl my-0 mx-auto' }"
      icon="i-heroicons-exclamation-triangle"
      color="red"
      variant="solid"
    />
  </slot>
  <component
    v-else
    :is="resizer"
    :width="width"
    :min-width="400"
    :height="height"
    :min-height="300"
    :disable-attributes="['t', 'l']"
    @resize:move="handleResize"
  >
    <div
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
            input-class="font-medium text-base leading-8 text-center"
          />
        </div>
        <div class="flex justify-center w-11 p-1 bg-black bg-opacity-30 rounded-sm">
          <img
            :src="icon"
            :alt="language"
            class="w-8 h-8"
          />
        </div>
      </header>
      <main
        :class="mainClass"
        class="overflow-hidden"
      >
        <component
          v-model:value="content"
          :is="editor"
          :lang="language"
          :theme="theme"
          :style="editorStyle"
        />
      </main>
    </div>
  </component>
</template>

<style>
.ace_editor {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}
</style>
