
<script lang="ts">
    import Section from '../Section.svelte'
</script>
<div class="container mx-auto px-8 relative mt-20">
    <Section name={"Recommended Apps"} size={4}> 
        <ul class="text-xl links mobile">
          
          <li>
            <span>Secure and fast browser:
            <a href="https://brave.com/" target="_blank">Brave</a></span>
          </li>
          <li>
            <span>Temporary email:
            <a href="https://temp-mail.org/" target="_blank">temp-mail</a></span>
          </li>
          <li>
            <span>Best note taking app:
            <a href="https://obsidian.md/" target="_blank">obsidian</a></span>
          </li>
          <li>
            <span>One app for all messages:
            <a href="https://www.beeper.com/" target="_blank">Beeper</a></span>
          </li>
          <li>
            <span>Password manager:
            <a href="https://bitwarden.com/" target="_blank">bitwarden</a></span>
          </li>
          <li>
            <span>Info about games:
            <a href="https://beforeiplay.com/" target="_blank">before I play</a></span>
          </li>
          <li>
            <span>Explore radios around the world:
            <a href="https://radio.garden/" target="_blank">Radio Garden</a></span>
            </li>
          <li>
            <span>Look on old websites:
            <a href="https://web.archive.org/" target="_blank">web archive</a></span>
          </li>
          
          <li>
            <span>Find original image:
            <a href="https://tineye.com/" target="_blank">tineye</a></span>
          </li>
          <li>
            <span>World map including anything:
            <a href="https://worldview.earthdata.nasa.gov/" target="_blank">worldview nasa</a></span>
          </li>
          <li>
            <span>Info of any country:
            <a href="https://www.cia.gov/the-world-factbook/" target="_blank">the world factbook</a></span>
          </li>
         
          
        </ul>
    </Section>
      <a href="/" class="btn btn-ghost animation bg-[#7289da] hover:bg-[#7289da] shadow-[6px_6px_0_0_rgba(114,137,218,0.5)] hover:brightness-50">Go Back</a>
</div>
<style>
.links a {
    color: #1eaedb;
    text-decoration: none
}
.links a:hover {
    color: #0fa0ce
}
</style>