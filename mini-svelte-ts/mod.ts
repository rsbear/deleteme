import { mount as svelteMount } from "svelte";
import App from "./App.svelte";

export function harborMini(target: HTMLElement) {
  svelteMount(App, { target, props: { yeye: "yeyeye" } });
}
