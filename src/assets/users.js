export async function getUsersFromApi() {
  let url = `https://jsonplaceholder.typicode.com/users`;
  const result = await fetch(url);
  if (result.status !== 200)
    return {
      error: `Hubo un error con el servicio. Intente nuevamente en unos minutos`,
    };
  const data = await result.json();
  return data.length ? data : [];
}
