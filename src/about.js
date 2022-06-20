import "./styles/about.css";
import About1 from "./img/about1.jpg";
import About2 from "./img/about2.jpg";


function About() {

    const aboutText = ["The Resto opened its doors in 2000. Owned and operated by Silver Lake residents our intention is to to reflect the diversity, color, and vibrancy of our neighborhood and to create a place people feel at home.",
                       "Everything is fresh and made from scratch. We make all our own stocks, dressings and sauces and we work hard to be consistent in our preparations. Our goal is to create fresh comfort food that is inspired. And while we maintain a stable core menu, we also like experimenting with new trends, exploring which ones work and which don’t, and coming up with new dishes to keep it fresh for you.",
                       "Most of the staff began working here over 10 years ago, some from the start. Whether it’s a sous-chef working in the kitchen since the beginning or a server with a developed and detailed knowledge of everything on our menu, our staff is an essential part of our operation and they know it. Our staff is happy and respected and we believe our product is a direct result of this, from the food to the general atmosphere.",
                       "We like what we do. We like serving delicious food in an unpretentious, relaxed atmosphere. We are friendly, but not intrusive, and always efficient! A satisfied customer represents our hard work, of which we are very proud. We get a lot of compliments for our food, and we like that and we work hard to keep those compliments coming.",
                       "We are waiting for you!"]

    const content = document.querySelector(".content");

    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("images-container");
    content.appendChild(imagesContainer);

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    content.appendChild(aboutContainer);

    for (let i = 0; i < 2; i++ ){
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        imagesContainer.appendChild(imageContainer);
        const About = new Image();
        if(i === 0) {About.src = About1;}
        else{About.src = About2;}
        imageContainer.appendChild(About);

    }

    for(let i = 0; i < 5; i++){
        const aboutParagraph = document.createElement("p");
        aboutParagraph.classList.add("about");
        aboutParagraph.innerHTML = aboutText[i];
        aboutContainer.appendChild(aboutParagraph);
    }

}

export {About};