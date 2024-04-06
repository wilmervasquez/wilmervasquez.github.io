<script lang="ts">
  const curric = [{},{},{},{}] 
</script>
<div>
  {#each curric as m}
  
    <div class="cardm flex relative flex-col pb-2 pl-5">
      <div class="circle absolute w-5 h-5 -left-3 bg-neutral-700 border-2 rounded-full border-gray-400"></div>
      <h3 class="font-bold">New Branch</h3>
      <p class="text-sm dark:text-white text-opacity-60">You've created new branch fix-notifications from master</p>
      <time datetime="" class="text-sm">52 minutes ago</time>
    </div>
  {/each}
</div>
<style>
  .cardm{
    border-left: 2px solid transparent;
  }
  .cardm:first-child > .circle{
    border-color: greenyellow;
    background-color: hsl(84, 100%, 29%)  }

  
  .cardm:not(:last-child){
    border-left: 2px dashed gray;
  }
</style>