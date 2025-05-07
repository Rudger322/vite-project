export async function GetProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      if (!res.ok) {
        throw new Error('Не удалось загрузить товары')
      }
      return await res.json()
  }
export default GetProduct;