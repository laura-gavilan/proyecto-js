import { renderCountries } from "./src/data.js";
import { paisesMock } from "./respuesta-mock.js";

const API_URL = "https://restcountries.com/v3.1/region/europe";
//API = "https://restcountries.com/"

export const getAllCountriesFromApi = async () => {
    let data;

    try {
        const response = await fetch(API_URL);
        data = await response.json();
    } catch (error) {
        console.log("Error al cargar los países", error);
        data = paisesMock;
    }

    return data;
}

// INICIO DE NUESTRO PROGRAMA
document.addEventListener("DOMContentLoaded", async () => {
    const allCountries = await getAllCountriesFromApi();

    // Guardo una copia de todos los paises, para no tener que repetir la información
    // Y para hacer que la lectura se mas rápida.
    localStorage.setItem("all-countries", JSON.stringify(allCountries));

    renderCountries(allCountries);
});