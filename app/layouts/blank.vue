<script setup lang="ts">
defineLayoutMeta({
  name: 'blank',
  description: 'Layout blank para páginas de autenticación',
})
</script>

<template>
  <div class="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
    <!-- Contenedor centrado y responsive -->
    <div class="w-full max-w-md">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* No se requieren estilos adicionales, todo se maneja con Tailwind */
</style>
