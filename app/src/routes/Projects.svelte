<script lang="ts">
    import { onMount } from "svelte";
  
    const images = [
      "./Images/projectbg.gif",
      "./Images/projectbg2.gif"
    ];
  
    let backgroundImage = "";
  
    onMount(() => {
      backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
    });
  </script>

<div class="flex relative justify-center h-[75vh] sm:h-[50vh]">
    
    <div
    class="background aspect-video h-full absolute w-full bg-cover bg-center filter brightness-50 blur-sm bg-fixed bg-no-repeat"
      style="background-image: {backgroundImage};"
    />
<div class="flex flex-col items-center justify-center gap-4 relative z-10 text-white">
                <h1 class="text-7xl text-center font-bold drop-shadow-[6px_6px_rgba(0,0,0,0.4)]">Projects</h1>
                <div class="flex flex-row gap-4  flex-wrap mx-4 sm:mx-0">
                    <a href="./free" class="btn btn-ghost grow animation bg-[#ff0000] hover:bg-[#ff0000] shadow-[6px_6px_0_0_rgba(255,0,0,0.5)] hover:brightness-50" target="_blank">Random</a>
                    <a href="https://github.com/Dis-codes" class="btn btn-ghost grow animation bg-[#918ef1] hover:bg-[#918ef1] shadow-[6px_6px_0_0_rgba(145,142,241,0.5)] hover:brightness-50" target="_blank">DisCodes</a>
                    <a href="./u" class="btn btn-ghost grow animation bg-[#007bb5] hover:bg-[#007bb5] shadow-[6px_6px_0_0_rgba(0,123,181,0.6)] hover:brightness-50">URL shortener</a>
                    <!-- <a href="https://vizualizacni-portal.noxyyk.com" class="btn animation twitter hover" target="_blank">Visualization Portal</a> -->
                    <!-- <a href="https://todo.noxyyk.com" class="btn animation spotify hover" target="_blank" style="color: #fff;">React to-do list</a> -->
                </div>
                <div class="flex flex-row gap-4">
                    <!-- <a href="https://discord.gg/SRNZe3g3pY" class="btn animation discord hover" target="_blank">Discord Bots</a> -->
                    <!-- <a href="https://github.com/retrouser955/scratch-for-discord" class="btn animation scratch hover" target="_blank" style="color: #fff;">Scratch for Discord</a> -->
            </div>
            </div>
</div>
