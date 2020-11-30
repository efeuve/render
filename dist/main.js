import { h, render } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm@latest/dist/htm.module.js?module';

// Initialize htm with Preact
const html = htm.bind(h);

function Base() {

  return html`
    <div>Lorem Ipsum</div>
  `;
}

render(html` <${Base} /> `, document.getElementById('preact-container'));
