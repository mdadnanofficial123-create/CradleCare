import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { fetchProducts, type Product } from '../services/api';

export function CatalogScreen() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await fetchProducts();
        if (!alive) return;
        setProducts(data);
      } catch (e) {
        if (!alive) return;
        setError(e instanceof Error ? e.message : 'Failed to load');
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F7FBFF' }} contentContainerStyle={{ padding: 16, gap: 12 }}>
      <View style={{ padding: 16, borderRadius: 16, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: '800', color: '#0A3D7A' }}>Doctor‑Verified Catalog</Text>
        <Text style={{ marginTop: 6, color: '#4B5565' }}>
          BIS‑certified toys and organic essentials with pediatrician-led curation.
        </Text>
      </View>

      {loading ? (
        <View style={{ padding: 16 }}>
          <ActivityIndicator />
        </View>
      ) : error ? (
        <View style={{ padding: 16, borderRadius: 16, backgroundColor: 'white' }}>
          <Text style={{ fontWeight: '800', color: '#0B1220' }}>Could not load products</Text>
          <Text style={{ marginTop: 6, color: '#4B5565' }}>{error}</Text>
          <Text style={{ marginTop: 10, color: '#4B5565', fontSize: 12 }}>
            Tip: If using Android emulator, API should be reachable at 10.0.2.2. If on physical device, replace
            `API_BASE_URL` in `src/services/api.ts` with your PC’s LAN IP.
          </Text>
        </View>
      ) : (
        products.map((p) => (
          <View
            key={p.id}
            style={{
              padding: 16,
              borderRadius: 16,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'rgba(15, 23, 42, 0.12)',
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '800', color: '#0B1220' }}>{p.name}</Text>
            <Text style={{ marginTop: 6, color: '#4B5565' }}>₹{(p.price / 100).toFixed(2)}</Text>
            <Text style={{ marginTop: 10, color: '#0A3D7A', fontSize: 12, fontWeight: '700' }}>
              Pediatrician‑Approved • Toxin‑Free
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

