// Load styles
import "./styles/main.css";

// Load script
import { locationInput } from "./scripts/weatherAPI/locationInput";
import { getWeatherApi } from "./scripts/weatherAPI/fetchAPI";

// Weather API scripts
locationInput();

getWeatherApi("Stockholm");