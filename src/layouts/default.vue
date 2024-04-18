<template>
  <div class="flex flex-col min-h-screen h-full gap-y-10 p-5">
    <DefaultHeader
      name="CodeToImage"
      description="Take screenshots of your code"
    />
    <main class="flex-1">
      <slot />
    </main>
    <DefaultFooter />
  </div>
</template>
