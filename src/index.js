import "./styles/style.css";
import "./img/Logo.png";
import "./img/body-back.jpg";
import "./img/reddit.png";
import "./img/google-plus.png";
import "./img/twitter.png";
import "./img/youtube.png";
import {About} from "./about";
import {Menu} from "./menu";
import {Special} from "./special";
import {Contacts} from "./contacts";


document.querySelector(".about-button").addEventListener("click", () => {
    document.querySelector(".content").innerHTML = " ";
    // setTimeout(About, 1000);
     About();
})

document.querySelector(".menu-button").addEventListener("click", () => {
    document.querySelector(".content").innerHTML = " ";
    Menu();
})

document.querySelector(".special-button").addEventListener("click", () => {
    document.querySelector(".content").innerHTML = " ";
    Special();
})

document.querySelector(".contacts-button").addEventListener("click", () => {
    document.querySelector(".content").innerHTML = " ";
    Contacts();
})



About();


