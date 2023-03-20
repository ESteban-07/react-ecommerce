const API_URL = `https://api.escuelajs.co/api/v1/products?offset=0&limit=10`;

export async function getProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
