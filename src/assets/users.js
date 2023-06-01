export async function getUsersFromApi() {
    let url = `https://jsonplaceholder.typicode.com/users`;
    const result = await fetch(url);
    const data = await result.json();
    return data.length ? data : []
}