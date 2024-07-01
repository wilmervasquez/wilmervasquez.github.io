<script lang="ts">

</script>
<svg id="gh" width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <circle r="30" cx="50" cy="50" fill="green">
    <animate attributeName="cx" values="30;50;100;50;90;30" dur="5s" repeatCount="indefinite" />
    <animate attributeName="fill" values="red;blue;yellow;red" dur="10s" repeatCount="indefinite" />
  </circle>
  {#each {length:20} as _,i}
    
    <line stroke="url(#linear)" stroke-width="1" x1={i*40} y1="9" x2={i*40+100} y2="100" />
  {/each}
  <linearGradient id="linear" x1="9%" y1="9%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#ffffff00" />
    <stop offset="50%" stop-color="#fff" />
    <stop offset="100%" stop-color="#ffffff00" />
  </linearGradient>
</svg>
<style>

</style>