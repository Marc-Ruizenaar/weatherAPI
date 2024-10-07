import { showResults } from './showResults';
import { weatherConstructor } from './weatherConstructor';

export async function getWeatherApi(locationValueInput) {
  const apiKey = ${{ secrets.WEATHERAPI_APIKEY }};
  const apiUrl = "http://api.weatherapi.com/v1/";
  const apiForcast = "/forecast.json"; // .xml is also possible
  const apiQ = "&q=" + locationValueInput;
  const apiDays = "&days=3"; // Free verion of the api only allows 3 days
  const fullApiRequest =
    apiUrl + apiForcast + "?key=" + apiKey + apiQ + apiDays;

  try {
    const response = await fetch(fullApiRequest);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const weatherData = weatherConstructor(json);
    showResults(weatherData);

  } catch (error) {
    console.error(error.message);
  }

}
