import Backpack from "./backpack.js";

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST",
    "../assets/images/everyday.svg"
);

const content = `
<figure class="backpack__image">
    <img src="${everydayPack.image}" alt="" href="/assets/images/everyday.svg" />
</figure>
<h1 class="backpack__name">${everydayPack.name}</h1>
<ul class="backpack__features">
    <li class="packprop backpack__volume">Volume:<span> ${everydayPack.volume
    }</span></li>
    <li class="packprop backpack__color">Color:<span> ${everydayPack.color
    }</span></li>
    <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
    <li class="packprop backpack__pockets">Number of pockets:<span> ${everydayPack.pocketNum
    }</span></li>
    <li class="packprop backpack__strap">Left strap length:<span> ${everydayPack.strapLengthL.left
    } inches</span></li>
    <li class="packprop backpack__strap">Right strap length:<span> ${everydayPack.strapLengthL.right
    } inches</span></li>
    <li class="packprop backpack__lid">Lid status:<span> ${everydayPack.lidOpen
    }</span></li>
</ul>
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");

newArticle.classList.add("backpack")
newArticle.setAttribute("id", "everyday")
newArticle.innerHTML = content;

main.append(newArticle);

const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

const mainNav = document.createElement("nav")
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul")
navList.innerHTML = navContent;
mainNav.append(navList);

document.querySelector(".siteheader").append(mainNav)
