import './style.css'
import { setupSearch } from './search';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Gooogle</h1>
    <form>
      <input name='keyword' type='text' />
      <button type='submit'>검색</button>
    </form>
  </div>
`

setupSearch(document.querySelector<HTMLFormElement>('form')!)
