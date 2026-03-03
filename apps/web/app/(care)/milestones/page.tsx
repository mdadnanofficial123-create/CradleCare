import { PageShell } from '../../../components/layout/PageShell';
import { MilestoneTracker } from './MilestoneTracker';

export default function MilestonesPage() {
  return (
    <main>
      <PageShell
        title="Milestone Tracker"
        subtitle="Enter your baby’s age to receive stage-based “Doctor‑Prescribed” product recommendations."
      >
        <MilestoneTracker />
      </PageShell>
    </main>
  );
}

