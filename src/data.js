export const container = document.getElementById("container-country-card");

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
    })
}


export const renderCountries = (countries) => {
    const infoCard = document.getElementById("info-card");
    infoCard.innerHTML = "";

    countries.forEach((country) => {
        const countryCard = document.createElement("div");
        countryCard.classList.add("country-card");

        const name = document.createElement("p");
        name.textContent = country.name.common;

        const flag = document.createElement("img");
        flag.src = country.flags.png;
        flag.alt = `Bandera de ${country.name.common}`;

        const button = document.createElement("button");
        button.textContent = "Visitado";

        button.addEventListener("click", () => {
            button.classList.toggle("visited");
            button.textContent = button.classList.contains("visited") ? "Visitado" : "Marcar como Visitado";

            let visited = JSON.parse(localStorage.getItem("visitedCountries")) || [];

            const existVisited = visited.find(element => element.cioc === country.cioc);
            
            if (!existVisited) {
                visited.push(country);
            } else {

                visited = visited.filter(visitedCountry => visitedCountry.cioc !== country.cioc);
            }

            localStorage.setItem("visitedCountries", JSON.stringify(visited));
            renderCountries(visited);
        });


        countryCard.appendChild(name);
        countryCard.appendChild(flag);
        countryCard.appendChild(button);

        container.appendChild(countryCard);


        countryCard.addEventListener("click", () => {
            const infoCity = document.getElementById("info-city");
            const infoCountries = document.getElementById("info-countries");

            infoCity.classList.toggle("visible");
            infoCity.classList.toggle("hidden");

            infoCountries.classList.toggle("visible");
            infoCountries.classList.toggle("hidden");
        });
    });
};

const visitBtn = document.getElementById("countries-visit");

visitBtn.addEventListener("click", () => {
    const visited = JSON.parse(localStorage.getItem("visitedCountries")) || [];

    const container = document.getElementById("container-country-card");
    container.innerHTML = "";
    container.style.display = "grid";

    renderCountries(visited);
    // visited.forEach((country) => {
    //     const countryCard = document.createElement("div");
    //     countryCard.classList.add("country-card");

    //     const name = document.createElement("p");
    //     name.textContent = country.name.common;

    //     countryCard.appendChild(name);
    //     container.appendChild(countryCard);
    // });
});


// history.back() para crear botón hacia atrás
