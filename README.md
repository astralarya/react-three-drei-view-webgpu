# React-Three/Drei View with WebGPU demo

Setup with:
```bash
pnpm install
pnpm dev
```

## Notes

The render canvas is styled to cover the entire viewport.
The view div is outlined in red and is setup to be in the upper left corner of the viewport.
Note how the scene is rendering in the bottom left corner.

Commenting out the `gl={}` prop of the `<Canvas>` component in `./src/App.tsx`
switches the app from WebGPU to WebGL rendering.
The scene will then render inside the red box as expected.