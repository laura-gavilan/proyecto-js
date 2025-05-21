export const createCardCountry = (country) => {
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const title = document.createElement("h2");
    title.textContent = `PAÍS: ${country.name.common}`;
    cardInfo.appendChild(title);


    const foodCountry = document.createElement("p");
    foodCountry.textContent = "COMIDAS";
    foodCountry.classList.add("food-filter");

    foodCountry.addEventListener("click", () => {
        const countryName = encodeURIComponent(country.name.common); //se codifica el nombre del país para que sea seguro en una URL
        const urlFood = `https://www.tripadvisor.com/Search?q=restaurants+in+${countryName}`;
        window.open(urlFood);
    });

    cardInfo.appendChild(foodCountry);


    const hotelCountry = document.createElement("p");
    hotelCountry.textContent = "ALOJAMIENTOS";
    hotelCountry.classList.add("hotel-filter");

    hotelCountry.addEventListener("click", () => {
        const countryName = encodeURIComponent(country.name.common);
        const urlHotel = `https://www.tripadvisor.com/Search?q=hotels+in+${countryName}`;
        window.open(urlHotel);
    });

    cardInfo.appendChild(hotelCountry);

    const placesInterestCountry = document.createElement("div");
    placesInterestCountry.textContent = "LUGARES DE INTERÉS";

    placesInterestCountry.addEventListener("click", () => {
        const countryName = encodeURIComponent(country.name.common);
        const urlPlaces = `https://www.tripadvisor.com/Search?q=places+of+interest+in+${countryName}`;
        window.open(urlPlaces);
    });

    cardInfo.appendChild(placesInterestCountry);

    const allCountryContainer = document.getElementById("container-country-card");
    allCountryContainer.appendChild(cardInfo);
};