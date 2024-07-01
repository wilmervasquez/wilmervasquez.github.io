<script lang="ts">
  const stacks = [{
    icon:"https://framerusercontent.com/images/nQwkPe6iw9Q1WXAIuP6kSV6sXco.svg",
    name:"Figma",
    description:"Collaborative Design"
  },{
    icon:"https://framerusercontent.com/images/uv8pgnBL3RB8Ctw1E95TVWj5U.svg",
    name:"Notion",
    description:"Profesional Notes"
  },{
    icon:"https://framerusercontent.com/images/Xte9NzRRy74yXEiyjWykEmlyVRA.svg",
    name:"HTML",
    description:"Strcture and Content"
  },{
    icon:"https://framerusercontent.com/images/LKlrGEkvvSunNXQZWYv8aso0.svg",
    name:"React JS",
    description:"Dynamic Develoment"
  },{
    icon:"https://framerusercontent.com/images/LKlrGEkvvSunNXQZWYv8aso0.svg",
    name:"Python",
    description:"Framework Django"
  }]
</script>
<section>
  <div class="head">

  </div>
  <div class="flex gap-3 flex-wrap">
    {#each stacks as {icon,name,description}}
      <div class="box p-2 pr-4 after:bg-gray-100 dark:after:bg-neutral-800">
        <img src={icon} alt="">
        <div class="flex flex-col">
          <h3>{name}</h3>
          <p class="dark:text-gray-400 text-sm">{description}</p>
        </div>
      </div>
       
    {/each}
  </div>
</section>
<style>

  .box{
    position: relative;
    /* width: 200px; */
    /* background-color: hsla(0, 0%, 15%, 0.233); */
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
  @keyframes rotate{
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }
  }
 .box::before{
    content: '';
    position: absolute;
    inset: -100cqi;
    background: conic-gradient(
      hsl(278, 0%, 40%),
      rgb(26, 26, 26),
      #272727,
      hsl(278, 0%, 40%)
    );
    animation: rotate 4s linear infinite;
  }
  .box::after{
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 9px;
  }
  .box *{
    z-index: 1;
  }
</style>