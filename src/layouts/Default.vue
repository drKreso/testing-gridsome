<template>
  <main class="h-screen flex flex-col justify-center items-center">
    <slot />
  </main>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
