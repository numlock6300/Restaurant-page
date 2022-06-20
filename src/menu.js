import "./styles/menu.css";

function Menu() {
    const menuHeads = ["STARTERS","ENTRÉES"];
    const dishNames = [["Bruschetta","Java Calamari","Soup of the Day","Roasted Chicken Soup","Mac ‘n’ Cheese"],
    ["Pistachio Crusted Salmon", "Mussels & Frites", "Grilled Pork Chops", "Meatloaf", "Pan Seared Chicken",
    "Steak Frites", "Belgian Beef Stew", "Sesame-crusted Albacore", "Chicken Pot Pie"]];
    const dishContents = [["Our classic w/cherry tomatoes, buffalo mozzarella & basil on a toasted baguette, topped with kalamata olives",
    "Our classic w/cherry tomatoes, buffalo mozzarella & basil on a toasted baguette, topped with kalamata olives",
    "ask for the daily special",
    "w/ noodles, free range chicken, fresh garlic & crisp vegetables",
    "w/extra sharp cheddar & garlicky cream sauce"],
    ["Scottish Salmon w/mango-currant chutney Served with jasmine rice & sautéed spinach",
    "Mussels steamed in butter, white wine & garlic Served with fries",
    "With goat cheese potato latkes & green bean casserole Topped with roasted apple sauce",
    "With demi-glaze Served w/garlic mashed & succotash",
    "Free range chicken w/lemon, garlic & rosemary sauce Served with succotash & garlic mashed potatoes",
    "8 oz flank steak marinated in jalapeño and cilantro Served w/french fries & blue lake green beans",
    "Braised tri-tip with dark beer and caramelized onion Served w/ garlic mashed potatoes & sautéed spinach",
    "With spicy ginger ponzu sauce Served with jasmine rice & stir-fry veggies",
    "Free-range chicken with carrots and peas Served with mixed baby greens"]];
    const dishPrices = [["15","15","9","13","12"],["23","21","19","18","22","23","22","22","20"]]
    
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

export {Menu};