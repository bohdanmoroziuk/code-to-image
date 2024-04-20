<script setup lang="ts">
import CodeEditor from '~/components/CodeEditor.vue'
import { languages, themes, backgrounds, paddings, getInitialContent } from '~/config'

const toast = useToast()

const language = useState('language', () => nth(languages, -1)!)

const theme = useState('theme', () => head(themes)!)

const background = useState('background', () => head(backgrounds)!)

const padding = useState('padding', () => nth(paddings, 1)!)

const content = useState('content', getInitialContent)

const title = useState('title', () => 'Untitled')

const icon = computed(() => language.value.icon)

const editor = ref<InstanceType<typeof CodeEditor> | null>(null)

const exportPng = async () => {
  try {
    if (!editor.value) {
      throw new Error('No editor provided')
    }

    const screenshot = await editor.value.getScreenshot()

    const fileName = `${title.value}.png`

    saveImage(screenshot, fileName)
  } catch (error) {
    toast.add({
      color: 'red',
      title: (error as Error).message,
    })
  }
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:items-end gap-4 w-full max-w-2xl mx-auto">
    <UFormGroup label="Language">
      <LanguageSelect
        v-model="language"
        :options="languages"
      />
    </UFormGroup>
    <UFormGroup label="Theme">
      <ThemeSelect
        v-model="theme"
        :options="themes"
      />
    </UFormGroup>
    <UFormGroup label="Background">
      <BackgroundSelect
        v-model="background"
        :options="backgrounds"
      />
    </UFormGroup>
    <UFormGroup label="Padding">
      <PaddingSelect
        v-model="padding"
        :options="paddings"
      />
    </UFormGroup>
    <div class="sm:col-span-2 md:col-span-4 lg:col-span-1">
      <UButton
        class="whitespace-nowrap"
        icon="i-heroicons-camera-solid"
        block
        @click="exportPng"
      >
        Export PNG
      </UButton>
    </div>
  </div>

  <div class="flex justify-center mt-10">
    <CodeEditor
      v-model:content="content"
      v-model:title="title"
      :language="language.value"
      :icon="icon"
      :theme="theme.value"
      :background="background.value"
      :padding="padding.value"
      ref="editor"
    >
      <template #loading>
        <div class="flex justify-center">
          <Loader />
        </div>
      </template>
    </CodeEditor>
  </div>
</template>
