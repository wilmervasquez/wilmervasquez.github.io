<script lang="ts">
  import SvgHex from "./SVGHex.svelte";
  import SectionStack from "./SectionStack.svelte";
  import SectionWorkExperience from "./SectionWorkExperience.svelte";
  import Dark from "./components/Dark.svelte";
  import TimeLine from "./components/TimeLine.svelte";

  
</script>

<main class="overflow-hidden">
  <div class="shapes"></div>
  <div class="shapes"></div>
  <div class="shapes"></div>
  <Dark/>
  <section>
    <div class="flex gap-4">
      <div class="w-40 h-40 bg-gray-600 rounded-2xl flex-shrink-0 overflow-hidden">
        <img class="" src="/images/avatar.jpg" alt="">
      </div>
      <div class="flex flex-col justify-between flex-grow">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2 font-bold bg-green-200 dark:bg-green-800 pr-4 pl-2 text-sm text-green-800 dark:text-green-400 rounded-3xl">
            <div class="w-2 h-2 bg-green-800 dark:bg-green-400 rounded-2xl"></div>
            <p>Avaible for work</p>
          </div>
          <!-- REDES SOCIALES -->
          <div class="flex cursor-pointer gap-2">
            <div class="rounded-lg hover:bg-neutral-600 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#aaa" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </div>
            <div class="rounded-lg hover:bg-neutral-600 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" class="stroke-neutral-500 dark:stroke-neutral-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"/></svg>
            </div>
            <div class="rounded-lg hover:bg-neutral-600 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" class="stroke-neutral-500 dark:stroke-neutral-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/></svg>
            </div>
          </div>
        </div>
        <h1 class="text-3xl font-bold">Hi there! I'm Wilmer!</h1>
        <p class="text-sm dark:text-gray-300">I'm a versatile creator shaping captivating experiences across diverse design landscapes</p>
        <div class="flex justify-between">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" class="stroke-neutral-500 dark:stroke-neutral-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/></g></svg>
            Huanuco, Perú
          </div>
          <div class="flex items-center gap-2">
            More bout Me
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" class="stroke-neutral-500 dark:stroke-neutral-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  <SectionStack/>
  <SectionWorkExperience/>
  <section>
    <!-- <SvgHex/> -->
  </section>
  <div class="linex self-stretch"></div>
  <section>
    <TimeLine/>
    <div class="flex p-3 items-center justify-between">

      <!-- <h2 class="text-green-300 text-2xl font-bold">Stack</h2>
      <div class="flex text-sm">
        Full Stack
      </div> -->
    </div>
    <div class="flex gap-4 items-center">
      <div class="branch relative py-8 flex-shrink-0">
        <div class="line w-0.5 top-0 h-full absolute"></div>
        <img class="w-10" src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg" alt="">
       
      </div>
      <div class="flex flex-col flex-shrink gap-1">
        <div class="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-green-500 dark:fill-green-300fill-green-300" d="M4 19V8zv-.375zm0 2q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.45-.325-.95-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm6-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m.5-5.2V15h-1v3.2l2.15 2.15l.7-.7z"/></svg>
          <p class="text-green-500 dark:text-green-300">Experience</p>
        </div>
        <h2 class="text-3xl font-bold">Experience en Frontent</h2>
        <p class="text-white text-opacity-70">
          
          Link your Github repository, and leverage the MDX, OpenAPI documents for website generation, while keeping the contents live alongside your codebase.</p>
      </div>
    </div>
    <div class="flex gap-4 items-center">
      <div class="branch relative py-8 flex-shrink-0">
        <div class="line w-0.5 top-0 h-full absolute "></div>
        <img class="w-10" src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg" alt="">
       
      </div>
      <div class="flex flex-col flex-shrink gap-1">
        <div class="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-green-300" fill-rule="evenodd" d="M10.47 3.554a4 4 0 1 1 3.06 7.391a4 4 0 0 1-3.06-7.39M12 4.75a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-6.53 7.805a4 4 0 1 1 3.061 7.391a4 4 0 0 1-3.062-7.392M7 13.75a2.5 2.5 0 1 0 0 5.001a2.5 2.5 0 0 0 0-5.001m10-1.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-.957 1.69a2.5 2.5 0 1 1 1.914 4.62a2.5 2.5 0 0 1-1.914-4.62" clip-rule="evenodd"/></svg>
          <p class="dark:text-green-300">Projects</p>
        </div>
        <h2 class="text-3xl font-bold"> Project for Fronted</h2>
        <p class="text-white text-opacity-70">
          
          Link your Github repository, and leverage the MDX, OpenAPI documents for website generation, while keeping the contents live alongside your codebase.</p>
      </div>
     
    </div>
  </section>
</main>

<style>
  main{
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
    position: relative;
  }
 
  .linex{
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg,transparent,white,transform);
  }
  @keyframes scf{
    0%,100%{
      scale: 0.3;
    }
    50%{
      scale: 2;
    }
    
  }

    
  .line{
    background-image: linear-gradient(0deg,transparent,#2ea043,#2ea043,transparent);
  }
  /* .shapes{
    position: absolute;
    width: 50%;
    z-index: -2;
    height: 50%;
    background-color: rgba(137, 43, 226, 0.2);
    filter: blur(50px);
    z-index: 0;
    border-radius: 100%;
    animation: 8s scf infinite;
    transform: translate(10%,10%);

  } */
  .shapes:nth-child(2){
    transform: translate(80%,50%);
    background-color: rgba(172, 255, 47, 0.2);
    animation: 8s scf infinite;

  }
  .shapes:nth-child(3){
    transform: translate(10%,90%);
  
    background-color: rgba(255, 141, 47, 0.2);
    animation: 8s scf infinite linear;

  }
  section{
    background-color: rgba(56, 56, 56, 0);
    @apply rounded-2xl;
    z-index: 1;
  }
</style>
