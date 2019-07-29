import Vue from 'vue'

// Import to be used Global Components
import Navbar from '~/components/Navbar'
import usa from '~/components/usa'

// Vue.use Definition
Vue.use('Navbar', Navbar)
Vue.use('usa', usa)

// Export Components
const components = {
  Navbar,
  usa
}

// Register Components
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
