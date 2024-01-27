<script>
    export let name;
    export let size;
  </script>
  
  <div class="flex flex-col mb-8">
    <h2 class="{`text-${size}xl`} text-nox mb-8 font-bold">{name}</h2>
    <div class="sm:ml-10">
        <slot />
    </div>
  </div>