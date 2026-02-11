import './app.css'
import { mount } from 'svelte'
import Register from './Register.svelte'

const app = mount(Register, {
  target: document.getElementById('app')!,
})

export default app

