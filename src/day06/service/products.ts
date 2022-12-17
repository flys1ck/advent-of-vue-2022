export interface Product {
  id: number;
  price: number;
  title: string;
}

export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const json = await res.json();
  return json.products as Product[];
};
