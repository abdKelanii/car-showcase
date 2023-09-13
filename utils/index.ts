export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "7046881f54mshebf66f9482a5eb1p161f6fjsn6cf0114d6bef",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
