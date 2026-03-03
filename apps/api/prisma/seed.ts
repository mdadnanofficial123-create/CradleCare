import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Users
  const users = [
    { email: 'alice.parent@example.com', password: 'password123', role: 'PARENT' },
    { email: 'dr.bob@example.com', password: 'password123', role: 'DOCTOR' },
    { email: 'admin@example.com', password: 'password123', role: 'ADMIN' },
  ];

  for (const u of users) {
    const hashed = await bcrypt.hash(u.password, 10);
    await prisma.user.upsert({
      where: { email: u.email },
      update: { password: hashed },
      create: {
        email: u.email,
        password: hashed,
        role: u.role as any,
      },
    });
  }

  // Products
  const products = [
    { name: 'Newborn Essentials Kit', price: 2999 },
    { name: 'Comfort Stroller', price: 12999 },
    { name: 'BPA-free Teether', price: 499 },
  ];

  for (const p of products) {
    await prisma.product.upsert({
      where: { id: `seed-${p.name.replace(/\s+/g, '-')}` },
      update: {},
      create: {
        id: `seed-${p.name.replace(/\s+/g, '-')}`,
        name: p.name,
        price: p.price,
      },
    });
  }

  // Articles
  const articles = [
    {
      title: 'Newborn sleep: a clinician’s checklist',
      tag: '0–3 months',
      summary: 'A calm, clinical checklist for safer sleep routines and common red flags.',
      content: 'Full article content goes here. This is sample seed content.',
    },
    {
      title: 'Starting solids: what to introduce and when',
      tag: '4–12 months',
      summary: 'A stage-based guide to textures, allergens, and feeding routines.',
      content: 'Full article content goes here. This is sample seed content.',
    },
  ];

  // Milestones
  const milestones = [
    { title: 'First Smile', description: 'Record baby’s first smile', dueDate: new Date('2026-03-10') },
    { title: 'First Tooth', description: 'Celebrate first tooth emergence', dueDate: new Date('2026-04-01') },
  ];

  for (const m of milestones) {
    await prisma.milestone.upsert({
      where: { id: `seed-${m.title.replace(/\s+/g, '-')}` },
      update: {},
      create: {
        id: `seed-${m.title.replace(/\s+/g, '-')}`,
        title: m.title,
        description: m.description,
        dueDate: m.dueDate,
      },
    });
  }

  for (const a of articles) {
    await prisma.article.upsert({
      where: { id: `seed-${a.title.replace(/\s+/g, '-')}` },
      update: {},
      create: {
        id: `seed-${a.title.replace(/\s+/g, '-')}`,
        title: a.title,
        tag: a.tag,
        summary: a.summary,
        content: a.content,
      },
    });
  }

  console.log('Seeding complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
