const API_KEY = import.meta.env.VITE_IPDATA_API_KEY;
const fetchGeolocation = async () => {
  const response = await fetch(`https://api.ipdata.co?api-key=${API_KEY}`);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const result = await response.json();
  return result;
};

export const { time_zone, languages, country_code, city } =
  await fetchGeolocation();
export const { abbr, current_time } = time_zone;
const date = new Date(current_time);
export const hour = date.getHours();
const code = languages[0].code;

function convertToLocalTime(value: Date) {
  const localTime = value.toLocaleString(`${code}-${country_code}`, {
    timeZone: time_zone.name,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return localTime;
}

function greet(value: number) {
  let greeting: string | undefined;
  if (value < 11) {
    greeting = "good morning";
  } else if (value < 18) {
    greeting = "good day";
  } else {
    greeting = "good evening";
  }
  return greeting;
}

export const time = convertToLocalTime(date);
export const greeting = greet(hour);
