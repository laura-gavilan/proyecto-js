export const createCardCountry = (country) => {
    const containerCountryCard = document.getElementById("container-details-card");
    containerCountryCard.style.display = "flex";
    containerCountryCard.innerHTML = `
        <p>${country.name.common.toUpperCase()}</p>
        <p><a href="${country.maps.googleMaps}" target="_blank">Ver en Google Maps</a></p>
    `;

    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");


    //CATEGORÍAS//
    const foodCountry = document.createElement("p");
    foodCountry.textContent = "RESTAURANTS";
    foodCountry.classList.add("food-filter");

    foodCountry.addEventListener("click", () => {
        if (foodCountry.querySelector(".restaurant-grid")) return;

        const container = document.createElement("div");
        container.classList.add("restaurant-grid");

        for (let i = 0; i < 5; i++) {
            const div = document.createElement("div");
            div.classList.add("restaurant-card");

            div.innerHTML = `
            <p>Restaurante ${i + 1}</p>
            <p>Información del restaurante ${i + 1}</p>
            <p>Valoración del restaurante ${i + 1}</p>
            `;

            container.appendChild(div);
        }

        foodCountry.appendChild(container);
    });

    containerCountryCard.appendChild(foodCountry);


    const hotelCountry = document.createElement("p");
    hotelCountry.textContent = "HOTELS";
    hotelCountry.classList.add("hotel-filter");

    hotelCountry.addEventListener("click", () => {
        // Evitar duplicados
        if (hotelCountry.querySelector(".hotel-grid")) return;

        const container = document.createElement("div");
        container.classList.add("hotel-grid");

        for (let i = 0; i < 10; i++) {
            const div = document.createElement("div");
            div.classList.add("hotel-card");

            div.innerHTML = `
            <p><strong>Hotel ${i + 1}</strong></p>
            <p>Información del hotel ${i + 1}</p>
            <p>Valoración del hotel ${i + 1}</p>
        `;

            container.appendChild(div);
        }

        hotelCountry.appendChild(container);
    });

    containerCountryCard.appendChild(hotelCountry);


    const placesInterestCountry = document.createElement("p");
    placesInterestCountry.textContent = "PLACES";
    placesInterestCountry.classList.add("places-filter");

    placesInterestCountry.addEventListener("click", () => {
        // Evitar duplicados
        if (placesInterestCountry.querySelector(".places-grid")) return;

        const container = document.createElement("div");
        container.classList.add("places-grid");

        for (let i = 0; i < 10; i++) {
            const div = document.createElement("div");
            div.classList.add("place-card");

            div.innerHTML = `
            <p><strong>Lugar de interés ${i + 1}</strong></p>
            <p>Descripción del lugar ${i + 1}</p>
            <p>Valoración del lugar ${i + 1}</p>
        `;
            container.appendChild(div);
        }

        placesInterestCountry.appendChild(container);
    });

    containerCountryCard.appendChild(placesInterestCountry);
    // Agregar los tres filtros al contenedor de categorías
    categoryContainer.appendChild(foodCountry);
    categoryContainer.appendChild(hotelCountry);
    categoryContainer.appendChild(placesInterestCountry);

    // Agregar el contenedor de categorías al contenedor principal
    containerCountryCard.appendChild(categoryContainer);
};

const formContainer = document.getElementById("forms-container");
formContainer.style.display = 'none';




// foodCountry.addEventListener("click", () => {
//     const countryName = encodeURIComponent(country.name.common); //se codifica el nombre del país para que sea seguro en una URL. Si tiene letras diferentes o acentos pueda leerlo.
//     const urlFood = `https://www.tripadvisor.com/Search?q=restaurants+in+${countryName}`;
//     window.open(urlFood);
// });

// cardInfo.appendChild(foodCountry);
// hotelCountry.addEventListener("click", () => {
//     const countryName = encodeURIComponent(country.name.common);
//     const urlHotel = `https://www.tripadvisor.com/Search?q=hotels+in+${countryName}`;
//     window.open(urlHotel);
// });

// cardInfo.appendChild(hotelCountry);

//     const placesInterestCountry = document.createElement("p");
//     placesInterestCountry.textContent = "PLACES";

//     placesInterestCountry.addEventListener("click", () => {
//         const countryName = encodeURIComponent(country.name.common);
//         const urlPlaces = `https://www.tripadvisor.com/Search?q=places+of+interest+in+${countryName}`;
//         window.open(urlPlaces);
//     });

//     cardInfo.appendChild(placesInterestCountry);

//     containerCountryCard.appendChild(cardInfo);
// };



