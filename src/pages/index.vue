<script setup lang="ts">
import { languages, themes, backgrounds, paddings, getInitialContent } from '~/config'

const language = useState('language', () => nth(languages, -1)!)

const theme = useState('theme', () => head(themes)!)

const background = useState('background', () => head(backgrounds)!)

const padding = useState('padding', () => nth(paddings, 1)!)

const content = useState('content', getInitialContent)
</script>

<template>
  <main class="w-full">
    <div class="flex items-end gap-x-4 mt-4">
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
    </div>
    <div class="mt-10">
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
