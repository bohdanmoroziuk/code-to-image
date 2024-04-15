<script setup lang="ts">
import htmlToCanvas from 'html2canvas'

import { languages, themes, backgrounds, paddings, getInitialContent } from '~/config'

const language = useState('language', () => nth(languages, -1)!)

const theme = useState('theme', () => head(themes)!)

const background = useState('background', () => head(backgrounds)!)

const padding = useState('padding', () => nth(paddings, 1)!)

const content = useState('content', getInitialContent)

const editor = ref<HTMLDivElement>()

const exportPng = async () => {
  if (!editor.value) return

  const canvas = await htmlToCanvas(editor.value)
  const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')

  const link = document.createElement('a')

  link.download = 'code.png'
  link.href = image
  link.click()
}
</script>

<template>
  <main class="w-full">
    <div class="flex items-end gap-x-4 mt-10">
      <UFormGroup
        label="Language"
        class="max-w-60 w-full"
      >
        <LanguageSelect
          v-model="language"
          :options="languages"
        />
      </UFormGroup>
      <UFormGroup
        label="Theme"
        class="max-w-60 w-full"
      >
        <ThemeSelect
          v-model="theme"
          :options="themes"
        />
      </UFormGroup>
      <UFormGroup
        label="Background"
        class="max-w-60 w-full"
      >
        <BackgroundSelect
          v-model="background"
          :options="backgrounds"
        />
      </UFormGroup>
      <UFormGroup
        label="Padding"
        class="max-w-60 w-full"
      >
        <PaddingSelect
          v-model="padding"
          :options="paddings"
        />
      </UFormGroup>
      <UButton
        class="whitespace-nowrap"
        icon="i-heroicons-camera-solid"
        @click="exportPng"
      >
        Export PNG
      </UButton>
    </div>
    <div
      class="mt-10"
      ref="editor"
    >
      <CodeEditor
        v-model="content"
        :language="language.value"
        :theme="theme.value"
        :background="background.value"
        :padding="padding.value"
      />
    </div>
  </main>
</template>
