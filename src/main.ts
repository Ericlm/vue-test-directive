import './assets/main.css'

import { createApp, type DirectiveBinding, h, render } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('test', (el: HTMLElement, binding: DirectiveBinding) => {
    // Unique id for the div the directive creates
    const testId = `${el.id}-test`

    // Creating a div with 20 p tags inside
    const node = h(
      'div',
      // The key is necessary to avoid the two directives to have the same vnode (https://vuejs.org/guide/extras/render-function.html#vnodes-must-be-unique)
      { key: testId, id: testId },
      Array.from({ length: 20 }).map((_val, index) => {
        return h('p', { innerHTML: 'hi', key: `${testId}-${index}` })
      })
    )

    // Rendering the div inside the parent element
    render(node, el.parentElement!)
  })

app.mount('#app')
