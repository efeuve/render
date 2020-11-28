import { h, render } from 'https://unpkg.com/preact@latest?module';
import {
  useState,
  useEffect,
} from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm@latest/dist/htm.module.js?module';

// Initialize htm with Preact
const html = htm.bind(h);

function Props() {
  const [count, setCount] = useState(0);

  // set counters
  const increment = () => setCount(count + 1);
  // You can also pass a callback to the setter
  const decrement = () => setCount((currentCount) => currentCount - 1);

  return html`
    <div>Count: ${count}</div>
    <p>New content!</p>
    <button onClick="${increment}">Increment</button>
    <button onClick="${decrement}">Decrement</button>
  `;
}

render(html` <${Props} /> `, document.getElementById('preact-container'));
