// For Android Emulator: http://10.0.2.2:3001
// For Physical Device: http://192.168.1.7:3001
export const API_BASE_URL = 'http://192.168.1.7:3001';

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) throw new Error('Failed to load products');
  return res.json();
}

