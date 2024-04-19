let fruits = ["🍊", "🍌", "🍊", "🍊", "🍌"];

const fruitsEl = document.querySelector("h1");
const orangeEl = document.getElementById("orange-el");
const bananaEl = document.getElementById("banana-el");

const allFruits = () => {
    let myFruits = "";
    for (let i = 0; i < fruits.length; i++) {
        myFruits += fruits[i];
    }
    fruitsEl.innerHTML += myFruits;
}

allFruits()

const separateFruits = (function () {
    return function () {
        let orangeFruit = "";
        let bananfruit = "";
        for (let i = 0; i < fruits.length; i++) {
            if (fruits[i] == "🍊") {
                orangeFruit += fruits[i];
            } else if (fruits[i] == "🍌") {
                bananfruit += fruits[i];
            }
        }
        orangeEl.innerHTML += orangeFruit;
        bananaEl.innerHTML += bananfruit;
    }
})();

separateFruits()