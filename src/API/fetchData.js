const API_URL = `https://api.escuelajs.co/api/v1/products?offset=0&limit=50`;

export async function getProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const categoryCounts = {};

    // this array just allows 3 products per category
    const filteredData = data.reduce((acc, item) => {
      const categoryId = item.category.id;
      const categoryCount = categoryCounts[categoryId] || 0;
      const amountAllowedPerCategory = 3;

      if (categoryCount < amountAllowedPerCategory) {
        acc.push(item);
        categoryCounts[categoryId] = categoryCount + 1;
      }

      return acc;
    }, []);

    return filteredData;
  } catch (err) {
    console.log(err);
  }
}
