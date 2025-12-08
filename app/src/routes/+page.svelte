<script lang="ts">
import Background from './Background.svelte';
import Projects from './Projects.svelte'
import Section from './Section.svelte'
import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
export let data

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var logoContainer = document.getElementsByClassName('arrow')[0];
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled');
  else logoContainer.classList.remove('arrow--scrolled');
});
</script>

<div class="bg-main relative">
    <Background current={data?.meta?.current} />
    <div class="container mx-auto mb-10 mt-6 max-w-1100 px-8 relative w-full" use:scrollRef={'information'}>
<Section name={"About Me"} size={5}>
    <p class="text-justify text-xl">
        Hey and welcome to my portfolio page! My name is <span style="color: aquamarine;">Tomas</span>, known online as <span style="color: aquamarine;">Noxyyk</span>. I live in the Czech Republic and am a passionate <b>developer</b> and <b>community builder</b>.

        While I currently work as an <span style="color:darkcyan">electrical assembly worker</span>, in my free time I focus on software development and managing online communities, particularly on <span style="color:darkcyan">Discord</span>.
        <br><br>
        Currently working on a web app that visualizes your portfolio and shows some stats.
        <br><br>
        My main skills include:
        <br>
        <li class="flex items-center mb-1 gap-1">- <b>Web Development - </b>Building responsive and user-friendly websites using <div class="flex gap-2 flex-col sm:flex-row"><img src="https://skillicons.dev/icons?i=svelte,tailwindcss" /></div></li>
        <li class="flex items-center mb-1 gap-1">- <b>Discord Bot Development - </b><span>Creating custom, scalable bots using </span><div class="flex gap-2 flex-col sm:flex-row"><img src="https://skillicons.dev/icons?i=nodejs" /></div></li>
        - <b>Community Management:</b> Managing Discord communities<br> 
        - <b>Documentation & Open Source:</b> Contributing to open-source projects, and writing documentation, primarily using Markdown.<br><br>
        If you are looking for something I could help you with, <b>feel free to</b> reach me out on discord: <span style="background-color: #292828;border-radius: 7px;padding-left: 2px;padding-right: 2px;">@noxyyk</span><br>
    </p> 
</Section>
        <Section name={"Skills and Abilities"} size={5}>
                <ul class="text-xl mb-4 mobile">
                  <li>Communication with people</li>
                  <li>PC skills:</li>
                  <ul>
                    <li class="flex items-center mb-1 gap-1">Ms Office (Word, Excel)</li>
                    <li class="flex items-center mb-1 gap-1">
                        <span>Adobe: </span>
                        <img src="https://skillicons.dev/icons?i=ps,pr" />
                      </li>
                  </ul>
                  <li>Quick learning</li>
                  <li>Planning and organizational skills</li>
                </ul>
                <Section name={"Languages"} size={4}>
                    <ul>
                      <li class="text-xl">Czech - native</li>
                        <li class="text-xl">English - intermediate</li>
                      </ul>
                </Section>
        </Section>
        <Section name={"Quick Facts"} size={4}>
            <ul class="text-xl text-justify mobile">
                <li>I like English more than my native language</li>
                <li>I love listening to music, anything... just send me a song</li>
                <li>I suck at learning a new language, but I'm quite an expert at using Google Translate</li>
                <li>I love the color <span class="text-nox">Spearmint Green</span> and have even memorized the RGB & Hex values for it</li>
            </ul>
        </Section>
        <Section name={"Other Pages"} size={4}>  
                <!-- <a href="/games" class="btn animation discord hover">Games I have played</a> -->
                <a href="/apps" class="btn btn-ghost animation bg-[#1da1f2] hover:bg-[#1da1f2] shadow-[6px_6px_0_0_rgba(29,161,242,0.6)] hover:brightness-50">Apps I Recommend</a>
        </Section>
    </div>
    <Projects />
    <div class="container mx-auto max-w-1100 px-8 relative w-full my-20" id="end">
            <p class="text-2xl text-center"><span class="text-nox">End Of Page</span><a href="./Images/magic.gif"><span class="cursor text-nox">_</span></a>
    </div>
</div>

<div class="hidden">
    <p class="text-xl">a</p>
    <p class="text-2xl">b</p>
    <p class="text-3xl">c</p>
    <p class="text-4xl">d</p>
    <p class="text-5xl">e</p>
    <p class="text-6xl">f</p>
    <p class="text-7xl">g</p>
    <p class="text-8xl">h</p>
    <p class="text-9xl">ch</p>
  </div>