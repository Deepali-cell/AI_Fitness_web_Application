import { exercises } from "@/lib/exerciseData";
import { prisma } from "@/lib/prisma";

async function main() {
  console.log("Seeding exercise library...");

  for (const ex of exercises) {
    await prisma.exerciseLibrary.upsert({
      where: { name: ex.name },
      update: {},
      create: ex,
    });
  }

  console.log("Seeding complete! Your library is ready.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
