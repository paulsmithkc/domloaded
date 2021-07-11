# domloaded

**This micro-library will allow you to easily delay code execution until the DOM is loaded.**

* Unlike the [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event){:target="_blank"} event, this also works when included after the DOM was loaded.

* This function is designed to work in the same was as jQuery's [.ready()](https://api.jquery.com/ready/){:target="_blank"} event. However, it has been broken off as micro-libary to enable usage without importing the entire jQuery library. This enables you to still use it in Vanilla JS and React.js contexts where needed.

* Breaking this off into a micro-library allows you to execute code sooner and can be used to improve your [Google Lighthouse](https://developers.google.com/web/tools/lighthouse){:target="_blank"} scores.

## Install
Install the package with npm:
```bash
npm install domloaded
```

Or download the built script files from GitHub Releases.

## Basic Usage
```js
domloaded(() => { /* dom is loaded... */ });
```

## Include with Express

1. First install the npm package.
    ```bash
    npm install domloaded
    ```

2. Then serve the built script files via a static route.
    ```js
    app.use('/js', express.static('node_modules/domloaded/dist'));
    ```

3. Then link the script in your HTML/view.
    ```html
    <script src="/js/domloaded.min.js"></script>
    ```

4. And finally use it in your front-end code.
    ```js
    domloaded(() => { /* dom is loaded... */ });
    ```

## Include with Webpack/React

1. First install the npm package.
    ```bash
    npm install domloaded
    ```

2. And then use it where needed:
    ```js
    import domloaded from 'domloaded';

    domloaded(() => { /* dom is loaded... */ });
    ```


## Related

- [MDN: document.readyState property](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState)
- [MDN: readystatechange event](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event)
- [MDN: DOMContentLoaded event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
- [MDN: load event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)
- [jQuery.ready() Guide](https://learn.jquery.com/using-jquery-core/document-ready/)
- [jQuery.ready() API](https://api.jquery.com/ready/)
- [domready package](https://www.npmjs.com/package/domready)
- [dom-loaded package](https://www.npmjs.com/package/dom-loaded)
