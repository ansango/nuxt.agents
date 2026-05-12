import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    include: [
      'test/unit/**/*.{test,spec}.ts',
      'test/nuxt/**/*.{test,spec}.ts',
    ],
    exclude: ['test/e2e/**'],
  },
})
