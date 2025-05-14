import { getAllCountriesFromApi } from "../index.js";

/**
 * Páginas posibles:
 * explora
 * visited
 * country-details
 */

export let ACTUAL_PAGE = "explora";

export const container = document.getElementById("container-country-card");
const exploreBtn = document.getElementById("explore-btn");
const visitedBtn = document.getElementById("visited-btn");

exploreBtn.addEventListener("click", async () => {
    // Coger todos los paises, y luego llamar a renderCountries
    console.log("EXPLORA");

    const allCountries = JSON.parse(localStorage.getItem("all-countries"));
    ACTUAL_PAGE = "explora";
    renderCountries(allCountries);
});

visitedBtn.addEventListener("click", () => {
    // Coger todos los paises visitados, y luego llamar a renderCountries
    console.log("PAISES VISITADOS");
    let visited = JSON.parse(localStorage.getItem("visitedCountries")) || [];
    ACTUAL_PAGE = "visited";
    renderCountries(visited);
});

export const dataCity = (cities) => {
    const infoCardCity = document.getElementById("info-city");
    infoCardCity.innerHTML = "";

    cities.forEach((city) => {
        const cityCard = document.createElement("div");
        cityCard.classList.add("city-card");

        const nameCity = document.createElement("p");
        nameCity.textContent = city.name.common;

        cityCard.appendChild(nameCity);

        infoCardCity.appendChild(cityCard);
    });
};

export const renderCountries = (countries) => {
    const allCountryContainer = document.getElementById("container-country-card");
    allCountryContainer.innerHTML = "";

    const visited = JSON.parse(localStorage.getItem("visitedCountries")) || [];

    countries.forEach((country) => {
        const isVisited = visited.find((element) => element.cioc === country.cioc);

        const countryCard = document.createElement("div");
        countryCard.classList.add("country-card");

        countryCard.addEventListener("click", () => {
            renderCountryDetails(country);
        });

        const name = document.createElement("p");
        name.textContent = country.name.common;

        const flag = document.createElement("img");
        flag.src = country.flags.png;
        flag.alt = `Bandera de ${country.name.common}`;

        const button = document.createElement("button");
        button.textContent = isVisited ? "Eliminar como Visitado" : "Marcar como visitado";

        button.addEventListener("click", (event) => {
            let visited = JSON.parse(localStorage.getItem("visitedCountries")) || [];
            const isVisited = visited.find((element) => element.cioc === country.cioc);

            if (!isVisited) {
                visited.push(country);
                event.target.textContent = "Eliminar como Visitado";
            } else {
                visited = visited.filter((visitedCountry) => visitedCountry.cioc !== country.cioc);
                event.target.textContent = "Marcar como visitado";
                if (ACTUAL_PAGE === "visited") {
                    renderCountries(visited);
                }
            }

            localStorage.setItem("visitedCountries", JSON.stringify(visited));
        });

        countryCard.appendChild(name);
        countryCard.appendChild(flag);
        countryCard.appendChild(button);
        container.appendChild(countryCard);
    });
};

const renderCountryDetails = (country) => {
    const paginaDeLaQueVieneElUSuario = ACTUAL_PAGE;

    ACTUAL_PAGE = "country-details";

    const allCountryContainer = document.getElementById("container-country-card");
    allCountryContainer.innerHTML = "";

    const buttonGoBack = document.createElement("button");
    buttonGoBack.textContent = "Volver atrás";
    buttonGoBack.addEventListener("click", () => {
        if (paginaDeLaQueVieneElUSuario === "explora") {
            exploreBtn.click();
        }

        if (paginaDeLaQueVieneElUSuario === "visited") {
            visitedBtn.click();
        }
    });

    allCountryContainer.prepend(buttonGoBack);

    console.log(country.name.common);

    const map = country.maps.googleMaps;
    console.log(map);
};
