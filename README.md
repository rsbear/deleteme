#  Harbor Mini‑App Entry Point (`harbor.ts`) sup

Every Harbor mini‑app must include a **`harbor.ts(x)`** file at its root.  
This file tells Harbor **what framework the app uses** and provides the functions Harbor calls to mount/unmount the app inside the host.

---

##  Required Exports

### 1. `harborMini`
A string literal that declares the framework.  
For Svelte apps:

```ts
export const harborMini = "svelte";
```

This is how the bundler detects which pipeline to use (`rollup-plugin-svelte` for Svelte).

---

### 2. `harborMount(el: HTMLElement)`
A function that Harbor calls when it wants to render your app into the `shipment-slot` container.  
It should create a new Svelte `App` instance and mount it into the provided element.

---

### 3. `unmount?()`
An **optional** cleanup function.  
If your app needs to tear down state, remove event listeners, or destroy the Svelte component, you can export `unmount`.

---

##  Example `harbor.ts` for Svelte

```ts
// harbor.ts
import App from "./App.svelte";

export const harborMini = "svelte";

let app: App | null = null;

export function harborMount(el: HTMLElement) {
  app = new App({
    target: el,
    props: {
      // optional: pass initial props here
    },
  });
}

export function unmount() {
  if (app) {
    app.$destroy();
    app = null;
  }
}
```

---

##  Example Project Structure

```
mini-svelte-app/
├── App.svelte
├── harbor.ts
├── package.json
└── tsconfig.json
```

---

##  How Harbor Uses It

1. **Bundler**  
   - Detects `harborMini = "svelte"`.  
   - Runs Rollup with `rollup-plugin-svelte`.  
   - Produces a single `bundle-<alias>.js`.  

2. **Host App (Harbor)**  
   - Loads the bundle dynamically.  
   - Calls `harborMount(slotElement)` to render the app.  
   - If the user switches apps, Harbor may call `unmount()` to clean up.

---

##  Summary

- Always export `harborMini = "svelte"`.  
- Always export `harborMount(el)`.  
- Optionally export `unmount()`.  
- Harbor handles the HTML container and Tailwind — your app just needs to render itself.  


