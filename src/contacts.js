import "./styles/contacts.css";


function Contacts() {
    const days = ["Monday-Thursday", "Friday", "Saturday", "Sunday"];
    const times = ["11am - 10pm", "11am - 11pm", "10am - 11pm", "10am - 10pm"];

    const content = document.querySelector(".content");

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("address");
    content.appendChild(addressContainer);

    const addressHead = document.createElement("h1");
    addressHead.innerHTML = "Address";
    addressContainer.appendChild(addressHead);

    const address = document.createElement("p");
    address.innerHTML = "4348 Fountain Ave. Los Angeles, CA 90029";
    addressContainer.appendChild(address);

    const hours = document.createElement("div");
    hours.classList.add("hours");
    content.appendChild(hours);

    const hoursHead = document.createElement("h1");
    hoursHead.innerHTML = "Hours of work";
    hours.appendChild(hoursHead);

    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("hours-container");
    hours.appendChild(hoursContainer);

    for(let i = 0; i < days.length; i++) {
        const dayContainer = document.createElement("div");
        hoursContainer.appendChild(dayContainer);

        const day = document.createElement("p");
        day.innerHTML = days[i];
        dayContainer.appendChild(day);

        const time = document.createElement("p");
        time.innerHTML = times[i];
        dayContainer.appendChild(time);    
    }

    const contacts = document.createElement("div");
    contacts.classList.add("contacts");
    content.appendChild(contacts);

    const contactsHead = document.createElement("h1");
    contactsHead.innerHTML = "Phone and email";
    contacts.appendChild(contactsHead);

    const phone = document.createElement("p");
    phone.innerHTML = "555-555-5554";
    contacts.appendChild(phone);

    const email = document.createElement("p");
    email.innerHTML = "theresto@gmail.com";
    contacts.appendChild(email);

}

export {Contacts};