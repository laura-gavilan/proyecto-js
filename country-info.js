export const createCardCountry = (country) => {
    const containerCountryCard = document.getElementById("container-details-card");
    containerCountryCard.style.display = "flex";
    containerCountryCard.innerHTML = `
        <p>${country.name.common.toUpperCase()}</p>
        <p>${country.maps.googleMaps}</p>
    `;

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const foodCountry = document.createElement("p");
    foodCountry.textContent = "RESTAURANTS";
    foodCountry.classList.add("food-filter");

    foodCountry.addEventListener("click", () => {
        const countryName = encodeURIComponent(country.name.common); //se codifica el nombre del país para que sea seguro en una URL. Si tiene letras diferentes o acentos pueda leerlo.
        const urlFood = `https://www.tripadvisor.com/Search?q=restaurants+in+${countryName}`;
        window.open(urlFood);
    });

    cardInfo.appendChild(foodCountry);


    const hotelCountry = document.createElement("p");
    hotelCountry.textContent = "HOTELS";
    hotelCountry.classList.add("hotel-filter");

    hotelCountry.addEventListener("click", () => {
        const countryName = encodeURIComponent(country.name.common);
        const urlHotel = `https://www.tripadvisor.com/Search?q=hotels+in+${countryName}`;
        window.open(urlHotel);
    });

    cardInfo.appendChild(hotelCountry);

    const placesInterestCountry = document.createElement("p");
    placesInterestCountry.textContent = "PLACES";

    placesInterestCountry.addEventListener("click", () => {
        const countryName = encodeURIComponent(country.name.common);
        const urlPlaces = `https://www.tripadvisor.com/Search?q=places+of+interest+in+${countryName}`;
        window.open(urlPlaces);
    });

    cardInfo.appendChild(placesInterestCountry);

    containerCountryCard.appendChild(cardInfo);
};


const formContainer = document.getElementById("forms-container");
formContainer.style.display = 'none';
