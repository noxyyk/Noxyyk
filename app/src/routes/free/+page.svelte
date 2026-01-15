<script lang="ts">
    import { goto } from "$app/navigation";
    let elem = document.documentElement;
    function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
openFullscreen()
onkeydown = (event) => {
    event.preventDefault()
    goto("./free2")
};
onmousedown = (event) => {
    event.preventDefault()
    goto("./free2")
};
window.addEventListener('contextmenu', function (e) { 
  e.preventDefault(); 
}, false);
window.addEventListener("click", async () => {
  await document.requestPointerLock();
});
</script>
<style>
    .nocursor { cursor:none; }
    * { box-sizing: border-box; }
    .video-background {
        background: #000;
        position: fixed;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -99;
    }
    .video-foreground,
    .video-background iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    @media (min-aspect-ratio: 16/9) {
        .video-foreground { height: 300%; top: -100%; }
    }
    @media (max-aspect-ratio: 16/9) {
        .video-foreground { width: 300%; left: -100%; }
    }
    @media all and (max-width: 600px) {
        .vid-info { width: 50%; padding: .5rem; }
        .vid-info h1 { margin-bottom: .2rem; }
    }
    @media all and (max-width: 500px) {
        .vid-info .acronym { display: none; }
    }
</style>
<div class="video-background nocursor" oncontextmenu={(e) => e.preventDefault()}>
    <div class="video-foreground">
        <iframe title="Video" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&enablejsapi=1&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
    </div>
  </div>