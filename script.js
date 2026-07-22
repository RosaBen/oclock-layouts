const actors = [{
  name: "simon astier",
  url: "https://fr.wikipedia.org/wiki/Simon_Astier"
},
{
  name: "alban lenoir",
  url: "https://fr.wikipedia.org/wiki/Alban_Lenoir"

}, {
  name: "sébastien lalanne",
  url: "https://fr.wikipedia.org/wiki/S%C3%A9bastien_Lalanne"
}, {
  name: "gérard darier",
  url: "https://fr.wikipedia.org/wiki/G%C3%A9rard_Darier"
},
{
  name: "agnès boury",
  url: "https://fr.wikipedia.org/wiki/Agn%C3%A8s_Boury"
},
{
  name: "françois podetti",
  url: "https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Podetti"
},
{
  name: "arnaud joyet",
  url: "https://fr.wikipedia.org/wiki/Arnaud_Joyet"
},
{
  name: "philippe noël",
  url: "https://fr.wikipedia.org/wiki/Philippe_No%C3%ABl"
},
{
  name: "etienne fague",
  url: "https://fr.wikipedia.org/wiki/%C3%89tienne_Fague"
},
{
  name: "aurore pourteyron",
  url: "https://fr.wikipedia.org/wiki/Aurore_Pourteyron"
}
];

const div = document.querySelector(".actors");

actors.forEach(element => {
  const link = document.createElement("a");
  link.textContent = element.name;
  link.href = element.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  div.appendChild(link);
});