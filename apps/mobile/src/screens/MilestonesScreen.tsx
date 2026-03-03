import { useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

type Rec = { title: string; why: string };

function getStage(months: number) {
  if (months <= 3) return '0–3 months';
  if (months <= 6) return '4–6 months';
  if (months <= 12) return '7–12 months';
  if (months <= 24) return '1–2 years';
  if (months <= 36) return '2–3 years';
  if (months <= 60) return '3–5 years';
  return '5+ years';
}

function recommendationsForStage(stage: string): Rec[] {
  switch (stage) {
    case '0–3 months':
      return [
        { title: 'Newborn Essentials Kit', why: 'Skin-safe basics; routine support' },
        { title: 'Swaddle & Sleep Comfort', why: 'Better sleep hygiene for early weeks' },
      ];
    case '4–6 months':
      return [
        { title: 'Teether (BPA-free)', why: 'Soothes gums; sensory exploration' },
        { title: 'Tummy Time Mat', why: 'Supports neck and core strength' },
      ];
    case '7–12 months':
      return [
        { title: 'Stacking Rings', why: 'Hand‑eye coordination and grip' },
        { title: 'Baby Monitor', why: 'Safe sleep & supervision' },
      ];
    case '1–2 years':
      return [
        { title: 'Shape Sorter', why: 'Problem solving and fine motor skills' },
        { title: 'Comfort Stroller', why: 'Daily mobility and posture comfort' },
      ];
    case '2–3 years':
      return [
        { title: 'Pretend Play Kit', why: 'Language and social development' },
        { title: 'Activity Book (washable)', why: 'Early learning + attention building' },
      ];
    case '3–5 years':
      return [
        { title: 'STEM Builder Set', why: 'Planning, sequencing, creativity' },
        { title: 'Art & Craft Essentials', why: 'Fine motor control + self-expression' },
      ];
    default:
      return [{ title: 'Start with the tracker', why: 'Enter age to get stage-based recommendations' }];
  }
}

export function MilestonesScreen() {
  const [monthsRaw, setMonthsRaw] = useState('6');
  const months = Number(monthsRaw || '0');
  const stage = useMemo(() => getStage(Number.isFinite(months) ? months : 0), [months]);
  const recs = useMemo(() => recommendationsForStage(stage), [stage]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F7FBFF' }} contentContainerStyle={{ padding: 16, gap: 12 }}>
      <View style={{ padding: 16, borderRadius: 16, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, fontWeight: '800', color: '#0A3D7A' }}>Milestone Tracker</Text>
        <Text style={{ marginTop: 6, color: '#4B5565' }}>
          Enter your baby’s age (months) to receive stage-based “Doctor‑Prescribed” product recommendations.
        </Text>
      </View>

      <View style={{ padding: 16, borderRadius: 16, backgroundColor: 'white' }}>
        <Text style={{ fontWeight: '800', color: '#0B1220' }}>Baby age (months)</Text>
        <TextInput
          value={monthsRaw}
          onChangeText={setMonthsRaw}
          keyboardType="number-pad"
          style={{
            marginTop: 10,
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: 'rgba(15, 23, 42, 0.12)',
            backgroundColor: 'white',
          }}
        />
        <Text style={{ marginTop: 10, color: '#0A3D7A', fontWeight: '800' }}>Stage: {stage}</Text>
        <Text style={{ marginTop: 8, color: '#4B5565', fontSize: 12 }}>
          This is a first-pass UI model; next we’ll wire real recommendations from the API + your child profile.
        </Text>
      </View>

      {recs.map((r) => (
        <View
          key={r.title}
          style={{
            padding: 16,
            borderRadius: 16,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'rgba(15, 23, 42, 0.12)',
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '800', color: '#0B1220' }}>{r.title}</Text>
          <Text style={{ marginTop: 6, color: '#4B5565' }}>{r.why}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

