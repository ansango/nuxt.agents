import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import DefaultLayout from '~/layouts/default.vue'

describe('default layout', () => {
  it('renders semantic header, main, and footer landmarks', async () => {
    const wrapper = await mountSuspended(DefaultLayout)

    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('main').exists()).toBe(true)
    expect(wrapper.find('footer').exists()).toBe(true)
  })

  it('renders slot content inside main', async () => {
    const wrapper = await mountSuspended(DefaultLayout, {
      slots: {
        default: '<div data-test="slot-content">Hello layout</div>',
      },
    })

    const main = wrapper.get('main')
    expect(main.find('[data-test="slot-content"]').exists()).toBe(true)
    expect(main.text()).toContain('Hello layout')
  })

  it("contains a primary navigation link to '/'", async () => {
    const wrapper = await mountSuspended(DefaultLayout)

    const nav = wrapper.get('nav[aria-label="Primary"]')
    const homeLink = nav.get('a[href="/"]')

    expect(homeLink.text()).toBe('Home')
  })
})
