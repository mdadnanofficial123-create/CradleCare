import { ScrollView, Text, View } from 'react-native';

const articles = [
  {
    title: 'Newborn sleep: a clinician’s checklist',
    tag: '0–3 months',
    summary: 'A calm, clinical checklist for safer sleep routines and common red flags.',
  },
  {
    title: 'Starting solids: what to introduce and when',
    tag: '4–12 months',
    summary: 'A stage-based guide to textures, allergens, and feeding routines.',
  },
  {
    title: 'Developmental play: skill-building by age',
    tag: '1–5 years',
    summary: 'Play activities mapped to coordination, language, and social development.',
  },
];

export function LibraryScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F7FBFF' }} contentContainerStyle={{ padding: 16, gap: 12 }}>
      <View style={{ padding: 16, borderRadius: 16, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: '800', color: '#0A3D7A' }}>Expert Resource Library</Text>
        <Text style={{ marginTop: 6, color: '#4B5565' }}>
          Doctor-led pregnancy and pediatric guidance with a premium reading experience.
        </Text>
      </View>

      {articles.map((a) => (
        <View
          key={a.title}
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
            <Text style={{ fontSize: 12, fontWeight: '800', color: '#0A3D7A' }}>{a.tag}</Text>
          </View>
          <Text style={{ marginTop: 10, fontSize: 16, fontWeight: '800', color: '#0B1220' }}>{a.title}</Text>
          <Text style={{ marginTop: 6, color: '#4B5565' }}>{a.summary}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

