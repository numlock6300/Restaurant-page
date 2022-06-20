import "./styles/menu.css";

function Special() {
    const menuHeads = ["This month","Weekends"];
    const dishNames = [["Soup of the Day"," Seafood Pasta"],
    ["Half and Half","Cobb Salad", "Sparkling White"]];
    const dishContents = [["Sweet Pea with Mint.",
    "Mussels,clams,shrimp,salmon and tuna tossed with linguini and a sun dries tomato garlic cream sauce."],
    ["Cup of Soup of the Day and a Half Sandwich (Steak Sandwich, Meatloaf Sandwich, Grilled Chicken Sandwich, Fried Chicken Sandwich, or Veggie Stack)",
    "Roasted turkey, Applewood smoked bacon, crumpled Stella bleu cheese, sliced avocado, hard-boiled egg, cherry tomatoes, and green onions with crisp, chopped romaine.Served w/ your choice of bleu cheese or balsamic vinaigrette.",
    "OBVIOUS #02 BRIGHT & CRISP Loire Valley, France"]];
    const dishPrices = [["5", "23"],["16", "16", "42"]];
    
    const content = document.querySelector(".content");

    for(let i = 0; i < menuHeads.length; i++){
        const menuBlock = document.createElement("div");
        menuBlock.classList.add("menu-block");
        content.appendChild(menuBlock);

        const menuHeadContainer = document.createElement("div")
        menuHeadContainer.classList.add("menu-head");
        menuBlock.appendChild(menuHeadContainer);

        const menuHead = document.createElement("h2");
        menuHead.innerHTML = menuHeads[i];
        menuHeadContainer.appendChild(menuHead);

        const dishes = document.createElement("div");
        dishes.classList.add("dishes");
        menuBlock.appendChild(dishes);

        for (let j = 0; j < dishNames[i].length; j++) {
            const dish = document.createElement("div");
            dish.classList.add("dish");
            dishes.appendChild(dish);

            const dishNameContainer = document.createElement("div");
            dishNameContainer.classList.add("dish-name");
            dish.appendChild(dishNameContainer);

            const dishName = document.createElement("h3");
            dishName.innerHTML = dishNames[i][j];
            dishNameContainer.appendChild(dishName);

            const dishContent = document.createElement("div");
            dishContent.classList.add("dish-content");
            dishContent.innerHTML = dishContents[i][j];
            dish.appendChild(dishContent);

            const dishPrice = document.createElement("div");
            dishPrice.classList.add("dish-price");
            dishPrice.innerHTML = dishPrices[i][j];
            dish.appendChild(dishPrice);

        }


    }

}

export {Special};