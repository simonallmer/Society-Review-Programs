# Embedding Instructions

To embed the **Society Review Programs** page into another website (like Squarespace, WordPress, or a custom site), you can use an HTML `iframe`.

## Option 1: Standard Embed (Fixed Height)
Use this code if you want the window to have a specific height.

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

## Option 2: Full Screen / Responsive Embed
Use this code if you want the embed to take up the full available width and height of its container.

```html
<style>
  .embed-container {
    position: relative;
    width: 100%;
    height: 100vh; /* Adjust this to 800px or similar if you don't want it to fill the screen */
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

## Squarespace Specifics
1. Add a **Code Block** to your page.
2. Paste the code from **Option 1** or **Option 2** into the block.
3. Make sure "Display Source" is **unchecked**.
4. Save and refresh the page.
