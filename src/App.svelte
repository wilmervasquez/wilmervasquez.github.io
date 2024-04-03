<script lang="ts">
  
  import { onMount } from 'svelte';

  let initialTime = 30;
  let currentTime = initialTime;
  let paragraph:HTMLElement;
  let input:HTMLInputElement
  let inputValue:string
  let letters:InfoLetter[] = []
  const TEXT = "Hoy fui uno de mis mejores dias y lo aceptamos como regalo amigos mios".toLowerCase()

  interface InfoLetter{
    letter:string
    state:"vacio" | "correct" | "incorrect" 
  }
  onMount(()=>{
    input.focus()
  })
  function gameOver() {
    
  }
  function initGame() {
    letters = TEXT.split('').map((l):InfoLetter => {return {letter:l,state:"vacio"}})
  }
  initGame()
  let letterPosition = 0;
  const intervalId = setInterval(()=>{
    currentTime--;
    if (currentTime === 0) {
      clearInterval(intervalId)
      console.log("Game Over")
      gameOver()
    }
  },1000)
  
  function onKeyUp() {
    letterPosition = inputValue.length

    let letterOfInputValue = inputValue.split('')
    for (let i = 0; i < letterOfInputValue.length; i++) {
      if (letterOfInputValue[i] === letters[i].letter) {
        letters[i].state = "correct"
      }else{
        letters[i].state = "incorrect"
        
      }
      
    }
  }
  function onKeyDown() {
    letterPosition = input.value.length 
    
  }
</script>

<main>
  <section>
    <time datetime="">{currentTime}</time>
    <p>My Portfolio</p>
    <input type="text" bind:value={inputValue} bind:this={input} on:keydown={onKeyDown} on:keyup={onKeyUp}>
  </section>
</main>

<style>
  main{
    padding: 30px;
    display: grid;
    place-items: center;
  }
  p {
 
    color: rgb(143, 143, 143);
    font-family: Cascadia Code;
    font-size: 20px;
  
    flex-wrap: wrap;
  }
  time{
    color: yellowgreen;
  }
  input{
    position: absolute;
    top: 0;
  }

  @keyframes blink{
    0%,25%{
      opacity: 1;
    }
    75%{
      opacity: 0;
    }
  }
  span {
    position: relative;
    
  }
  span.active::before{
    content: "|";
    color: violet ;
    position: absolute;
    left: -55%;
    animation: 1s blink infinite ease-in-out;
  }
  span[data-state="correct"]{
    color: rgb(238, 238, 238);
    font-weight: bold;

  }
  span[data-state="incorrect"]{
    color: rgb(255, 129, 129);
    font-weight: bold;

  }
</style>
