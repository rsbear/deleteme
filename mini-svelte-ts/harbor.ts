import { mount as svelteMount } from "svelte";

export const harborMini = "svelte";
export function harborMount(target: HTMLElement, harborApi: any) {
  import("./App.svelte").then((module) => {
    svelteMount(module, { target, props: { yeye: "yeyeye" } });
  });
}
