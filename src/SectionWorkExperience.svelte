<script lang="ts">
  const experiencies = [{
    title: "Semillero de Investigación en MerakT",
    time: "Actualmente"
  },{
    title: "Universidad",
    time: "2021-2023"
  },{
    title: "Fronted Developer",
    time: "2021-2023"
  }]
</script>
<section class="flex  flex-col gap-3">
  <h2 class="font-black font-mono text-lg">Work Experience</h2>
  {#each experiencies as {title, time}}
    <div class="card-timeline font-mono flex gap-2">
      <div class="flex flex-col gap-1 items-center">
        <img class="rounded-full w-6" src="https://mighty.tools/mockmind-api/content/cartoon/25.jpg" alt="">
        <div class="line flex-grow w-0.5 bg-gray-300 dark:bg-gray-500"></div>
      </div>
      <div class="flex flex-col pb-3">
        <h3 class="font-bold">{ title }</h3>
        <p class="text-sm text-neutral-500">{ time }</p>
      </div>
    </div>
  {/each}
</section>
<style lang="postcss">
  .card-timeline:last-child .line{
    @apply flex-grow-0;
  }
</style>