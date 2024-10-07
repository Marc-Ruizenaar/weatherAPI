export function weatherConstructor(json) {
  // Place all the input into the object

  console.log("JSON ", json);

  const weatherType = {
    location: {
      location: json.location.name,
      country: json.location.country,
    },
    forecast: json.forecast.forecastday.map((day) => ({
      date: day.date,
      temp: {
        maxtemp_c: day.day.maxtemp_c,
        mintemp_c: day.day.mintemp_c,
        avgtemp_c: day.day.avgtemp_c,
        maxtemp_f: day.day.maxtemp_f,
        mintemp_f: day.day.mintemp_f,
        avgtemp_f: day.day.avgtemp_f,
      },
      condition: {
        text: day.day.condition.text,
        icon: day.day.condition.icon,
      },
      other: {
        wind_kph: day.day.maxwind_kph,
        humidity: day.day.avghumidity,
        precip_mm: day.day.totalprecip_mm,
      }
    })),
  };

  //   console.log(weatherType);
  return weatherType;
}