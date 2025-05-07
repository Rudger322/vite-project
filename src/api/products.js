export async function getAllProducts() {
    const res = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) {
      throw new Error('Не удалось загрузить товары')
    }
    return await res.json()
  }
export default getAllProducts();