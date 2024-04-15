<template>
  <div>
    <UContainer class="max-w-4xl">
      <div class="flex flex-col items-center gap-y-20">
        <slot />
        <DefaultFooter />
      </div>
    </UContainer>

    <UNotifications />
  </div>
</template>
