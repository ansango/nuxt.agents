<template>
  <div class="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
    <header class="border-b border-zinc-200/80 dark:border-zinc-800">
      <nav aria-label="Primary" class="mx-auto flex h-14 w-full max-w-5xl items-center px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/"
          class="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-zinc-300 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-600 dark:focus-visible:ring-offset-zinc-950"
        >
          Home
        </NuxtLink>
      </nav>
    </header>

    <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <slot />
    </main>

    <footer class="border-t border-zinc-200/80 dark:border-zinc-800">
      <p class="mx-auto w-full max-w-5xl px-4 py-4 text-sm text-zinc-600 sm:px-6 lg:px-8 dark:text-zinc-400">Footer</p>
    </footer>
  </div>
</template>
