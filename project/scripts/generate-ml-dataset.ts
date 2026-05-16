import { prisma } from "@/lib/prisma";
import { createObjectCsvWriter } from "csv-writer";
import path from "path";

async function generateIndustryStandardDataset() {
  console.log("🛠️ Generating Industry-Grade Dataset...");

  try {
    const users = await prisma.user.findMany({
      include: {
        userBodyDetails: true,
        dailySummaries: true,
        foodLogs: true,
      },
    });

    const records = users
      .filter((u) => u.userBodyDetails)
      .map((user) => {
        const d = user.userBodyDetails!;
        const summaries = user.dailySummaries;

        // Feature 1: BMI (Standard Health Metric)
        const bmi = parseFloat(
          (d.weight / Math.pow(d.height / 100, 2)).toFixed(2),
        );

        // Feature 2: Consistency Score (How many days did they log data?)
        const daysLogged = summaries.length;

        // Feature 3: Physical Activity (Avg steps over time)
        const avgSteps = daysLogged
          ? Math.round(summaries.reduce((a, s) => a + s.steps, 0) / daysLogged)
          : 0;

        // Feature 4: Sleep Quality (Deviation from 8 hours)
        const avgSleep = daysLogged
          ? summaries.reduce((a, s) => a + s.sleepHours, 0) / daysLogged
          : d.sleepHours;

        // Feature 5: Caloric Balance (In vs Out)
        const avgCalIn = daysLogged
          ? summaries.reduce((a, s) => a + s.totalCaloriesIn, 0) / daysLogged
          : 0;
        const avgCalOut = daysLogged
          ? summaries.reduce((a, s) => a + s.totalCaloriesOut, 0) / daysLogged
          : 0;
        const netCalories = parseFloat((avgCalIn - avgCalOut).toFixed(2));

        return {
          age: d.age,
          gender: d.gender === "Male" ? 1 : 0,
          bmi: bmi,
          avg_steps: avgSteps,
          avg_sleep: avgSleep.toFixed(1),
          net_calories: netCalories,
          chronic_diseases: d.chronicDiseases.length,
          on_treatment: d.onTreatment ? 1 : 0,
          activity_level:
            d.activity === "Active" ? 2 : d.activity === "Moderate" ? 1 : 0,
        };
      });

    const csvWriter = createObjectCsvWriter({
      path: path.join(process.cwd(), "ml/datasets/health_training_data.csv"),
      header: [
        { id: "age", title: "age" },
        { id: "gender", title: "gender" },
        { id: "bmi", title: "bmi" },
        { id: "avg_steps", title: "avg_steps" },
        { id: "avg_sleep", title: "avg_sleep" },
        { id: "net_calories", title: "net_calories" },
        { id: "chronic_diseases", title: "chronic_diseases" },
        { id: "on_treatment", title: "on_treatment" },
        { id: "activity_level", title: "activity_level" },
      ],
    });

    await csvWriter.writeRecords(records);
    console.log("✅ Dataset Ready for Python Model Training.");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

generateIndustryStandardDataset();
