// Modify your showResults function to accept the weather object
export function showResults(weatherData) {
  console.log(weatherData);

  const weatherTop = document.querySelector(".weatherTop");

  // Left part of the weather
  const weatherLeft = document.createElement("div");
  weatherLeft.classList.add("left");

  const weatherLeftImg = document.createElement("img");
  weatherLeftImg.classList.add("weatherIcon");
  weatherLeftImg.setAttribute("src", weatherData.forecast[0].condition.icon);

  const weatherLeftTemp = document.createElement("span");
  weatherLeftTemp.innerText = Math.floor(
    weatherData.forecast[0].temp.maxtemp_c
  );
  weatherLeftTemp.classList.add("tempature");

  const weatherLeftMeasurement = document.createElement("div");
  weatherLeftMeasurement.classList.add("weatherMeasurement");

  const weatherLeftButtonC = document.createElement("button");
  weatherLeftButtonC.innerText = "°C";
  weatherLeftButtonC.classList.add("active");
  weatherLeftButtonC.onclick = function () {
    const selectTemp = document.querySelector(".tempature");
    selectTemp.innerText = Math.floor(weatherData.forecast[0].temp.maxtemp_c);

    const selectMaxTemp = document.querySelectorAll(".maxTemp");
    selectMaxTemp.forEach((temp) => {
      temp.innerText = Math.floor(weatherData.forecast[0].temp.maxtemp_c) + "°";
    });

    const selectMinTemp = document.querySelectorAll(".minTemp");
    selectMinTemp.forEach((temp) => {
      temp.innerText = Math.floor(weatherData.forecast[0].temp.mintemp_c) + "°";
    });

    weatherLeftButtonC.classList.add("active");
    weatherLeftButtonF.classList.remove("active");
  };

  const weatherLeftButtonF = document.createElement("button");
  weatherLeftButtonF.innerText = "°F";
  weatherLeftButtonF.onclick = function () {
    const selectTemp = document.querySelector(".tempature");
    selectTemp.innerText = Math.floor(weatherData.forecast[0].temp.maxtemp_f);

    const selectMaxTemp = document.querySelectorAll(".maxTemp");
    selectMaxTemp.forEach((temp) => {
      temp.innerText = Math.floor(weatherData.forecast[0].temp.maxtemp_f) + "°";
    });

    const selectMinTemp = document.querySelectorAll(".minTemp");
    selectMinTemp.forEach((temp) => {
      temp.innerText = Math.floor(weatherData.forecast[0].temp.mintemp_f) + "°";
    });

    weatherLeftButtonC.classList.remove("active");
    weatherLeftButtonF.classList.add("active");
  };

  const weatherOthersDiv = document.createElement("div");

  const weatherLeftP1 = document.createElement("p");
  weatherLeftP1.classList.add("precipitation");
  weatherLeftP1.innerText = `Precipitation probability: ${weatherData.forecast[0].other.precip_mm}%`;

  const weatherLeftP2 = document.createElement("p");
  weatherLeftP2.classList.add("humidity");
  weatherLeftP2.innerText = `Humidity: ${weatherData.forecast[0].other.humidity}%`;

  const weatherLeftP3 = document.createElement("p");
  weatherLeftP3.classList.add("wind");
  weatherLeftP3.innerText = `Wind: ${weatherData.forecast[0].other.wind_kph} m/s`;

  weatherTop.appendChild(weatherLeft);
  weatherLeft.appendChild(weatherLeftImg);
  weatherLeft.appendChild(weatherLeftTemp);
  weatherLeft.appendChild(weatherLeftMeasurement);
  weatherLeftMeasurement.appendChild(weatherLeftButtonC);
  weatherLeftMeasurement.appendChild(weatherLeftButtonF);
  weatherLeft.appendChild(weatherOthersDiv);
  weatherOthersDiv.appendChild(weatherLeftP1);
  weatherOthersDiv.appendChild(weatherLeftP2);
  weatherOthersDiv.appendChild(weatherLeftP3);

  // Right part of the weather
  const weatherRight = document.createElement("div");
  weatherRight.classList.add("right");

  const weatherRightTitle = document.createElement("h2");
  weatherRightTitle.innerText = "Weather";

  const weatherRightDay = document.createElement("p");
  weatherRightDay.classList.add("dayText");
  weatherRightDay.innerText = "Today";

  const weatherRightWeather = document.createElement("p");
  weatherRightWeather.classList.add("weatherText");
  weatherRightWeather.innerText = weatherData.forecast[0].condition.text;

  weatherTop.appendChild(weatherRight);
  weatherRight.appendChild(weatherRightTitle);
  weatherRight.appendChild(weatherRightDay);
  weatherRight.appendChild(weatherRightWeather);

  // Lower part of the weather
  const next3Days = document.querySelector(".weatherDays");

  for (let i = 0; i <= 3; i++) {
    const day = weatherData.forecast[i];
    const date = new Date(day.date);
    const options = { weekday: "short" };
    const currentDayShort = date.toLocaleDateString("en-US", options);

    // Full name of the day
    const optionsFull = { weekday: "long" };
    const currentDay = date.toLocaleDateString("en-US", optionsFull);

    // If date is today name it Today if its tomorrow name it Tomorrow else name it by the day
    let currentDayFull;
    if (i === 0) {
      currentDayFull = "Today";
    } else if (i === 1) {
      currentDayFull = "Tomorrow";
    } else {
      currentDayFull = currentDay;
    }

    
    const gridDays = document.createElement("button");
    gridDays.setAttribute("id", "day");
    if (i === 0) {
      gridDays.classList.add("active");
    }

    gridDays.onclick = function () {
      const activeDays = document.querySelectorAll("#day.active");
      activeDays.forEach((activeDay) => {
      activeDay.classList.remove("active");
      });
      gridDays.classList.add("active");

      const selectImg = document.querySelector(".weatherIcon");
      selectImg.src = day.condition.icon;

      // When Farhenheit is selected show the temperature in F
      //  else show the temperature in Celcius
      if (weatherLeftButtonF.classList.contains("active")) {
        const selectTemp = document.querySelector(".tempature");
        selectTemp.innerText = Math.floor(day.temp.maxtemp_f);
      } else {
        const selectTemp = document.querySelector(".tempature");
        selectTemp.innerText = Math.floor(day.temp.maxtemp_c);
      }

      const selectPrecipitation = document.querySelector(".precipitation");
      selectPrecipitation.innerText = `Precipitation probability: ${day.other.precip_mm}%`;

      const selectHumidity = document.querySelector(".humidity");
      selectHumidity.innerText = `Humidity: ${day.other.humidity}%`;

      const selectWind = document.querySelector(".wind");
      selectWind.innerText = `Wind: ${day.other.wind_kph} m/s`;

      const selectWeather = document.querySelector(".weatherText");
      selectWeather.innerText = day.condition.text;

      const selectDay = document.querySelector(".dayText");
      selectDay.innerText = currentDayFull;
    };

    const pDays = document.createElement("p");
    pDays.innerHTML = currentDayShort;

    const pImg = document.createElement("img");
    pImg.src = day.condition.icon;

    const tempDiv = document.createElement("div");
    tempDiv.setAttribute("id", "temp");

    const tempMaxSpan = document.createElement("span");
    tempMaxSpan.classList.add("maxTemp");
    tempMaxSpan.innerHTML = Math.floor(day.temp.maxtemp_c) + "°";

    const tempMixSpan = document.createElement("span");
    tempMixSpan.classList.add("gray", "minTemp");
    tempMixSpan.innerHTML = Math.floor(day.temp.mintemp_c) + "°";

    next3Days.appendChild(gridDays);
    gridDays.appendChild(pDays);
    gridDays.appendChild(pImg);
    gridDays.appendChild(tempDiv);
    tempDiv.appendChild(tempMaxSpan);
    tempDiv.appendChild(tempMixSpan);
  }
}
