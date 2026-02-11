import './app.css'
import { mount } from 'svelte'
import Terms from './Terms.svelte'

const app = mount(Terms, {
  target: document.getElementById('app')!,
})

export default app

