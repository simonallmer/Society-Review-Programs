# Embedding Instructions

To embed the **Society Review Programs** page into another website (like Squarespace, WordPress, or a custom site), you can use an HTML `iframe`.

## Option 1: Safe Full Screen (Recommended)
Use this code to fill the screen while avoiding your site's header/navigation.

```html
<style>
  .safe-embed-container {
    position: relative;
    width: 100%;
    /* 85vh is usually safer than 100vh to avoid covering headers/footers */
    height: 85vh; 
    overflow: hidden;
    z-index: 1; /* Low z-index to ensure it stays behind your site's dropdowns/header */
  }
  .safe-embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>

<div class="safe-embed-container">
  <iframe 
    src="https://simonallmer.github.io/Society-Review-Programs/" 
    allowfullscreen>
  </iframe>
</div>
```

## Option 2: Standard Embed (Fixed Height)
Use this code if you want the window to have a specific height (e.g. 800px).

```html
<iframe 
  src="https://simonallmer.github.io/Society-Review-Programs/" 
  width="100%" 
  height="800" 
  frameborder="0" 
  style="border:0; width:100%;" 
  allowfullscreen>
</iframe>
```

## Squarespace Specifics
1. Add a **Code Block** to your page.
2. Paste the code from **Option 1** or **Option 2** into the block.
3. Make sure "Display Source" is **unchecked**.
4. Save and refresh the page.
