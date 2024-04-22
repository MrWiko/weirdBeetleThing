var headerText = document.querySelector(".spanInHeader");
headerText.style.opacity = "0";

function fadeInHeader(isItArt) {
  if (isItArt == 1) {
    var btn = document.querySelector(".backToHome");
    btn.style.opacity = "0";
    btn.style.transitionDuration = "1s";
    btn.style.opacity = "1";
    translateArt();
  }
  headerText.style.transitionDuration = "3s";
  headerText.style.opacity = "1";
}

let links = [
  "https://pl.wikipedia.org/wiki/Gnojarzowate",
  "https://pl.wikipedia.org/wiki/Modzelatkowate",
  "https://pl.wikipedia.org/wiki/Kruszczycowate",
  "https://pl.wikipedia.org/wiki/Rohaty%C5%84cowate",
  "https://pl.wikipedia.org/wiki/Rutelowate",
  "https://pl.wikipedia.org/wiki/Chrab%C4%85szczowate",
  "https://pl.wikipedia.org/wiki/Po%C5%9Bwi%C4%99tnikowate",
  "https://pl.wikipedia.org/wiki/Plugowate",
  "https://pl.wikipedia.org/wiki/Jelonkowate",
  "https://pl.wikipedia.org/wiki/Wygonakowate",
];

function pickRandomLink() {
  let randomIndex = Math.floor(Math.random() * links.length);
  window.open(links[randomIndex], "_blank");
}

var textsEN = [
    {
      title: "Our favourite beetles",
    },
    {
      title: "<strong>Wiktor's beetle:</strong>",
      content:
        "Discover the fascinating world of <strong>Protaetia cuprea</strong>, a beetle renowned for its iridescent sheen and intricate behaviors. Delve into its unique ecological role and evolutionary adaptations, unveiling insights into the intricate tapestry of nature. Embark on a captivating journey of discovery as you unravel the mysteries surrounding this extraordinary beetle species. ",
      readMore: '<a href="/podstrona1.html" class="artLink">Read more</a>',
    },
    {
      title: "<strong>Mateusz' beetle:</strong>",
      content:
        "Embark on an enthralling exploration of the magnificent <strong>Hercules beetle</strong>, celebrated for its colossal size and awe-inspiring strength. Dive into its remarkable habitat and learn about its impressive horn-like structures, showcasing nature's incredible diversity. Prepare to be captivated by tales of this mighty beetle's resilience and significance in the intricate web of ecosystems. ",
      readMore: '<a href="/podstrona2.html" class="artLink">Read more</a>',
    },
    {
      title: "<strong>Rihana's beetle:</strong>",
      content:
        "Embark on an enchanting journey into the world of <strong>Lycus trabeatus</strong>, a beetle adorned with striking colors and intricate patterns. Explore its fascinating behavior, from its agile movements to its intriguing social interactions within its habitat. Uncover the secrets of this remarkable beetle's role in the ecosystem, as it navigates its environment with grace and resilience. ",
      readMore: '<a href="/podstrona3.html" class="artLink">Read more</a>',
    },
    {
      footer: "More informations about the project: ",
      readMore: '<a href="/informacje.html" class="artLink">here</a>',
    },
  ];
var textsPL = [
  {
    title: "Nasze ulubione chrząszcze",
  },
  {
    title: "<strong>Chrząszcz Wiktora:</strong>",
    content:
      "Odkryj fascynujący świat <strong>Protaetia cuprea</strong>, chrząszcza znakomitego ze względu na jego opalizujący połysk i złożone zachowania. Zagłęb się w jego unikalną rolę ekologiczną i adaptacje ewolucyjne, odkrywając wgląd w złożony krajobraz natury. Wyrusz w fascynującą podróż odkrywczą, gdy odkrywasz tajemnice otaczające ten niezwykły gatunek chrząszcza. ",
    readMore: '<a href="/podstrona1.html" class="artLink">Czytaj więcej</a>',
  },
  {
    title: "<strong>Chrząszcz Mateusza:</strong>",
    content:
      "Wyrusz w pasjonującą podróż po wspaniałym <strong>chrząszczu Herkulesie</strong>, świętującym swój kolosalny rozmiar i zadziwiającą siłę. Zagłęb się w jego niezwykły habitat i dowiedz się o jego imponujących strukturach przypominających róg, prezentujących niezwykłą różnorodność natury. Przygotuj się na zachwyt opowieściami o odporności tego potężnego chrząszcza i jego znaczeniu w zawiłej sieci ekosystemów. ",
      readMore: '<a href="/podstrona2.html" class="artLink">Czytaj więcej</a>',
  },
  {
    title: "<strong>Chrząszcz Rihany:</strong>",
    content:
      "Wyrusz w czarującą podróż do świata <strong>Lycus trabeatus</strong>, chrząszcza zdobionego uderzającymi kolorami i złożonymi wzorami. Poznaj jego fascynujące zachowanie, od jego zwinnych ruchów po intrygujące interakcje społeczne w jego habitat. Odkryj tajemnice roli tego niezwykłego chrząszcza w ekosystemie, gdy manewruje swoim środowiskiem z wdziękiem i odpornością. ",
      readMore: '<a href="/podstrona3.html" class="artLink">Czytaj więcej</a>',
  },
  {
    footer: "Więcej informacji o projekcie: ",
    readMore: '<a href="/informacje.html" class="artLink">tutaj</a>',
  },
];

if(localStorage.getItem("isTranslated") !== "true")
  localStorage.setItem("isTranslated", "false");
else
  try{
    document.getElementById("changeLanguage").checked = true; 
    switchMoved();
}
catch(err){
  console.log('Everything is fine');
}


function switchMoved() {
  const lang = document.getElementById("changeLanguage");
  if (lang.checked) {
    localStorage.setItem("isTranslated", "true");
      document.querySelector(".spanInHeader span").innerHTML = textsPL[0].title;
      for(let i = 0; i < 3; i++){
          document.querySelectorAll(".tekst")[i].innerHTML =
          textsPL[i+1].title + "<br/>" + textsPL[i+1].content + textsPL[i+1].readMore;
      }
      document.getElementById("btnWrap").innerHTML = 'Więcej chrząszczy!';
      document.querySelector("footer > div").innerHTML = textsPL[4].footer + textsPL[4].readMore;

  } else {
    localStorage.setItem("isTranslated", "false");
      document.querySelector(".spanInHeader span").innerHTML = textsEN[0].title;
      for(let i = 0; i < 3; i++){
          document.querySelectorAll(".tekst")[i].innerHTML =
          textsEN[i+1].title + "<br/>" + textsEN[i+1].content + textsEN[i+1].readMore;
      }
      document.getElementById("btnWrap").innerHTML = 'More beetles!';
      document.querySelector("footer > div").innerHTML = textsEN[4].footer + textsEN[4].readMore;
  }
  console.log(localStorage.getItem("isTranslated"));
}

//not working

var textsArtEN = [
  {
    title: "<strong>Geographic scope:</strong>",
    content:
      "It inhabits all of Europe, including the areas of northern Fennoscandia, and part of Asia, reaching east to Siberia and thecoast of the Pacific Ocean. Found throughout Poland, sometimes inlarge numbers, both in the lowlands and in the mountains, where it reaches the upper border of the forest.",
  },
  {
    title: "<strong>Habitat and activity:</strong>",
    content:
      "A species found in deciduous forests and their surroundings. Adult insects appear from June to August and are heliophilic - they fly in sunny weather. They willingly take food from flowers of shrubs and herbaceous plants as well as from ripe fruits. They also come to sap leaking from damaged trees.",
  }
];
var textsArtPL = [
{
  title: "<strong>Zakres geograficzny:</strong>",
  content:
    "Zamieszkuje całą Europę, łącznie z obszarami północnymi Fennoskandię i część Azji, sięgającą na wschód po Syberię i Wybrzeże wybrzeże Oceanu Spokojnego. Spotykany w całej Polsce, czasem w duże liczby, zarówno na nizinach, jak iw górach, gdzie to występuje dochodzi do górnej granicy lasu.",
},
{
  title: "<strong>Siedlisko i działalność:</strong>",
  content:
    "Gatunek występujący w lasach liściastych i ich okolicach. Dorosły owady pojawiają się od czerwca do sierpnia i są heliofilami – przylatują słoneczna pogoda. Chętnie pobierają pokarm z kwiatów krzewów i roślin zielnych, a także z dojrzałych owoców. Przychodzą też po soki wycieka z uszkodzonych drzew.",
}
];

function translateArt() {
  if(localStorage.getItem("isTranslated") === "true"){
    document.querySelectorAll('.tekst')[0].innerHTML = textsArtPL[0].title + '<br/>' + textsArtPL[0].content;
    document.querySelectorAll('.tekst')[1].innerHTML = textsArtPL[1].title + '<br/>' + textsArtPL[1].content;
  }
  else{
    document.querySelectorAll('.tekst')[0].innerHTML = textsArtEN[0].title + '<br/>' + textsArtEN[0].content;
    document.querySelectorAll('.tekst')[1].innerHTML = textsArtEN[1].title + '<br/>' + textsArtEN[1].content;
  }
  console.log(localStorage.getItem("isTranslated"));
}