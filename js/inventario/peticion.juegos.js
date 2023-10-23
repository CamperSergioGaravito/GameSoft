export async function getJuegos(url) {
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}