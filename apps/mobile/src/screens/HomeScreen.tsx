import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'react-native';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const items: Array<{ title: string; subtitle: string; route: keyof RootStackParamList }> = [
  { title: 'Doctor‑Verified Catalog', subtitle: 'BIS‑certified toys & organic essentials', route: 'Catalog' },
  {
    title: 'Milestone Tracker',
    subtitle: 'Stage-based “Doctor‑Prescribed” recommendations',
    route: 'Milestones',
  },
  { title: 'Expert Resource Library', subtitle: 'Pregnancy and pediatric guidance', route: 'Library' },
  { title: 'Subscription Boxes', subtitle: 'Monthly developmental kits', route: 'SubscriptionBox' },
];

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, padding: 16, gap: 12, backgroundColor: '#F7FBFF' }}>
      <View style={{ padding: 16, borderRadius: 16, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: '#0A3D7A' }}>CradleCare</Text>
        <Text style={{ marginTop: 6, color: '#4B5565' }}>
          Premium medical‑commerce • Pregnancy → 5 Years
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
          {['Pediatrician‑Approved', 'Toxin‑Free', 'BIS‑Certified'].map((t) => (
            <View
              key={t}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 999,
                borderWidth: 1,
                borderColor: 'rgba(15, 23, 42, 0.12)',
                backgroundColor: 'rgba(255,255,255,0.7)',
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: '700', color: '#0A3D7A' }}>{t}</Text>
            </View>
          ))}
        </View>
      </View>

      {items.map((it) => (
        <Pressable
          key={it.title}
          onPress={() => navigation.navigate(it.route)}
          style={{
            padding: 16,
            borderRadius: 16,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'rgba(15, 23, 42, 0.12)',
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '800', color: '#0B1220' }}>{it.title}</Text>
          <Text style={{ marginTop: 6, color: '#4B5565' }}>{it.subtitle}</Text>
        </Pressable>
      ))}
    </View>
  );
}

