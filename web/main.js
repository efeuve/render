import { h, render } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm@latest/dist/htm.module.js?module';

// Initialize htm with Preact
const html = htm.bind(h);

function Base() {
  const [toggleObj, setToggleObj] = useState({
    1: false,
    2: false,
    3: false,
  });

  const renderClass = (index) => {
    if (toggleObj[index]) return 'go-to-toggle';
    return 'go-to-toggle go-hide';
  };

  const handleToggle = (index) => {
    setToggleObj({
      ...toggleObj,
      [index]: !toggleObj[index],
    });
  };

  const decode = (str) => {
    const s = '<b>' + str + '</b>';
    let e = document.createElement('decodeIt');
    e.innerHTML = s;
    return e.innerText;
  };

  const renderArrow = (isOpen) => {
    if (isOpen) return decode('&#9650;')
    return decode('&#9660;')
  }

  return html`
    <table
      class="responsive-table with-payout mobile-style-1 mobile-labels-none"
    >
      <thead>
        <tr>
          <th>Rank</th>
          <th>Logo</th>
          <th>Name</th>
          <th>Paygrade</th>
          <th>Payout Speed</th>
          <th>Deposit Bonus</th>
          <th>Highlights</th>
          <th>Get Started</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="rt-type-rank">
            <span class="rank">1</span>
          </td>
          <td class="rt-type-logo">
            <a
              href="https://www.safestbettingsites.com/visit/betnow-bestsb/"
              title="BetNow"
              data-action="Rank Table Payout Table Logo - Pos 1"
              ><img
                class="mobile lazyloaded"
                src="https://www.safestbettingsites.com/wp-content/uploads/2020/09/betnow-snippet-mobile-interface.jpg"
                data-src="https://www.safestbettingsites.com/wp-content/uploads/2020/09/betnow-snippet-mobile-interface.jpg"
                alt="BetNow Logo" /><img
                class="lazyloaded"
                src="https://www.safestbettingsites.com/wp-content/uploads/2020/09/betnow-desktop-snippet-interface.jpg"
                data-src="https://www.safestbettingsites.com/wp-content/uploads/2020/09/betnow-desktop-snippet-interface.jpg"
                alt="BetNow Logo"
            /></a>
          </td>
          <td class="name">BetNow</td>
          <td class="paygrade rt-circle">
            <span class="a-grade">A</span>
          </td>
          <td class="payout-speed"><span>Payout Speed:</span>24 hours</td>
          <td class="rt-type-bonus">
            <span class="bonus-text"><span>100%</span> Up To $1,000</span>
          </td>
          <td class="features">
            <ul>
              <li>Trustworthy</li>
              <li>Fast Payouts</li>
              <li>High Limits</li>
            </ul>
          </td>
          <td class="action last">
            <a
              class="table-button"
              href="https://www.safestbettingsites.com/visit/betnow-bestsb/"
              title="Deposit Now at BetNow"
              data-action="Rank Table Payout Table Button - Pos 1"
              >Deposit Now</a
            ><a href="#best-online-sportsbooks-betnow"> Discover More</a>
          </td>
        </tr>
        <tr>
          <td class="rt-type-rank">
            <span class="rank">2</span>
          </td>
          <td class="rt-type-logo">
            <a
              href="https://www.safestbettingsites.com/visit/mybookie-bestsb/"
              title="MyBookie"
              data-action="Rank Table Payout Table Logo - Pos 2"
              ><img
                class="lazyload mobile"
                data-src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-mybookie-mobile.jpg"
                alt="MyBookie Logo" /><img
                class="lazyloaded"
                src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-mybookie.jpg"
                data-src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-mybookie.jpg"
                alt="MyBookie Logo"
            /></a>
          </td>
          <td class="name">MyBookie</td>
          <td class="paygrade rt-circle">
            <span class="a-grade">A</span>
          </td>
          <td class="payout-speed"><span>Payout Speed:</span>2-3 Days</td>
          <td class="rt-type-bonus">
            <span class="bonus-text"><span>100%</span> Up To $1,000</span>
          </td>
          <td class="features">
            <ul>
              <li>Popular Good</li>
              <li>Payouts</li>
              <li>Bet Variety</li>
            </ul>
          </td>
          <td class="action last">
            <a
              class="table-button"
              href="https://www.safestbettingsites.com/visit/mybookie-bestsb/"
              title="Deposit Now at MyBookie"
              data-action="Rank Table Payout Table Button - Pos 2"
              >Deposit Now</a
            ><a href="#best-online-sportsbooks-mybookie"> Discover More</a>
          </td>
        </tr>
        <tr class="go-small-tr" onClick=${() => handleToggle(1)} style=${!toggleObj[1] ? "margin-bottom: 5px !important;" : "border-bottom: none;"}>
          Bovada
          <span>${renderArrow(toggleObj[1])}</span>
        </tr>
        <tr class=${renderClass(1)}>
          <td class="rt-type-rank">
            <span class="rank">3</span>
          </td>
          <td class="rt-type-logo">
            <a
              href="https://www.safestbettingsites.com/visit/bovada-bestsb/"
              title="Bovada"
              data-action="Rank Table Payout Table Logo - Pos 3"
              ><img
                class="lazyload mobile"
                data-src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-bovada-mobile.jpg"
                alt="Bovada Logo" /><img
                class="ls-is-cached lazyloaded"
                src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-bovada.jpg"
                data-src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-bovada.jpg"
                alt="Bovada Logo"
            /></a>
          </td>
          <td class="name">Bovada</td>
          <td class="paygrade rt-circle">
            <span class="aplus-grade">A+</span>
          </td>
          <td class="payout-speed"><span>Payout Speed:</span>2-3 Days</td>
          <td class="rt-type-bonus">
            <span class="bonus-text"><span>50%</span> Up To $250</span>
          </td>
          <td class="features">
            <ul>
              <li>US Bettors Only</li>
              <li>VIP Program</li>
              <li>Low Rollover</li>
            </ul>
          </td>
          <td class="action last">
            <a
              class="table-button"
              href="https://www.safestbettingsites.com/visit/bovada-bestsb/"
              title="Deposit Now at Bovada"
              data-action="Rank Table Payout Table Button - Pos 3"
              >Deposit Now</a
            ><a href="#best-online-sportsbooks-bovada"> Discover More</a>
          </td>
        </tr>
        <tr class="go-small-tr" onClick=${() => handleToggle(2)} style=${!toggleObj[2] ? "margin-bottom: 5px !important;" : "border-bottom: none;"}>
          SportsBetting.ag
          <span>${renderArrow(toggleObj[2])}</span>
        </tr>
        <tr class=${renderClass(2)}>
          <td class="rt-type-rank">
            <span class="rank">4</span>
          </td>
          <td class="rt-type-logo">
            <a
              href="https://www.safestbettingsites.com/visit/sportsbetting-bestsb/"
              title="Sportsbetting"
              data-action="Rank Table Payout Table Logo - Pos 4"
              ><img
                class="lazyload mobile"
                data-src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-sportsbetting-mobile.jpg"
                alt="Sportsbetting Logo" /><img
                class="ls-is-cached lazyloaded"
                src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-sportsbetting.jpg"
                data-src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-sportsbetting.jpg"
                alt="Sportsbetting Logo"
            /></a>
          </td>
          <td class="name">Sportsbetting</td>
          <td class="paygrade rt-circle">
            <span class="a-grade">A</span>
          </td>
          <td class="payout-speed"><span>Payout Speed:</span>2-4 Days</td>
          <td class="rt-type-bonus">
            <span class="bonus-text"><span>50%</span> Up To $1,000</span>
          </td>
          <td class="features">
            <ul>
              <li>Trustworthy</li>
              <li>Fast Payouts</li>
              <li>Takes Crypto</li>
            </ul>
          </td>
          <td class="action last">
            <a
              class="table-button"
              href="https://www.safestbettingsites.com/visit/sportsbetting-bestsb/"
              title="Deposit Now at Sportsbetting"
              data-action="Rank Table Payout Table Button - Pos 4"
              >Deposit Now</a
            ><a href="#best-online-sportsbooks-sportsbetting"> Discover More</a>
          </td>
        </tr>
        <tr class="go-small-tr" onClick=${() => handleToggle(3)} style=${!toggleObj[3] ? "margin-bottom: 5px !important;" : "border-bottom: none;"}>
          BetOnline
          <span>${renderArrow(toggleObj[3])}</span>
        </tr>
        <tr class=${renderClass(3)}>
          <td class="rt-type-rank">
            <span class="rank">5</span>
          </td>
          <td class="rt-type-logo">
            <a
              href="https://www.safestbettingsites.com/visit/betonline-bestsb/"
              title="Betonline"
              data-action="Rank Table Payout Table Logo - Pos 5"
              ><img
                class="lazyload mobile"
                data-src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-betonline-mobile.jpg"
                alt="Betonline Logo" /><img
                class="ls-is-cached lazyloaded"
                src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-betonline.jpg"
                data-src="https://www.safestbettingsites.com/wp-content/uploads/2019/12/snippet-betonline.jpg"
                alt="Betonline Logo"
            /></a>
          </td>
          <td class="name">Betonline</td>
          <td class="paygrade rt-circle">
            <span class="a-grade">A</span>
          </td>
          <td class="payout-speed"><span>Payout Speed:</span>2-4 Days</td>
          <td class="rt-type-bonus">
            <span class="bonus-text"><span>50%</span> Up To $1,000</span>
          </td>
          <td class="features">
            <ul>
              <li>Best In Class</li>
              <li>Speedy Payouts</li>
              <li>Accepts Crypto</li>
            </ul>
          </td>
          <td class="action last">
            <a
              class="table-button"
              href="https://www.safestbettingsites.com/visit/betonline-bestsb/"
              title="Deposit Now at Betonline"
              data-action="Rank Table Payout Table Button - Pos 5"
              >Deposit Now</a
            ><a href="#best-online-sportsbooks-betonline"> Discover More</a>
          </td>
        </tr>
      </tbody>
    </table>
  `;
}

render(html` <${Base} /> `, document.getElementById('preact-container'));
