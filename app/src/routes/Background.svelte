<script lang="ts">
    import { onMount } from "svelte";
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
    export let current
    console.log(current)
    const images = [
      "./Images/bgs/bg.gif",
      "./Images/bgs/bg1.gif",
      "./Images/bgs/bg2.gif",
      "./Images/bgs/bg3.gif",
      "./Images/bgs/bg4.gif",
      "./Images/bgs/bg5.webp",
    ];
  
    let backgroundImage = "";
  
    onMount(() => {
      backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
    });
  </script>

<div class="relative">
  <div
  class="background absolute top-0 left-0 w-full h-full bg-cover bg-center filter brightness-50 blur-sm bg-fixed bg-no-repeat"
    style="background-image: {backgroundImage};"
  />
   
  <div class="flex flex-col justify-center items-center h-screen gap-6 relative z-10 text-white">
    <figure><img src="../Images/logo.png" class="w-28 h-28 sm:w-32 sm:h-32 rounded-full" /></figure>
    <h1 class="text-3xl sm:text-4xl tracking-wider drop-shadow-[6px_6px_rgba(0,0,0,0.4)]">Noxyyk</h1>
    <h3 class="text-center text-lg tracking-widest drop-shadow-[3px_3px_rgba(0,0,0,0.4)]">To have a rainbow, you also need some rain</h3>
    <div class="flex flex-col items-center">
        <div class="flex flex-row gap-4 flex-wrap mx-4 sm:mx-0">
          <a href="https://github.com/noxyyk" target="_blank" class="btn grow btn-ghost animation bg-[#292d32] hover:bg-[#292d32] shadow-[6px_6px_0_0_rgba(41,45,50,0.5)] hover:brightness-50">GitHub</a>
          <a href="https://www.instagram.com/noxyyk/" target="_blank" class="btn grow btn-ghost animation bg-[#c32aa3] hover:bg-[#c32aa3] shadow-[6px_6px_0_0_rgba(195,42,163,0.5)] hover:brightness-50">Instagram</a>
      <!-- use 
      to get current song and then hide/show music and make a page /dj showing top songs, last, on repeast  etc etc
      -->
          <a href="https://www.last.fm/user/Noxyyk" target="_blank" class="btn grow btn-ghost animation bg-[#ba0000] hover:bg-[#ba0000] shadow-[6px_6px_0_0_rgba(186,0,0,0.5)] hover:brightness-50">Last.fm</a>
          <a href="https://www.youtube.com/channel/UCtVmkvYCBsi2QpDP_43RxMg" target="_blank" class="grow btn btn-ghost animation bg-[#ff0000] hover:bg-[#ff0000] shadow-[6px_6px_0_0_rgba(255,0,0,0.5)] hover:brightness-50">YouTube</a>
          <a href="https://discord.gg/Bb7AGCpGNX" target="_blank" class="btn grow btn-ghost animation bg-[#7289da] hover:bg-[#7289da] shadow-[6px_6px_0_0_rgba(114,137,218,0.5)] hover:brightness-50">Discord</a>
        </div>
        <div class="flex flex-row flex-wrap justify-center gap-0 sm:gap-4">
            <img style="margin-top: 15px;pointer-events:none" class="sts animation" src="https://dev.discordprofiles.me/badge/status/513095506914705418?simple=true" alt="status" title="status" loading="lazy">
            <img style="margin-top: 15px;pointer-events:none" class="sts animation" src="https://dev.discordprofiles.me/badge/playing/513095506914705418" alt="playing" title="current game" loading="lazy">
            <img style="margin-top: 15px;pointer-events:none" class="sts animation" id="vscode" src="https://dev.discordprofiles.me/badge/vscode/513095506914705418" alt="vscode" title="coding in VS Code" loading="lazy">
            <!-- <a style="margin-top: 15px" class="sts animation" href="https://dev.discordprofiles.me/openspotify/513095506914705418" target="_blank" rel="noopener"><img style="height: 22px" src="https://dev.discordprofiles.me/badge/spotify/513095506914705418" alt="spotify" title="listening with Spotify" loading="lazy"></a> -->
        </div>
        
        {#if current}
        <div class="flex flex-col justify-center items-center gap-8 sm:gap-6 mt-4">
          <div class="relative sts animation animation-1">
            <img class="rounded-3xl shadow-lg" src={current.image[3]["#text"]} alt="{current.name}" height="100px" width="100px">
            <a class="absolute bottom-0 right-0 bg-white rounded-full p-1" href={current.url}>
              <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </a>
          </div>
          <p class="text-lg font-bold text-center">
            <span class="text-lg sts animation animation-2">{current.name}</span>
            <br>
            <span class="text-sm text-gray-400 sts animation animation-3">{current.artist["#text"]}</span>
          </div>
          {/if}
          
          <div use:scrollTo={{ ref: 'information', duration: 500 }} id="fade" class="arrow bounce"></div>
  </div>
  </div>
</div>

