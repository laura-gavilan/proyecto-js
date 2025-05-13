import { renderCountries } from "./src/data.js";
import { paisesMock } from "./respuesta-mock.js";


const API_URL = "https://restcountries.com/v3.1/region/europe";
// //API = "https://restcountries.com/"


export const countries = async () => {
    let data;
    try {
        const response = await fetch(API_URL);
        data = await response.json();

    } catch (error) {
        console.log("Error al cargar los países", error);
        data = paisesMock;
    }
    renderCountries(data);
}
// countries();


document.addEventListener("DOMContentLoaded", () => {
    countries();
    const exploreBtn = document.getElementById("explore-btn");
    exploreBtn.addEventListener("click", () => {
        const container = document.getElementById("container-country-card");
        container.innerHTML = "";
        
        if (container.style.display === "grid") {
            container.style.display = "none";
            exploreBtn.textContent = "Explora";
        } else {
            container.style.display = "grid";
            exploreBtn.textContent = "Explora";
            countries();
        }
    });
});



