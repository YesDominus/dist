document.addEventListener("DOMContentLoaded", async () => {
  const utilsFile = await fetch("https://cdn.jsdelivr.net/gh/YesDominus/dist@main/brand-fanduel.min.js");
  const utilsText = await utilsFile.text();
  eval(utilsText);
  console.log(fanduel);
});
