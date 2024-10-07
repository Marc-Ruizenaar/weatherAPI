import { getWeatherApi } from "./fetchAPI";
import { showResults } from "./showResults";

export function locationInput() {
  
    const selector = document.querySelector("#place-submit");

    selector.addEventListener("click", (e) => {
        e.preventDefault();
        
        const locationValueInput = document.querySelector("#place").value;

        // Get the weather API and the value of the location
        getWeatherApi(locationValueInput);

        // After the API is fetched, show the results
        showResults();

    });
}