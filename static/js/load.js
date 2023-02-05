async function loadRes(url){
  const response = await fetch(url);
  document.getElementById("header").innerHTML = await response.text();
}

const header = "https://paguricablati.github.io/header.html";
loadRes(header);