# domloaded

This micro-library will allow you to easily delay code execution until the DOM is loaded.

## Install w/ Express

First install the npm package.

```
npm install domloaded
```

Then serve the built script files up.

```
app.use('/domloaded', express.static('node_modules/domloaded/dist'));
```

And finally link the script in your HTML/view.

```
<script src="/domloaded/ready.min.js"></script>
```

## Usage

It's easy. Works like this:

```
domloaded(() => { /* dom is loaded... */ });
```

## Related

- [document.readyState property](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState)
- [readystatechange event](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event)
- [DOMContentLoaded event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
- [load event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)
- [jQuery.ready() Guide](https://learn.jquery.com/using-jquery-core/document-ready/)
- [jQuery.ready() API](https://api.jquery.com/ready/)
- [domready package](https://www.npmjs.com/package/domready)
