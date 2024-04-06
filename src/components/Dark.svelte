<script lang="ts">
  import { onDestroy } from "svelte";
  import {user} from "../lib/store";

  let theme = false;
  const unsuscribe = user.theme.subscribe((n)=>{
    theme = n
  })

  onDestroy(unsuscribe)
</script>

<button
  class="text-red-400 dark:text-yellow-300 cursor-pointer"
  on:click={() => {
    user.theme.changeTheme()
     }}>{theme ? 'light':'dark'}</button>

<style>
</style>
