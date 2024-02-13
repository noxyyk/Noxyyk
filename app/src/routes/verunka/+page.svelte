<script>
   let herResponses = [
  "Ne.",
  "Nene.",
  "Ne, díky.",
  "Ne, fakt nechci.",
  "Nemyslím si, že bych chtěla.",
  "Jsem si docela jistá, že nechci.",
  "Vážně ne, ale díky za otázku.",
  "Rozhodně ne.",
  "To není moje věc.",
  "Moc hezké, ale raději ne.",
  "Děkuji za nabídku, ale ne.",
  "Nechci se zavazovat.",
  "Nemyslím, že bych měla zájem.",
  "Nejsem připravena na vztah.",
  "Není to to, co momentálně hledám.",
  "Asi ne teď.",
  "Nechci zklamat, ale odpověď je ne.",
  "Prostě ne.",
  "Mám jiné priority v životě.",
  "Myslím, že bych měla zůstat samostatná.",
];
let count = 0
let size = 25
let btnFontSize = `${size}px`;
</script>
<h1 class="text-3xl sm:text-5xl">Budeš mojí Valentýnkou?</h1>
<div class="flex flex-row gap-6 mt-6">
    <a href="verunka/anoooooo" class="btns" style="font-size: {btnFontSize}">Ano</a>
    <button class="btns" on:click={() => {console.log(count, herResponses.length);count >= herResponses.length - 1? (count = herResponses.length -1) : (count += 1);size+=15;btnFontSize = `${size}px`}}>{herResponses[count]}</button>
</div>
<div class="mt-20">
    <img src="Images/giphy.gif" alt="hahah">
</div>