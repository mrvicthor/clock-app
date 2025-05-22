const url = "http://worldtimeapi.org/";

export async function fetchWorldTimeApi() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const result = await response.json();
  console.log(result);
}

fetchWorldTimeApi();
