Setting up the web page:

1. Copy the webpage in question into a web folder, outside of the current github repo

```bash
wget URL
```

2. Insert the scripts, styles and element in order to inject the whole component.

```html
<link href="../../render/index.css" rel="stylesheet" type="text/css" />
<script type="module" src="../../render/index.js"></script>
```

```html
<!-- Start of Optimize test -->
<div id="go-test"></div>
<!-- End of Optimize test -->
```

3. In GO, inject all the code from JSDelivr. Example injection of styles and JS from a "Global Javascript" option:

```javascript
var script = document.createElement('script');
script.type = 'module';
script.src = 'https://cdn.jsdelivr.net/gh/efeuve/render@sbs-bos-dic20.v0.0.4/web/main.min.js';    

document.getElementsByTagName('head')[0].appendChild(script);

var styles = document.createElement('link');
styles.href = 'https://cdn.jsdelivr.net/gh/efeuve/render@sbs-bos-dic20.v0.0.4/web/main.min.css';
styles.rel = 'stylesheet'

document.getElementsByTagName('head')[0].appendChild(styles);
```

4. Use `vite` to set up the dev environment
