import { mount as svelteMount } from "svelte";
import App from "./App.svelte" with { type: "module" };

export const harborMini = "svelte";
export function harborMount(target: HTMLElement, harborApi: any) {
  svelteMount(App, { target, props: { yeye: "yeyeye" } });
}
