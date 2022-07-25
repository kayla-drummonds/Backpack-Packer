import backpackObjectArray from "./components/data.js";

const content = backpackObjectArray.map((backpack) => {
    let backpackArticle = document.createElement("article");
    backpackArticle.classList.add("backpack");
    backpackArticle.setAttribute("id", backpack.id);
    backpackArticle.innerHTML = `
        <figure class="backpack__image">
            <img src="${backpack.image}" alt="" href="/assets/images/everyday.svg" loading="lazy"/>
        </figure>
        <h1 class="backpack__name">${backpack.name}</h1>
        <ul class="backpack__features">
            <li class="feature backpack__volume">Volume:<span> ${backpack.volume
        }</span></li>
            <li class="feature backpack__color">Color:<span> ${backpack.color
        }</span></li>
            <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
            <li class="feature backpack__pockets">Number of pockets:<span> ${backpack.pocketNum
        }</span></li>
            <li class="feature backpack__strap">Left strap length:<span> ${backpack.strapLengthL.left
        } inches</span></li>
            <li class="feature backpack__strap">Right strap length:<span> ${backpack.strapLengthL.right
        } inches</span></li>
            <li class="feature backpack__lid">Lid status:<span> ${backpack.lidOpen ? "open" : "closed"
        }</span></li>
        </ul>
        `;
    return backpackArticle;
});

const main = document.querySelector(".maincontent");

content.forEach((backpack) => {
    main.append(backpack);
});

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

document.querySelector(".siteheader").append(mainNav);

const usedStatus = () => {
    let age = everydayPack.backpackAge();
    let description;

    switch (true) {
        case age < 30:
            description = "new"
            break;
        case age >= 30 && age < 365:
            description = "lightly used"
            break;
        case age >= 365 && age < 1095:
            description = "used"
            break;
        case age >= 1095:
            description = "old"
            break;
        default:
            console.log('There is no description for ${age}.');
    }

    console.log(`
    Age: ${age} days
    Status: ${description}
    `);
};
usedStatus();