<script lang="ts">
import Background from './Background.svelte';
import Projects from './Projects.svelte'
import Section from './Section.svelte'
import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'


window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var logoContainer = document.getElementsByClassName('arrow')[0];
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled');
  else logoContainer.classList.remove('arrow--scrolled');
});
</script>

<div class="bg-main relative">
    <Background />
    <div class="container mx-auto mb-10 mt-6 max-w-1100 px-8 relative w-full" use:scrollRef={'information'}>
        <Section name={"About Me"} size={5}>
            <p class="text-justify text-xl">
                Hey everyone! Welcome to my portfolio page. My name is <span style="color: aquamarine;">Tomas</span>, known as <span style="color: aquamarine;">Noxyyk</span> on social media. I live in Czech Republic and currently working as <span style="color:darkcyan">electrical assembly worker</span> and would like to introduce myself.<br><br>  I have experience as an admin on the Rocket League trading server and as an admin, documentarist and developer for open-source Scratch for Discord. At the moment I am working on <a style="color: #7976e7" href="https://www.discodes.xyz/" target="_blank">Discodes</a>.
                <br><br>If you'd like to get in touch, feel free to reach me out on Discord <span style="background-color: #292828;border-radius: 7px;padding-left: 2px;padding-right: 2px;">@noxyyk</span>.
            </p> 
        </Section>
        <Section name={"Skills and Abilities"} size={5}>
                <ul class="text-xl mb-4 mobile">
                  <li>Communication with people</li>
                  <li>PC skills:</li>
                  <ul>
                    <li>Ms Office (Word, Excel, Access, Visio)</li>
                    <li class="flex items-center mb-1 gap-1">
                        <span>Adobe: </span>
                        <img src="https://skillicons.dev/icons?i=ps,pr,ae" />
                      </li>
                    <li class="font-bold sm:font-normal mb-10 sm:mb-0">Programming:</li>
                    <ul class="flex flex-col gap-6">
                      <li class="flex items-center mb-1 gap-1">
                          <span>Languages: </span>
                          <div class="flex gap-2 flex-col sm:flex-row">
                        <img src="https://skillicons.dev/icons?i=html,css,tailwind" />
                        <img src="https://skillicons.dev/icons?i=js,ts,nodejs" />
                    </div>
                      </li>
                      <li class="flex items-center mb-1 gap-1">
                        <span>Frameworks: </span>
                    <div>
                        <img src="https://skillicons.dev/icons?i=svelte,vite,react" />
                    </div>
                      </li>
                      <li class="flex items-center mb-1 gap-1">
                          <span>Other tools: </span>
                          <div class="flex gap-2 flex-col sm:flex-row">
                        <img src="https://skillicons.dev/icons?i=supabase,mongo,vercel" />
                        <img src="https://skillicons.dev/icons?i=regex,github,vscode" />
                    </div>
                      </li>
                    </ul>
                  </ul>
                  <li>Quick learning</li>
                  <li>Planning and organizational skills</li>
                </ul>
                <Section name={"Languages"} size={4}>
                    <ul>
                        <li class="text-xl">English - intermediate</li>
                        <li class="text-xl">Czech - native</li>
                      </ul>
                </Section>
        </Section>
        <Section name={"Quick Facts"} size={4}>
            <ul class="text-xl text-justify mobile">
                <li>I like English more than my native language</li>
                <li>I accept people who eat pineapple on pizza</li>
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