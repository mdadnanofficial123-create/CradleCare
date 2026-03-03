import { ScrollView, Text, View } from 'react-native';

const boxes = [
  {
    title: 'Starter Development Kit',
    cadence: 'Monthly',
    includes: ['Stage-based toys', 'Organic essentials', 'Doctor guidance card'],
  },
  {
    title: 'Milestone Boost Kit',
    cadence: 'Monthly',
    includes: ['Skill-focused play', 'Sensory tools', 'Parent checklist'],
  },
  {
    title: 'Premium Care Kit',
    cadence: 'Monthly',
    includes: ['Curated essentials', 'Add-on toys', 'Priority support'],
  },
];

export function SubscriptionBoxScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F7FBFF' }} contentContainerStyle={{ padding: 16, gap: 12 }}>
      <View style={{ padding: 16, borderRadius: 16, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: '800', color: '#0A3D7A' }}>Subscription Boxes</Text>
        <Text style={{ marginTop: 6, color: '#4B5565' }}>
          Monthly delivery of developmental kits curated by stage—built for consistency and progress.
        </Text>
      </View>

      {boxes.map((b) => (
        <View
          key={b.title}
          style={{
            padding: 16,
            borderRadius: 16,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'rgba(15, 23, 42, 0.12)',
          }}
        >
          <View
            style={{
              alignSelf: 'flex-start',
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: 'rgba(15, 23, 42, 0.12)',
              backgroundColor: 'rgba(255,255,255,0.7)',
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: '800', color: '#0A3D7A' }}>{b.cadence}</Text>
          </View>
          <Text style={{ marginTop: 10, fontSize: 16, fontWeight: '800', color: '#0B1220' }}>{b.title}</Text>
          <View style={{ marginTop: 10, gap: 6 }}>
            {b.includes.map((i) => (
              <Text key={i} style={{ color: '#4B5565' }}>
                - {i}
              </Text>
            ))}
          </View>
          <Text style={{ marginTop: 12, color: '#0A3D7A', fontSize: 12, fontWeight: '800' }}>
            Pediatrician‑Approved • Toxin‑Free
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

