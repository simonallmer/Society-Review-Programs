# Embedding Instructions

To embed the **Society Review Programs** page into simonallmer.com in fullscreen, use this code:

## Fullscreen Embed Code

```html
<style>
  .fullscreen-embed-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 9999;
  }
  .fullscreen-embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>

<div class="fullscreen-embed-container">
  <iframe 
    src="https://simonallmer.github.io/Society-Review-Programs/" 
    allowfullscreen>
  </iframe>
</div>
```

## Alternative: Viewport Height (if you have a header)

```html
<style>
  .embed-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>

<div class="embed-container">
  <iframe 
    src="https://simonallmer.github.io/Society-Review-Programs/" 
    allowfullscreen>
  </iframe>
</div>
```
