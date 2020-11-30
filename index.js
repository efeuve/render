import htm from "https://cdn.skypack.dev/pin/htm@v3.1.0-Lnrl6ooU0xR8YCDnwwW6/mode=imports,min/optimized/htm.js";
import vhtml from "https://cdn.skypack.dev/pin/vhtml@v2.2.0-BMYKcMITFlkFbWnYTvf9/mode=imports,min/optimized/vhtml.js";

const html = htm.bind(vhtml);

const component = html`
  <div class="go-container">
  </div>
`;
const elem = document.getElementById("preact-container");
elem.innerHTML = component;
