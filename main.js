import htm from "https://cdn.skypack.dev/pin/htm@v3.1.0-Lnrl6ooU0xR8YCDnwwW6/mode=imports,min/optimized/htm.js";
import vhtml from "https://cdn.skypack.dev/pin/vhtml@v2.2.0-BMYKcMITFlkFbWnYTvf9/mode=imports,min/optimized/vhtml.js";

const html = htm.bind(vhtml);

const component = html`
  <div class="go-container">
      <div class="go-img">
        <img src="https://res.cloudinary.com/dhxw87xee/image/upload/v1634930000/bonus_image_uovs66.png" />
      </div>
      <div class="go-header"><span>Get our favorite casino bonus</span></div>
      <div class="go-card">
        <a class="logo-bg" data-action="Bonus Page Top CTA Logo" href="https://www.onlineunitedstatescasinos.com/go/lasatlantis-bonuses/">
          <img class="us-flag" src="https://res.cloudinary.com/dhxw87xee/image/upload/v1634930030/US_flag_pwa46n.png" alt="US Flag" />
          <img class="logo" src="https://res.cloudinary.com/dhxw87xee/image/upload/v1635290787/las_atlantis_bg_dark_ms3bdr.png" alt="Las Atlantis Casino" />
        </a>
        <div class="cta">
          <div class="bonus">Exclusive $12,500</div>
          <div class="sub-heading">Deposit Bonus</div>
          <a data-action="Bonus Page Top CTA Button" href="https://www.onlineunitedstatescasinos.com/go/lasatlantis-bonuses/" class="button">Claim your bonus now</a>
        </div>
      </div>
      <a class="go-sublink" href="/bonuses/#best-bonus-table">View All Of Our Favorite Bonuses</div>
  </div>
`;
const elem = document.getElementById("preact-container");
elem.innerHTML = component;
