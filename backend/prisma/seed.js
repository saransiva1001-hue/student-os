const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database foundation...');

  // Configure default system settings
  const defaultSettings = [
    { key: 'theme', value: 'dark' },
    { key: 'weeklyStudyGoalHours', value: '20' },
    { key: 'notificationsEnabled', value: 'true' }
  ];

  for (const setting of defaultSettings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }

  console.log('Database foundation seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
