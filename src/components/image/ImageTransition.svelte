<script lang="ts">
  let imgs = $state([
    'https://cdn.svglogos.dev/logos/javascript.svg',
    'https://cdn.svglogos.dev/logos/java.svg',
    'https://cdn.svglogos.dev/logos/git-icon.svg'
  ])

  setInterval(() => {
    imgs = [imgs[2], imgs[0], imgs[1]]
  }, 2000);
</script>
<div class="flex flex-col gap-10">
  {#each imgs as src}
    <div class="flex gap-5">
      <div class="xc flex relative transition-all">
        <img src={src} alt="" class=" size-30">
        <img src={src} alt="" class="absolute top-0 blur-lg scale-200 -z-10 size-30">
      </div>
      <div class="">

        <div class="text-2xl font-bold">Java</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis dolorum ipsam suscipit esse id quaerat quia culpa ea facere. Veritatis aliquam voluptate ut eius, nulla illo doloremque? Eligendi, temporibus.</p>
      </div>
    </div>
  {/each}
</div>
<style>
  .xc {
    animation: wer 2s forwards;
  }

  .xc:nth-child(1) {
    top: 40px;
  }
  .xc:nth-child(2) {
    top: 20px;
  }
    .xc:nth-child(3) {
    top: 0px;
  }
  @keyframes wer {
    0% {
      opacity: 0;
      transform: translateX(10px);
    }
    100% {
      opacity: 100%;
      transform: translateX(0px);
    }
  }
</style>